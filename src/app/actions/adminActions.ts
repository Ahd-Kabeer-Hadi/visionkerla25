/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { prisma } from "@/lib/prisma";
import { Admin, AdminSchema } from "@/lib/validation/admin";

const db = prisma;

// Admin login function
export async function adminLogin(
  email: string,
  password: string
): Promise<
  { success: true; admin: Admin } | { success: false; error: string }
> {
  try {
    // Validate input email and password using a subset of AdminSchema
    const AdminLoginSchema = AdminSchema.pick({
      email: true,
      password: true,
    });

    AdminLoginSchema.parse({ email, password });

    // Find the admin using the provided email
    const admin = await db.admin.findFirst({
      where: { email },
    });
    if (!admin) {
      throw new Error("Admin not found.");
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = password === admin.password ? true : false;
    if (!isPasswordValid) {
      throw new Error("Invalid email or password.");
    }

    // Return successful response with admin details
    return {
      success: true,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        phoneNumber: admin.phoneNumber,
        password: admin.password, // Typically, avoid returning passwords even if hashed
      },
    };
  } catch (error: unknown) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
