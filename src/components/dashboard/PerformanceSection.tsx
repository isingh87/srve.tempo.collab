import React from "react";
import { Card } from "@/components/ui/card";
import KPICards from "./KPICards";
import PerformanceCharts from "./PerformanceCharts";
import { Clock } from "lucide-react";

interface PerformanceSectionProps {
  className?: string;
}

export default function PerformanceSection({
  className = "",
}: PerformanceSectionProps) {
  return (
    <Card className={`p-6 bg-white space-y-6 ${className}`}>
      {/* Section Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Performance Overview</h2>
          <p className="text-sm text-muted-foreground">
            Track and analyze your team's performance metrics
          </p>
        </div>

        {/* Time Period Selector */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last 30 Days</span>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* KPI Cards */}
      <KPICards />

      {/* Performance Charts */}
      <div className="pt-4">
        <PerformanceCharts />
      </div>
    </Card>
  );
}
