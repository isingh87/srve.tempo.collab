import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ChartData {
  revenue: {
    labels: string[];
    data: number[];
  };
  utilization: {
    labels: string[];
    data: number[];
  };
  satisfaction: {
    labels: string[];
    data: number[];
  };
}

interface PerformanceChartsProps {
  data?: ChartData;
}

export default function PerformanceCharts({
  data = {
    revenue: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      data: [
        30000, 35000, 32000, 40000, 45000, 50000, 48000, 52000, 55000, 58000,
        56000, 60000,
      ],
    },
    utilization: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [65, 70, 75, 80, 85, 90, 70],
    },
    satisfaction: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [4.5, 4.6, 4.8, 4.7],
    },
  },
}: PerformanceChartsProps) {
  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle>Performance Analytics</CardTitle>
        <CardDescription>
          Track key performance metrics over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="utilization">Team Utilization</TabsTrigger>
            <TabsTrigger value="satisfaction">
              Customer Satisfaction
            </TabsTrigger>
          </TabsList>

          <TabsContent value="revenue">
            <div className="h-[300px] relative">
              {/* Placeholder for Revenue Chart */}
              <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
                <p className="text-muted-foreground">
                  Revenue Chart Placeholder
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="utilization">
            <div className="h-[300px] relative">
              {/* Placeholder for Utilization Chart */}
              <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
                <p className="text-muted-foreground">
                  Team Utilization Chart Placeholder
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="satisfaction">
            <div className="h-[300px] relative">
              {/* Placeholder for Satisfaction Chart */}
              <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
                <p className="text-muted-foreground">
                  Customer Satisfaction Chart Placeholder
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
