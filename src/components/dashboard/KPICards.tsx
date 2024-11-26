import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUp,
  ArrowDown,
  TrendingUp,
  Users,
  Calendar,
  Star,
} from "lucide-react";

interface KPICard {
  label: string;
  value: string;
  change: {
    value: string;
    trend: "up" | "down";
  };
  icon: React.ReactNode;
}

interface KPICardsProps {
  metrics?: KPICard[];
}

export default function KPICards({
  metrics = [
    {
      label: "Total Revenue",
      value: "$48,750",
      change: { value: "+12.5%", trend: "up" },
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      label: "Gigs Completed",
      value: "156",
      change: { value: "+8.2%", trend: "up" },
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      label: "Team Satisfaction",
      value: "4.8/5",
      change: { value: "-2.1%", trend: "down" },
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Customer Rating",
      value: "4.9/5",
      change: { value: "+4.3%", trend: "up" },
      icon: <Star className="h-5 w-5" />,
    },
  ],
}: KPICardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-6 flex flex-col space-y-4 bg-white">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-primary/10 rounded-full">{metric.icon}</div>
            <Badge
              variant={metric.change.trend === "up" ? "default" : "destructive"}
              className="flex items-center gap-1"
            >
              {metric.change.trend === "up" ? (
                <ArrowUp className="h-3 w-3" />
              ) : (
                <ArrowDown className="h-3 w-3" />
              )}
              {metric.change.value}
            </Badge>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">
              {metric.label}
            </h3>
            <p className="text-2xl font-bold">{metric.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
