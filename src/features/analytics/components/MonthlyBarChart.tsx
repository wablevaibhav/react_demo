import { useMemo } from 'react';
import { useTransactionStore } from '../../transactions/stores/useTransactionStore';
import { Card } from '../../../shared/ui/Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { format, parseISO, subMonths, isSameMonth } from 'date-fns';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white p-3 rounded-xl shadow-xl border border-slate-700">
        <p className="text-xs text-slate-400 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-sm text-slate-300 capitalize">{entry.name}:</span>
            <span className="font-bold text-sm">${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const MonthlyBarChart = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const data = useMemo(() => {
    // Last 6 months
    const months = Array.from({ length: 6 }, (_, i) => subMonths(new Date(), 5 - i));

    return months.map(month => {
      const monthTransactions = transactions.filter(t => 
        isSameMonth(parseISO(t.date), month)
      );

      const income = monthTransactions
        .filter(t => t.type === 'income')
        .reduce((acc, curr) => acc + curr.amount, 0);

      const expense = monthTransactions
        .filter(t => t.type === 'expense')
        .reduce((acc, curr) => acc + curr.amount, 0);

      return {
        name: format(month, 'MMM'),
        fullName: format(month, 'MMMM yyyy'),
        income,
        expense
      };
    });
  }, [transactions]);

  return (
    <Card className="col-span-1 lg:col-span-2 h-full flex flex-col min-h-[400px]">
      <div className="mb-6">
        <h3 className="font-bold text-lg text-slate-800">Monthly Trends</h3>
        <p className="text-sm text-slate-500">Income vs Expenses over the last 6 months</p>
      </div>

      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barSize={40}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Legend 
                iconType="circle"
                wrapperStyle={{ paddingTop: '20px' }}
            />
            <Bar 
                dataKey="income" 
                name="Income" 
                fill="#10b981" 
                radius={[4, 4, 0, 0]} 
            />
            <Bar 
                dataKey="expense" 
                name="Expense" 
                fill="#3b82f6" 
                radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
