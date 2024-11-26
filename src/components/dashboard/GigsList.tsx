import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
  ExternalLinkIcon,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

interface Gig {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  type: string;
  assignedTeam: TeamMember[];
}

interface GigsListProps {
  gigs?: Gig[];
}

export default function GigsList({
  gigs = [
    {
      id: "1",
      name: "Corporate Lunch Event",
      date: "2024-03-15",
      time: "12:00 PM",
      location: "Downtown Business Center",
      type: "Corporate",
      assignedTeam: [
        {
          name: "John Doe",
          role: "Chef",
          avatar: "https://dummyimage.com/40/4F46E5/ffffff&text=JD",
        },
        {
          name: "Sarah Smith",
          role: "Server",
          avatar: "https://dummyimage.com/40/4F46E5/ffffff&text=SS",
        },
      ],
    },
    {
      id: "2",
      name: "Wedding Reception",
      date: "2024-03-20",
      time: "6:00 PM",
      location: "Grand Plaza Hotel",
      type: "Wedding",
      assignedTeam: [
        {
          name: "Mike Johnson",
          role: "Chef",
          avatar: "https://dummyimage.com/40/4F46E5/ffffff&text=MJ",
        },
        {
          name: "Emily Brown",
          role: "Server",
          avatar: "https://dummyimage.com/40/4F46E5/ffffff&text=EB",
        },
      ],
    },
    {
      id: "3",
      name: "Charity Gala Dinner",
      date: "2024-03-25",
      time: "7:00 PM",
      location: "Community Center",
      type: "Charity",
      assignedTeam: [
        {
          name: "Alex Wilson",
          role: "Chef",
          avatar: "https://dummyimage.com/40/4F46E5/ffffff&text=AW",
        },
        {
          name: "Lisa Chen",
          role: "Server",
          avatar: "https://dummyimage.com/40/4F46E5/ffffff&text=LC",
        },
      ],
    },
  ],
}: GigsListProps) {
  return (
    <Card className="p-4 bg-white w-full">
      <div className="space-y-4">
        {gigs.map((gig) => (
          <Card
            key={gig.id}
            className="p-4 hover:bg-slate-50 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{gig.name}</h3>
                  <Badge variant="secondary">{gig.type}</Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>
                      {gig.date} at {gig.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{gig.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <UsersIcon className="h-4 w-4 text-muted-foreground" />
                  <div className="flex -space-x-2">
                    {gig.assignedTeam.map((member, idx) => (
                      <Avatar key={idx} className="border-2 border-white">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          title={`${member.name} - ${member.role}`}
                        />
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>

              <Button variant="ghost" size="icon">
                <ExternalLinkIcon className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}
