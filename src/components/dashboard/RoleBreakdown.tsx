import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface RoleData {
  role: string;
  count: number;
  color: string;
}

interface RoleBreakdownProps {
  roles?: RoleData[];
  totalMembers?: number;
}

export default function RoleBreakdown({
  roles = [
    { role: "Chef", count: 12, color: "bg-blue-500" },
    { role: "Server", count: 8, color: "bg-green-500" },
    { role: "Bartender", count: 5, color: "bg-purple-500" },
    { role: "Kitchen Staff", count: 3, color: "bg-orange-500" },
  ],
  totalMembers = 28,
}: RoleBreakdownProps) {
  return (
    <Card className="p-4 bg-white">
      <h3 className="text-lg font-semibold mb-4">Team Role Breakdown</h3>
      <div className="space-y-4">
        {roles.map((role, index) => {
          const percentage = Math.round((role.count / totalMembers) * 100);
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{role.role}</span>
                <span className="text-sm text-muted-foreground">
                  {role.count} ({percentage}%)
                </span>
              </div>
              <Progress
                value={percentage}
                className={`h-2 ${role.color}`}
                indicatorClassName={role.color}
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
}
