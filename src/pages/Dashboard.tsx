import DashboardLayout from "../components/layout/DashboardLayout";
import { BalanceCard } from "../features/dashboard/components/BalanceCard";
import { ExpenseChart } from "../features/dashboard/components/ExpenseChart";
import { TransactionList } from "../features/transactions/components/TransactionList";
import { AddTransactionForm } from "../features/transactions/components/AddTransactionForm";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2/3 width) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <BalanceCard />
            </div>
          </div>
          {/* Add Transaction and Chart side by side on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <AddTransactionForm />
            <ExpenseChart />
          </div>
        </div>

        {/* Right Column (1/3 width) */}
        <div className="lg:col-span-1 h-full min-h-[500px]">
          <TransactionList />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
