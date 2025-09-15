import { 
  Activity, 
  AlertTriangle, 
  BarChart3, 
  Calendar, 
  Home, 
  Settings, 
  Shield, 
  Users,
  HeartHandshake,
  Database
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, current: true },
  { name: "Equipment Monitor", href: "/equipment", icon: Activity, current: false },
  { name: "Predictions", href: "/predictions", icon: AlertTriangle, current: false },
  { name: "Analytics", href: "/analytics", icon: BarChart3, current: false },
  { name: "Maintenance", href: "/maintenance", icon: Calendar, current: false },
  { name: "Data Sources", href: "/data", icon: Database, current: false },
  { name: "Safety Alerts", href: "/safety", icon: Shield, current: false },
  { name: "Team", href: "/team", icon: Users, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
];

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("flex h-full w-64 flex-col bg-card border-r", className)}>
      <div className="flex h-16 items-center px-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <HeartHandshake className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">MedPredict</h1>
            <p className="text-xs text-muted-foreground">Admin Dashboard</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                item.current
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}