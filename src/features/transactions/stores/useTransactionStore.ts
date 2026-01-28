import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import type { Transaction, TransactionInput } from "../types";

interface TransactionState {
  transactions: Transaction[];
  addTransaction: (input: TransactionInput) => void;
  removeTransaction: (id: string) => void;
  getTotalBalance: () => number;
  getIncome: () => number;
  getExpenses: () => number;
}

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      transactions: [
        // Initial Dummy Data that acts as "Real" mock if empty
        {
          id: "1",
          title: "Initial Balance",
          amount: 1000,
          type: "income",
          category: "Salary",
          date: new Date().toISOString(),
        },
      ],
      addTransaction: (input) => {
        const newTransaction: Transaction = {
          id: uuidv4(),
          ...input,
        };
        set((state) => ({
          transactions: [newTransaction, ...state.transactions],
        }));
      },
      removeTransaction: (id) => {
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        }));
      },
      getTotalBalance: () => {
        const { transactions } = get();
        return transactions.reduce((acc, curr) => {
          return curr.type === "income" ? acc + curr.amount : acc - curr.amount;
        }, 0);
      },
      getIncome: () => {
        const { transactions } = get();
        return transactions
          .filter((t) => t.type === "income")
          .reduce((acc, curr) => acc + curr.amount, 0);
      },
      getExpenses: () => {
        const { transactions } = get();
        return transactions
          .filter((t) => t.type === "expense")
          .reduce((acc, curr) => acc + curr.amount, 0);
      },
    }),
    {
      name: "breezy-transactions-storage",
      storage: createJSONStorage(() => localStorage),
      skipHydration: false,
    },
  ),
);
