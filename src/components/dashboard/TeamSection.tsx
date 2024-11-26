import React from "react";
import { Card } from "@/components/ui/card";
import TeamStats from "./TeamStats";
import RoleBreakdown from "./RoleBreakdown";

interface TeamSectionProps {
  className?: string;
}

export default function TeamSection({ className = "" }: TeamSectionProps) {
  return (
    <Card className={`p-6 bg-white space-y-6 ${className}`}>
      <div className="flex flex-col space-y-6">
        {/* Section Title */}
        <div>
          <h2 className="text-2xl font-semibold">Team Members</h2>
          <p className="text-sm text-muted-foreground">
            Overview of your team composition and availability
          </p>
        </div>

        {/* Team Stats */}
        <TeamStats />

        {/* Role Breakdown */}
        <RoleBreakdown />
      </div>
    </Card>
  );
}
