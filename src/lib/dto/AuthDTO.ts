import * as z from "zod"
import { passwordRule } from "../rules/Regex"

export const RegisterDTO = z.object({
  fullName: z.string().min(2, "Name must have atlease 2 characters").max(50, "Name must be less than 50 characters").nonempty().trim(),
  email: z.email().nonempty(),
  password: z.string().regex(passwordRule, "Password must contain atleast 1 uppercase character, 1 lowercase character").nonempty(),
  confirmPassword: z.string().nonempty()
}).refine((data) => data.password === data.confirmPassword,{ path: ["confirmPassword"]})
