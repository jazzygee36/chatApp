import { z } from "zod";


export const loginInput = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(18),
});


export const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(18),
  username: z.string().min(4).max(18),
  confirmPwd: z.string().min(6).max(18),

});