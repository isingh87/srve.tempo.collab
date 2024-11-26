import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Bell, CheckCircle, X, ExternalLink } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: "info" | "warning" | "success";
  read: boolean;
  avatar?: string;
}

interface NotificationsListProps {
  notifications?: Notification[];
  onMarkAsRead?: (id: string) => void;
  onDismiss?: (id: string) => void;
}

export default function NotificationsList({
  notifications = [
    {
      id: "1",
      title: "New Team Member",
      message: "Sarah Johnson has joined the team as a Chef",
      timestamp: "2 hours ago",
      type: "info",
      read: false,
      avatar: "https://dummyimage.com/40/4F46E5/ffffff&text=SJ",
    },
    {
      id: "2",
      title: "Gig Update",
      message: "Corporate Lunch Event details have been updated",
      timestamp: "4 hours ago",
      type: "warning",
      read: false,
    },
    {
      id: "3",
      title: "Availability Confirmed",
      message: "5 team members confirmed availability for Wedding Reception",
      timestamp: "1 day ago",
      type: "success",
      read: true,
    },
  ],
  onMarkAsRead = () => {},
  onDismiss = () => {},
}: NotificationsListProps) {
  return (
    <Card className="p-4 bg-white w-full">
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start gap-3 p-3 rounded-lg ${
              notification.read
                ? "bg-slate-50"
                : "bg-white border border-slate-200"
            }`}
          >
            {/* Avatar or Icon */}
            {notification.avatar ? (
              <Avatar className="h-8 w-8">
                <img src={notification.avatar} alt="" />
              </Avatar>
            ) : (
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-primary/10">
                <Bell className="h-4 w-4 text-primary" />
              </div>
            )}

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {notification.message}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {notification.timestamp}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {!notification.read && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onMarkAsRead(notification.id)}
                  className="h-6 w-6"
                >
                  <CheckCircle className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDismiss(notification.id)}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
