import DashboardLayout from "../components/layout/DashboardLayout";
import { ExpenseChart } from "../features/dashboard/components/ExpenseChart";

import { AnalyticsSummary } from "../features/analytics/components/AnalyticsSummary";
import { MonthlyBarChart } from "../features/analytics/components/MonthlyBarChart";
import { CategoryPieChart } from "../features/analytics/components/CategoryPieChart";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-slate-800">Analytics</h2>

        <AnalyticsSummary />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MonthlyBarChart />
          <CategoryPieChart />
          <ExpenseChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
