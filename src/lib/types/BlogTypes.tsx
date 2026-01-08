import * as z from "zod";

export interface IBlogDataStr {
  title: string;
  summary: string;
  description: string;
  status?: string | undefined;
  author: string;
  image: File | null;
}


export const BlogDTO = z.object({
  title: z.string().nonempty(),
  summary: z.string().min(20).max(255).nonempty(),
  description: z.string().nonempty(),
  status: z
    .string()
    .regex(/^(active|inactive)$/)
    .default("inactive"),
  author: z.string().nonempty(),
  image: z.file().nullable(),
});
