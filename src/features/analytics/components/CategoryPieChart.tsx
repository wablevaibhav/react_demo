import { useMemo } from "react";
import { useTransactionStore } from "../../transactions/stores/useTransactionStore";
import { Card } from "../../../shared/ui/Card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#6366f1",
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white p-3 rounded-xl shadow-xl border border-slate-700">
        <p className="font-medium text-sm mb-1">{payload[0].name}</p>
        <p className="font-bold text-lg">${payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export const CategoryPieChart = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const data = useMemo(() => {
    const expenses = transactions.filter((t) => t.type === "expense");
    const categoryMap: Record<string, number> = {};

    expenses.forEach((t) => {
      if (categoryMap[t.category]) {
        categoryMap[t.category] += t.amount;
      } else {
        categoryMap[t.category] = t.amount;
      }
    });

    return Object.entries(categoryMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [transactions]);

  return (
    <Card className="col-span-1 h-full flex flex-col min-h-[400px]">
      <div className="mb-6">
        <h3 className="font-bold text-lg text-slate-800">Expense Breakdown</h3>
        <p className="text-sm text-slate-500">
          Distribution of your spending by category
        </p>
      </div>

      <div className="flex-1 w-full min-h-[300px]">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                formatter={(value) => (
                  <span className="text-slate-600 text-sm font-medium ml-1">
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-slate-400">
            No expense data available
          </div>
        )}
      </div>
    </Card>
  );
};
