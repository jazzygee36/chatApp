import { z } from "zod";

export const loginInput = z.object({
  email: z.string().email("email is required"),
  password: z.string().min(6, "password is required").max(18),
});

export const SignupSchema = z
  .object({
    email: z.string().email("email is required"),
    password: z.string().min(6, "password must not be less than 6 characters"),
    username: z.string().min(1, "username is required"),
    confirmPwd: z
      .string()
      .min(6, "confirm password must be same with password"),
  })
  .refine((data) => data.password === data.confirmPwd, {
    message: "Password doesn't match",
    path: ["confirmPwd"],
  });
