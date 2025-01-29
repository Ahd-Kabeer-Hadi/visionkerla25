import { z } from "zod";


export const AdminSchema = z.object(
    {
        id: z.string().optional(),
        name: z.string().min(1, { message: "Name is required" }),
        email: z.string().email({ message: "Invalid email format" }),
        phoneNumber : z
        .string()
        .regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }),
        password : z.string().min(8, {message : "Password is required"})
    }
)
export type Admin = z.infer<typeof AdminSchema>