import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { useTransactionStore } from "../../transactions/stores/useTransactionStore";

export const BalanceCard = () => {
  // Subscribe to transactions array to trigger re-renders
  const transactions = useTransactionStore((state) => state.transactions);

  // Calculate derived state inside component to ensure reactivity
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expenses;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 text-white shadow-xl relative overflow-hidden h-full"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl" />

      <div className="relative z-10 flex flex-col justify-between h-full gap-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-blue-100 font-medium mb-1">Total Balance</p>
            <h2 className="text-4xl font-bold tracking-tight">
              ${balance.toFixed(2)}
            </h2>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
            <Wallet className="text-white" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2 mb-2 text-blue-100 text-sm">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp size={12} className="text-emerald-300" />
              </div>
              Income
            </div>
            <p className="text-xl font-semibold">${income.toFixed(2)}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2 mb-2 text-blue-100 text-sm">
              <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center">
                <TrendingDown size={12} className="text-rose-300" />
              </div>
              Expenses
            </div>
            <p className="text-xl font-semibold">${expenses.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
