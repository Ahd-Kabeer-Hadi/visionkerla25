/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { prisma } from "@/lib/prisma";
import {
  Driver,
  DriverFilterSchema,
  DriverSchema,
} from "@/lib/validation/driver";
import { z, ZodIssue } from "zod";

const db = prisma;

// Helper function to format error responses
function formatError(error: unknown) {
  if (error instanceof z.ZodError) {
    return { success: false, errors: error.errors };
  }
  if (error instanceof Error) {
    return { success: false, message: error.message };
  }
  return { success: false, message: "An unknown error occurred." };
}

// Submit a new driver
export async function submitDriver(data: z.infer<typeof DriverSchema>) {
  try {
    const parsedData = DriverSchema.parse(data);

    // Check for existing driver in the same panchayat
    const existingDriver = await db.driver.findFirst({
      where: { panchayat: parsedData.panchayat },
    });

    if (existingDriver) {
      throw new Error("A partner from this panchayat already exists.");
    }

    if (!parsedData.tncAccepted) {
      throw new Error("You must accept the terms and conditions.");
    }

    // Create a new driver record
    const newDriver = await db.driver.create({
      data: {
        ...parsedData,
        status: "REVIEWING", // Default status for new drivers
      },
    });
    if (!newDriver) {
      throw new Error("OOps! Something went wrong. Please contact Support.");
    }

    return { success: true, driver: newDriver };
  } catch (error: unknown) {
    return formatError(error);
  }
}

// Fetch a driver by ID
export async function getDriverById(
  id: string
): Promise<
  { success: true; driver: Driver } | { success: false; error: string }
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
  page: number = 1, // Default to page 1
  pageSize: number = 20 // Default to 20 drivers per page
): Promise<
  | { success: true; drivers: Driver[]; total: number; page: number; pageSize: number }
  | { success: false; message: string; errors?: ZodIssue[] }
> {
  try {
    const skip = (page - 1) * pageSize; // Calculate offset
    const drivers = await db.driver.findMany({
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" }, // Order by latest created drivers
    });

    // Get total driver count for pagination info
    const total = await db.driver.count();

    return { success: true, drivers, total, page, pageSize };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    // Build the Prisma 'where' clause dynamically
    const whereClause: Record<string, any> = {};

    if (parsedFilters.name) {
      whereClause.name = { contains: parsedFilters.name, mode: "insensitive" };
    }
    if (parsedFilters.email) {
      whereClause.email = {
        contains: parsedFilters.email,
        mode: "insensitive",
      };
    }
    if (parsedFilters.phoneNumber) {
      whereClause.phoneNumber = {
        contains: parsedFilters.phoneNumber,
        mode: "insensitive",
      };
    }
    if (parsedFilters.district) {
      whereClause.district = {
        contains: parsedFilters.district,
        mode: "insensitive",
      };
    }
    if (parsedFilters.panchayat) {
      whereClause.panchayat = {
        contains: parsedFilters.panchayat,
        mode: "insensitive",
      };
    }

    const drivers = await db.driver.findMany({ where: whereClause });
    return { success: true, drivers };
  } catch (error: unknown) {
    return formatError(error);
  }
}

// Update a driver by ID
export async function updateDriver(id: string, data: z.infer<typeof DriverSchema>): Promise<
  | { success: true; driver: Driver, errors:null}
  | { success: false; message: string; errors?: any }
> {
  try {
    const parsedData = DriverSchema.parse(data);

    const updatedDriver = await db.driver.update({
      where: { id },
      data: parsedData,
    });

    return { success: true, driver: updatedDriver, errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.errors, message: "Validation failed" };
    }

    return { success: false, errors: null, message: "An unexpected error occurred" };
  }
}

// Delete a driver by ID
export async function deleteDriver(id: string) {
  try {
    await db.driver.delete({
      where: { id },
    });

    return { success: true, message: "Driver deleted successfully" };
  } catch (error: unknown) {
    return formatError(error);
  }
}
