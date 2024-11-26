import React from "react";
import { Activity, Users, Calendar, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Metric {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

interface MetricsOverviewProps {
  metrics?: Metric[];
}

export default function MetricsOverview({
  metrics = [
    {
      label: "Total Revenue",
      value: "$24,563",
      change: "+12.5%",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      label: "Team Members",
      value: "28",
      change: "+3",
      icon: <Users className="h-4 w-4" />,
    },
    {
      label: "Active Gigs",
      value: "12",
      change: "+2",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      label: "Customer Rating",
      value: "4.8",
      change: "+0.2",
      icon: <Activity className="h-4 w-4" />,
    },
  ],
}: MetricsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-4 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="bg-primary/10 p-2 rounded-full text-primary">
                {metric.icon}
              </span>
              <span className="text-sm text-muted-foreground">
                {metric.label}
              </span>
            </div>
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              {metric.change}
            </span>
          </div>
          <div className="text-2xl font-bold">{metric.value}</div>
        </Card>
      ))}
    </div>
  );
}
