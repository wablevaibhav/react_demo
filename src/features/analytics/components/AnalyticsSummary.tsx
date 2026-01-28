import { useMemo } from "react";
import { useTransactionStore } from "../../transactions/stores/useTransactionStore";
import { Card } from "../../../shared/ui/Card";
import { TrendingUp, TrendingDown, Wallet, Target } from "lucide-react";
import { cn } from "../../../utils/cn";

interface MetricCardProps {
  label: string;
  value: string;
  icon: any;
  trend?: string;
  trendUp?: boolean;
  color: "blue" | "emerald" | "rose" | "violet";
}

const MetricCard = ({ label, value, icon: Icon, color }: MetricCardProps) => {
  const colorStyles = {
    blue: "bg-blue-50 text-blue-600",
    emerald: "bg-emerald-50 text-emerald-600",
    rose: "bg-rose-50 text-rose-600",
    violet: "bg-violet-50 text-violet-600",
  };

  return (
    <Card className="flex items-center gap-4 p-6">
      <div className={cn("p-4 rounded-2xl", colorStyles[color])}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-slate-500 font-medium">{label}</p>
        <h4 className="text-2xl font-bold text-slate-800 mt-1">{value}</h4>
      </div>
    </Card>
  );
};

export const AnalyticsSummary = () => {
  const { getIncome, getExpenses, transactions } = useTransactionStore();

  const metrics = useMemo(() => {
    const totalIncome = getIncome();
    const totalExpenses = getExpenses();
    const savingsRate =
      totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0;

    // Calculate average daily spending (last 30 days)
    const last30DaysExpenses = transactions
      .filter(
        (t) =>
          t.type === "expense" &&
          new Date(t.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      )
      .reduce((acc, curr) => acc + curr.amount, 0);
    const avgDailySpend = last30DaysExpenses / 30;

    return {
      savingsRate: savingsRate.toFixed(1) + "%",
      avgDailySpend: "$" + avgDailySpend.toFixed(2),
      totalTransactions: transactions.length,
      maxExpense: Math.max(
        ...transactions
          .filter((t) => t.type === "expense")
          .map((t) => t.amount),
        0,
      ),
    };
  }, [transactions, getIncome, getExpenses]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        label="Savings Rate"
        value={metrics.savingsRate}
        icon={Target}
        color="emerald"
      />
      <MetricCard
        label="Avg. Daily Spend"
        value={metrics.avgDailySpend}
        icon={Wallet}
        color="blue"
      />
      <MetricCard
        label="Total Transactions"
        value={metrics.totalTransactions.toString()}
        icon={TrendingUp}
        color="violet"
      />
      <MetricCard
        label="Highest Expense"
        value={`$${metrics.maxExpense.toFixed(2)}`}
        icon={TrendingDown}
        color="rose"
      />
    </div>
  );
};
