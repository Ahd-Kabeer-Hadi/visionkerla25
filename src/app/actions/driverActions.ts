/* eslint-disable @typescript-eslint/no-unused-vars */
// app/actions/driverActions.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { prisma } from "@/lib/prisma";
import { deleteFromS3, uploadToS3 } from "@/lib/s3";
import { DriverFilterSchema } from "@/lib/validation/driver";
import { DriverServer, DriverServerSchema } from "@/lib/validation/driverServer";
import { z, ZodIssue } from "zod";

const db = prisma;

const formatError = (error: unknown) => ({
  success: false as const,
  error: error instanceof Error ? error.message : "Unknown error",
});


// Admin login function
export async function userLogin(
  email: string,
): Promise<
  { success: true; driver: DriverServer["id"] } | { success: false; error: string }
> {
  try {
    // Validate input email and password using a subset of AdminSchema
    const DriverLoginSchema = DriverServerSchema.pick({
      email: true,
    });

    DriverLoginSchema.parse({ email });

    // Find the admin using the provided email
    const user = await db.driver.findFirst({
      where: { email },
    });
    if (!user) {
      throw new Error("User not found.");
    }

    // Compare the provided password with the stored hashed password
    
    // Return successful response with admin details
    return {
      success: true,
      driver: user["id"],
    };
  } catch (error: unknown) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
// Create Driver
export async function submitDriver(data: z.infer<typeof DriverServerSchema>) {
  try {
    const parsedData = DriverServerSchema.parse(data);
    const finalData = { ...parsedData };
    const newDriver = await prisma.driver.create({ data: finalData });
    return { success: true, driver: newDriver };
  } catch (error) {
    return formatError(error);
  }
}

// Update Driver
export async function updateDriver(
  id: string,
  data: z.infer<typeof DriverServerSchema>
) {
  try {
    // Use the server schema (which expects URLs, not File objects)
    const parsedData = DriverServerSchema.parse(data);
    const updatedDriver = await prisma.driver.update({
      where: { id },
      data: parsedData,
    });
    return { success: true, driver: updatedDriver };
  } catch (error) {
    return formatError(error);
  }
}

// Delete Driver
export async function deleteDriver(id: string) {
  try {
    const driver = await prisma.driver.findUnique({ where: { id } });
    if (!driver) throw new Error("Driver not found");

    await Promise.all([
      deleteFromS3(driver.aadharCardUrl),
      deleteFromS3(driver.driverLicenseUrl),
      deleteFromS3(driver.rcUrl),
      deleteFromS3(driver.photourl),
    ]);

    await prisma.driver.delete({ where: { id } });
    return { success: true };
  } catch (error) {
    return formatError(error);
  }
}

// Fetch a driver by ID
export async function getDriverById(
  id: string
): Promise<
  { success: true; driver: DriverServer } | { success: false; error: string }
> {
  try {
    const driver = await db.driver.findFirst({
      where: { id },
    });

    if (!driver) {
      throw new Error("Driver not found.");
    }

    return { success: true, driver };
  } catch (error: unknown) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// List all drivers
export async function listAllDrivers(
  page: number = 1,
  pageSize: number = 20
): Promise<
  | {
      success: true;
      drivers: DriverServer[];
      total: number;
      page: number;
      pageSize: number;
    }
  | { success: false; message: string; errors?: ZodIssue[] }
> {
  try {
    const skip = (page - 1) * pageSize;
    const drivers = await db.driver.findMany({
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
    });
    const total = await db.driver.count();

    return { success: true, drivers, total, page, pageSize };
  } catch (error) {
    return { success: false, message: "Failed to fetch drivers", errors: [] };
  }
}

// Filter drivers based on criteria
export async function filterDrivers(
  filters: z.infer<typeof DriverFilterSchema>
) {
  try {
    const parsedFilters = DriverFilterSchema.parse(filters);
    const whereClause: Record<string, any> = {};

    if (parsedFilters.name) {
      whereClause.name = { contains: parsedFilters.name, mode: "insensitive" };
    }
    if (parsedFilters.email) {
      whereClause.email = { contains: parsedFilters.email, mode: "insensitive" };
    }
    if (parsedFilters.phoneNumber) {
      whereClause.phoneNumber = { contains: parsedFilters.phoneNumber, mode: "insensitive" };
    }
    if (parsedFilters.district) {
      whereClause.district = { contains: parsedFilters.district, mode: "insensitive" };
    }
    if (parsedFilters.panchayat) {
      whereClause.panchayat = { contains: parsedFilters.panchayat, mode: "insensitive" };
    }

    const drivers = await db.driver.findMany({ where: whereClause });
    return { success: true, drivers };
  } catch (error: unknown) {
    return formatError(error);
  }
}
