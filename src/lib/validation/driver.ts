import { z } from "zod";

// Enum for DriverStatus
export const DriverStatusEnum = z.enum(["REVIEWING", "ACCEPTED", "REJECTED"]);

// Driver Schema
export const DriverSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }),
  emergencyContact: z
    .string()
    .regex(/^\d{10}$/, { message: "Emergency contact must be exactly 10 digits" }),
  emergencyContactName: z
    .string()
    .min(1, { message: "Emergency contact name is required" }),
  aadhaarCardNumber: z
    .string()
    .regex(/^\d{12}$/, { message: "Aadhaar number must be exactly 12 digits" }),
  driversLicenseNumber: z
    .string()
    .regex(/^[A-Z]{2}-\d{13}$/, {
      message: "License number must match format: XX-XXXXXXXXXXXXX",
    }),
  rcNumber: z
    .string()
    .regex(/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/, {
      message: "RC number must match format: XX00XX0000",
    }),
  district: z.string().min(1, { message: "District is required" }),
  panchayat: z.string().min(1, { message: "Panchayat is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  tncAccepted: z.boolean( {message: "You must accept the terms and conditions to move forward."}).default(false),
  status: DriverStatusEnum.default("REVIEWING"),
});


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
export type Driver = z.infer<typeof DriverSchema>;
export type DriverFilter = z.infer<typeof DriverFilterSchema>;
