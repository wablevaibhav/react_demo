import { z } from "zod";

export const transactionSchema = z.object({
  title: z.string().min(3, "Title is too short"),
  amount: z.number().min(0.01, "Amount must be positive"),
  category: z.enum([
    "Housing",
    "Transport",
    "Food",
    "Utilities",
    "Insurance",
    "Healthcare",
    "Savings",
    "Personal",
    "Entertainment",
    "Miscellaneous",
    "Salary",
    "Business",
    "Gifts",
  ]),
  type: z.enum(["income", "expense"]),
  date: z.string(), // We will handle date as string for simplicity in form
});

export type TransactionFormat = z.infer<typeof transactionSchema>;
