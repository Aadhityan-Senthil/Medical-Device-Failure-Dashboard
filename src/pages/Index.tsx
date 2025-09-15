import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import EquipmentTable from "@/components/dashboard/EquipmentTable";
import AlertsPanel from "@/components/dashboard/AlertsPanel";
import { Activity, AlertTriangle, Shield, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Medical Equipment Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and predict equipment failures to ensure patient safety and minimize downtime.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Equipment"
            value="247"
            change="+12"
            changeType="positive"
            icon={Activity}
            description="from last month"
          />
          <StatsCard
            title="Active Alerts"
            value="8"
            change="-3"
            changeType="positive"
            icon={AlertTriangle}
            description="from yesterday"
          />
          <StatsCard
            title="Prediction Accuracy"
            value="94.2%"
            change="+2.1%"
            changeType="positive"
            icon={TrendingUp}
            description="this quarter"
          />
          <StatsCard
            title="Safety Score"
            value="98.7%"
            change="+0.3%"
            changeType="positive"
            icon={Shield}
            description="facility wide"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <EquipmentTable />
          </div>
          <div>
            <AlertsPanel />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
