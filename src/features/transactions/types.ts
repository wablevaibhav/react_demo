export type TransactionType = "income" | "expense";

export type TransactionCategory =
  | "Housing"
  | "Transport"
  | "Food"
  | "Utilities"
  | "Insurance"
  | "Healthcare"
  | "Savings"
  | "Personal"
  | "Entertainment"
  | "Miscellaneous"
  | "Salary"
  | "Business"
  | "Gifts";

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  date: string; // ISO String
}

export type TransactionInput = Omit<Transaction, "id">;
