import React from "react";
import { Users, UserCheck, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TeamStatsProps {
  totalMembers?: number;
  availableMembers?: number;
  onDutyMembers?: number;
}

export default function TeamStats({
  totalMembers = 28,
  availableMembers = 18,
  onDutyMembers = 12,
}: TeamStatsProps) {
  const stats = [
    {
      label: "Total Team Members",
      value: totalMembers,
      icon: <Users className="h-4 w-4" />,
    },
    {
      label: "Available Now",
      value: availableMembers,
      icon: <UserCheck className="h-4 w-4" />,
    },
    {
      label: "On Duty",
      value: onDutyMembers,
      icon: <Clock className="h-4 w-4" />,
    },
  ];

  return (
    <Card className="p-4 bg-white">
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2 p-3 rounded-lg bg-slate-50"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-center">{stat.value}</div>
            <div className="text-sm text-muted-foreground text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
