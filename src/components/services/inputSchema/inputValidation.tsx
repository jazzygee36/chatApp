import { z } from "zod";

export const loginInput = z.object({
  username: z.string().min(5, "username is required"),
  password: z
    .string()
    .min(6, "password must not be less than 6 characters")
    .max(18),
});

export const SignupSchema = z
  .object({
    username: z.string().min(3, "username is required"),
    email: z.string().email("email is required"),
    password: z.string().min(6, "password must not be less than 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "confirm password must be same with password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });
