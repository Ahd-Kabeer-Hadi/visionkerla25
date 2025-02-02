// app/lib/validation/driverServer.ts
import { z } from "zod";

export const DriverServerSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  phoneNumber: z.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }),
  emergencyContact: z.string().regex(/^\d{10}$/, { message: "Emergency contact must be exactly 10 digits" }),
  emergencyContactName: z.string().min(1, { message: "Emergency contact name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  district: z.string().min(1, { message: "District is required" }),
  panchayat: z.string().min(1, { message: "Panchayat is required" }),
  aadhaarCardNumber: z.string().regex(/^\d{12}$/, { message: "Aadhaar number must be exactly 12 digits" }),
  aadharCardUrl: z.string().url(),
  driversLicenseNumber: z.string().regex(/^[A-Z]{2}-\d{13}$/, {
    message: "License number must match format: XX-XXXXXXXXXXXXX",
  }),
  driverLicenseUrl: z.string().url(),
  rcNumber: z.string().regex(/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/, {
    message: "RC number must match format: XX00XX0000",
  }),
  rcUrl: z.string().url(),
  photourl: z.string().url(),
  tncAccepted: z.boolean({
    message: "You must accept the terms and conditions to move forward.",
  }),
  status: z.enum(["REVIEWING", "ACCEPTED", "REJECTED"]).default("REVIEWING"),
  createdAt: z.date().optional().default(() => new Date()),
});

export type DriverServer = z.infer<typeof DriverServerSchema>;
