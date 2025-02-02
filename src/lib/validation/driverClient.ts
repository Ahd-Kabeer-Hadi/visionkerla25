import { z } from "zod";

// Utility: Validate file type and size
const validateFile = (file: File) => {
  const validTypes = ["image/jpeg", "image/png"];
  const maxSize = 3 * 1024 * 1024; // 3MB
  return validTypes.includes(file.type) && file.size <= maxSize;
};

// Conditionally define fileOrUrl so that on the server (where File is undefined)
// we only expect a string (URL).
const fileOrUrl = typeof File !== "undefined"
  ? z.union([
      z.instanceof(File, { message: "File is required" }).refine(validateFile, {
        message: "File must be JPG or PNG and less than 3MB",
      }),
      z.string().url({ message: "Must be a valid URL" }),
    ])
  : z.string(); // fallback for server-side

export const DriverClientSchema = z.object({
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
  aadharCardUrl: fileOrUrl,
  driversLicenseNumber: z.string().regex(/^[A-Z]{2}-\d{13}$/, {
    message: "License number must match format: XX-XXXXXXXXXXXXX",
  }),
  driverLicenseUrl: fileOrUrl,
  rcNumber: z.string().regex(/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/, {
    message: "RC number must match format: XX00XX0000",
  }),
  rcUrl: fileOrUrl,
  photourl: fileOrUrl,
  tncAccepted: z.boolean({
    message: "You must accept the terms and conditions to move forward.",
  }),
  status: z.enum(["REVIEWING", "ACCEPTED", "REJECTED"]).default("REVIEWING"),
  createdAt: z.date().optional().default(() => new Date()),
});

export type DriverClient = z.infer<typeof DriverClientSchema>;
