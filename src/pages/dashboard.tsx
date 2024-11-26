import React from "react";
import BrandSection from "@/components/dashboard/BrandSection";
import TeamSection from "@/components/dashboard/TeamSection";
import GigsSection from "@/components/dashboard/GigsSection";
import NotificationsSection from "@/components/dashboard/NotificationsSection";
import QuickActions from "@/components/dashboard/QuickActions";
import PerformanceSection from "@/components/dashboard/PerformanceSection";
import MetricsOverview from "@/components/dashboard/MetricsOverview";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-[1460px] mx-auto space-y-6">
        {/* Brand and Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BrandSection />
          <MetricsOverview />
        </div>

        {/* Quick Actions */}
        <div className="w-full">
          <QuickActions />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="xl:col-span-3">
            {/* Team Section */}
            <TeamSection />

            {/* Notifications Section */}
            <div className="mt-6">
              <NotificationsSection />
            </div>
          </div>

          {/* Middle and Right Columns */}
          <div className="xl:col-span-9">
            {/* Gigs Section */}
            <GigsSection />

            {/* Performance Section */}
            <div className="mt-6">
              <PerformanceSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
