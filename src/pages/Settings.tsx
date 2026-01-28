import DashboardLayout from "../components/layout/DashboardLayout";
import { Card } from "../shared/ui/Card";
import { Button } from "../shared/ui/Button";
import { User, Bell, Shield, Palette } from "lucide-react";

const SettingsItem = ({ icon: Icon, title, desc }: any) => (
  <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
    <Button variant="secondary" size="sm">
      Manage
    </Button>
  </div>
);

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-slate-800">Settings</h2>

        <Card>
          <div className="divide-y divide-slate-100">
            <SettingsItem
              icon={User}
              title="Account"
              desc="Manage your profile and preferences"
            />
            <SettingsItem
              icon={Bell}
              title="Notifications"
              desc="Configure your alert settings"
            />
            <SettingsItem
              icon={Shield}
              title="Security"
              desc="Password and authentication"
            />
            <SettingsItem
              icon={Palette}
              title="Appearance"
              desc="Theme and display settings"
            />
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
