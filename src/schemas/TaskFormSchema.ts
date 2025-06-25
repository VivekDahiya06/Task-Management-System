import { z } from "zod";

// Schema for Task Form
export const taskFormSchema = z.object({
    title: z.string().min(3, { message: "Title must be at least 3 characters" }),
    description: z.string().min(10, { message: "Description must be at least 10 characters" })
});


// Type of Task Form
export type taskFormType = z.infer<typeof taskFormSchema>;