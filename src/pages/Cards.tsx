import DashboardLayout from "../components/layout/DashboardLayout";
import { Card } from "../shared/ui/Card";
import { CreditCard, Plus } from "lucide-react";
import { Button } from "../shared/ui/Button";

const Cards = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-800">My Cards</h2>
          <Button>
            <span className="flex items-center gap-2">
              <Plus size={18} /> Add Card
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mock Card 1 */}
          <div className="h-48 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white flex flex-col justify-between shadow-xl">
            <div className="flex justify-between items-start">
              <span className="font-semibold text-lg">Expense Tracker Pro</span>
              <CreditCard />
            </div>
            <div>
              <p className="font-mono text-xl tracking-widest mb-2">
                **** **** **** 4242
              </p>
              <div className="flex justify-between text-sm text-slate-400">
                <span>Card Holder</span>
                <span>Expires</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>JOHN DOE</span>
                <span>12/28</span>
              </div>
            </div>
          </div>

          <Card className="h-48 flex flex-col items-center justify-center border-dashed border-2 border-slate-200">
            <p className="text-slate-400 font-medium">
              Add a new payment method
            </p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Cards;
