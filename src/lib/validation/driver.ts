// app/lib/validation/driver.ts
import { z } from "zod";

// Enum for DriverStatus
export const DriverStatusEnum = z.enum(["REVIEWING", "ACCEPTED", "REJECTED"]);

// Schema for filtering drivers (e.g., in search forms or filters)
export const DriverFilterSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Invalid email format" }).optional(),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits" })
    .optional(),
  district: z.string().optional(),
  panchayat: z.string().optional(),
});

// TypeScript type inference from the schema

export type DriverFilter = z.infer<typeof DriverFilterSchema>;
