import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Calendar } from "lucide-react";
import GigsList from "./GigsList";

interface GigsSectionProps {
  className?: string;
}

export default function GigsSection({ className = "" }: GigsSectionProps) {
  return (
    <Card className={`p-6 bg-white space-y-6 ${className}`}>
      <div className="flex flex-col space-y-6">
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Upcoming Gigs</h2>
            <p className="text-sm text-muted-foreground">
              Manage and track your scheduled events
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Gig
            </Button>
          </div>
        </div>

        {/* Gigs List */}
        <GigsList />
      </div>
    </Card>
  );
}
