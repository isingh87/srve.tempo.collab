import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NotificationsList from "./NotificationsList";
import { Bell } from "lucide-react";

interface NotificationsSectionProps {
  className?: string;
}

export default function NotificationsSection({
  className = "",
}: NotificationsSectionProps) {
  return (
    <Card className={`p-6 bg-white space-y-6 ${className}`}>
      <div className="flex flex-col space-y-6">
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Notifications</h2>
            <p className="text-sm text-muted-foreground">
              Recent updates and alerts
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>

        {/* Notifications List */}
        <NotificationsList />
      </div>
    </Card>
  );
}
