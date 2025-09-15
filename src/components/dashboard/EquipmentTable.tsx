import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const equipmentData = [
  {
    id: "EQ001",
    name: "MRI Scanner Unit A",
    location: "Radiology - Room 101",
    status: "operational",
    riskLevel: "low",
    lastMaintenance: "2024-01-15",
    nextPredicted: "2024-03-01",
    failureProbability: "8%"
  },
  {
    id: "EQ002", 
    name: "Ventilator ICU-3",
    location: "ICU - Bed 3",
    status: "warning",
    riskLevel: "medium",
    lastMaintenance: "2024-01-10",
    nextPredicted: "2024-02-15",
    failureProbability: "23%"
  },
  {
    id: "EQ003",
    name: "CT Scanner Main",
    location: "Radiology - Room 205",
    status: "critical",
    riskLevel: "high",
    lastMaintenance: "2023-12-20",
    nextPredicted: "2024-02-01",
    failureProbability: "67%"
  },
  {
    id: "EQ004",
    name: "Defibrillator ER-1",
    location: "Emergency Room",
    status: "operational",
    riskLevel: "low",
    lastMaintenance: "2024-01-20",
    nextPredicted: "2024-04-15",
    failureProbability: "5%"
  }
];

const statusConfig = {
  operational: { 
    label: "Operational", 
    variant: "default" as const, 
    icon: CheckCircle,
    color: "text-success"
  },
  warning: { 
    label: "Warning", 
    variant: "secondary" as const, 
    icon: Clock,
    color: "text-warning"
  },
  critical: { 
    label: "Critical", 
    variant: "destructive" as const, 
    icon: AlertTriangle,
    color: "text-destructive"
  }
};

const riskConfig = {
  low: { label: "Low", variant: "default" as const },
  medium: { label: "Medium", variant: "secondary" as const },
  high: { label: "High", variant: "destructive" as const }
};

export default function EquipmentTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Equipment Status Monitor</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Equipment</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Risk Level</TableHead>
              <TableHead>Failure Probability</TableHead>
              <TableHead>Next Maintenance</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {equipmentData.map((equipment) => {
              const statusInfo = statusConfig[equipment.status as keyof typeof statusConfig];
              const riskInfo = riskConfig[equipment.riskLevel as keyof typeof riskConfig];
              const StatusIcon = statusInfo.icon;

              return (
                <TableRow key={equipment.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{equipment.name}</div>
                      <div className="text-sm text-muted-foreground">{equipment.id}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{equipment.location}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <StatusIcon className={`h-4 w-4 ${statusInfo.color}`} />
                      <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={riskInfo.variant}>{riskInfo.label}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${
                      parseInt(equipment.failureProbability) > 50 ? 'text-destructive' :
                      parseInt(equipment.failureProbability) > 20 ? 'text-warning' :
                      'text-success'
                    }`}>
                      {equipment.failureProbability}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm">{equipment.nextPredicted}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}