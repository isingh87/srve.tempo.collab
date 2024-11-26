import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, CalendarPlus, Clock, Settings } from "lucide-react";

interface QuickAction {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface QuickActionsProps {
  actions?: QuickAction[];
}

export default function QuickActions({
  actions = [
    {
      label: "Add Team Member",
      icon: <UserPlus className="h-4 w-4" />,
      onClick: () => console.log("Add team member clicked"),
    },
    {
      label: "Create Gig",
      icon: <CalendarPlus className="h-4 w-4" />,
      onClick: () => console.log("Create gig clicked"),
    },
    {
      label: "Update Availability",
      icon: <Clock className="h-4 w-4" />,
      onClick: () => console.log("Update availability clicked"),
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      onClick: () => console.log("Settings clicked"),
    },
  ],
}: QuickActionsProps) {
  return (
    <Card className="p-4 bg-white w-full shadow-sm">
      <div className="flex flex-wrap items-center gap-4 justify-start">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={action.onClick}
            className="flex items-center gap-2 hover:bg-slate-100"
          >
            {action.icon}
            {action.label}
          </Button>
        ))}
      </div>
    </Card>
  );
}
