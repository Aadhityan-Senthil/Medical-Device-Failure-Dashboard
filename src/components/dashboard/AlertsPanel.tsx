import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, CheckCircle, X } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "critical",
    title: "CT Scanner Main - High Failure Risk",
    description: "Predicted failure probability: 67%. Immediate maintenance recommended.",
    timestamp: "2 min ago",
    equipment: "EQ003"
  },
  {
    id: 2,
    type: "warning", 
    title: "Ventilator ICU-3 - Maintenance Due",
    description: "Scheduled maintenance window approaching. Probability: 23%",
    timestamp: "15 min ago",
    equipment: "EQ002"
  },
  {
    id: 3,
    type: "info",
    title: "MRI Scanner Unit A - Calibration Complete",
    description: "Routine calibration completed successfully. Next check: March 1st",
    timestamp: "1 hour ago",
    equipment: "EQ001"
  }
];

const alertConfig = {
  critical: { 
    icon: AlertTriangle, 
    variant: "destructive" as const,
    bgColor: "bg-destructive/10 border-destructive/20"
  },
  warning: { 
    icon: Clock, 
    variant: "secondary" as const,
    bgColor: "bg-warning/10 border-warning/20"
  },
  info: { 
    icon: CheckCircle, 
    variant: "default" as const,
    bgColor: "bg-info/10 border-info/20"
  }
};

export default function AlertsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Recent Alerts
          <Badge variant="secondary">{alerts.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => {
          const config = alertConfig[alert.type as keyof typeof alertConfig];
          const Icon = config.icon;
          
          return (
            <div 
              key={alert.id}
              className={`p-4 rounded-lg border ${config.bgColor}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Icon className="h-5 w-5 mt-0.5 text-current" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {alert.description}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant={config.variant} className="text-xs">
                        {alert.equipment}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {alert.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          );
        })}
        
        <Button variant="outline" className="w-full">
          View All Alerts
        </Button>
      </CardContent>
    </Card>
  );
}