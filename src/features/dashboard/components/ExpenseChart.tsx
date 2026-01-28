import { useMemo } from "react";
import { useTransactionStore } from "../../transactions/stores/useTransactionStore";
import { Card } from "../../../shared/ui/Card";
import { format, isSameDay, subDays } from "date-fns";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white p-3 rounded-xl shadow-xl border border-slate-700">
        <p className="text-xs text-slate-400 mb-1">{label}</p>
        <p className="font-bold text-lg">${payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export const ExpenseChart = () => {
  // Subscribe to transactions to ensure reactivity
  const transactions = useTransactionStore((state) => state.transactions);

  const weeklyData = useMemo(() => {
    const today = new Date();
    // Generate last 7 days including today
    const days = Array.from({ length: 7 }, (_, i) => subDays(today, 6 - i));

    return days.map((day) => {
      const dayExpenses = transactions
        .filter((t) => t.type === "expense" && isSameDay(new Date(t.date), day))
        .reduce((acc, curr) => acc + curr.amount, 0);

      return {
        date: format(day, "MMM dd"),
        day: format(day, "EEE"),
        amount: dayExpenses,
      };
    });
  }, [transactions]);

  return (
    <Card className="col-span-1 h-full flex flex-col min-h-[400px]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-lg text-slate-800">Spending Flow</h3>
        <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
          Last 7 Days
        </span>
      </div>
      <p className="text-sm text-slate-500 mb-6">
        Your comprehensive daily spending overview.
      </p>

      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={weeklyData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorAmount)"
              activeDot={{
                r: 6,
                stroke: "#fff",
                strokeWidth: 2,
                fill: "#3b82f6",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
