import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Briefcase,
  ShoppingCart,
  Tv,
  Car,
  Home,
  Zap,
  Heart,
  Coffee,
  DollarSign,
  Trash2,
} from "lucide-react";
import { useTransactionStore } from "../stores/useTransactionStore";
import { cn } from "../../../utils/cn";
import { format } from "date-fns";
import { Card } from "../../../shared/ui/Card";

const iconMap: any = {
  Housing: Home,
  Transport: Car,
  Food: ShoppingCart,
  Utilities: Zap,
  Insurance: Heart,
  Healthcare: Heart,
  Savings: DollarSign,
  Personal: Coffee,
  Entertainment: Tv,
  Miscellaneous: Smartphone,
  Salary: Briefcase,
  Business: Briefcase,
  Gifts: Heart,
};

export const TransactionList = () => {
  const transactions = useTransactionStore((state) => state.transactions);
  const removeTransaction = useTransactionStore(
    (state) => state.removeTransaction,
  );

  return (
    <Card className="col-span-1 h-full overflow-hidden flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg text-slate-800">
          Recent Transactions
        </h3>
      </div>

      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1 max-h-[400px]">
        <AnimatePresence initial={false}>
          {transactions.length === 0 ? (
            <p className="text-slate-400 text-center py-8">
              No transactions yet.
            </p>
          ) : (
            transactions.map((t) => {
              const Icon = iconMap[t.category] || ShoppingCart;
              const isExpense = t.type === "expense";

              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-4 group cursor-pointer relative p-2 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0",
                      isExpense
                        ? "bg-red-50 text-red-500"
                        : "bg-emerald-50 text-emerald-600",
                    )}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-800 truncate">
                      {t.title}
                    </h4>
                    <p className="text-xs text-slate-400">{t.category}</p>
                  </div>

                  <div className="text-right shrink-0">
                    <p
                      className={cn(
                        "font-bold",
                        isExpense ? "text-slate-800" : "text-emerald-600",
                      )}
                    >
                      {isExpense ? "-" : "+"} ${t.amount.toFixed(2)}
                    </p>
                    <p className="text-xs text-slate-400">
                      {format(new Date(t.date), "MMM d, yyyy")}
                    </p>
                  </div>

                  {/* Delete Button (visible on hover) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTransaction(t.id);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-red-100 text-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};
