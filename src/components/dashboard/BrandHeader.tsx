import React from "react";
import { Card } from "@/components/ui/card";

interface BrandHeaderProps {
  brandName?: string;
  brandLogo?: string;
  description?: string;
}

export default function BrandHeader({
  brandName = "Cornerstone Group",
  brandLogo = `${import.meta.env.BASE_URL === "/" ? import.meta.env.BASE_URL : (import.meta.env.BASE_URL || "") + "/"}images/tempo-image-20241126T171922598Z.png`,
  description = "We live by the motto of Heartfelt Hospitality. We live to create truly memorable experience for our guests, and treat our business partners the same way.",
}: BrandHeaderProps) {
  return (
    <Card className="p-6 bg-white w-full">
      <div className="flex items-center gap-6">
        <div className="h-32 w-32 p-2 rounded-md bg-black">
          <img
            alt={brandName}
            src={brandLogo}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-gray-900">{brandName}</h1>
          <p className="text-gray-600 max-w-2xl">{description}</p>
        </div>
      </div>
    </Card>
  );
}
