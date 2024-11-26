import React from "react";
import BrandHeader from "./BrandHeader";

interface BrandSectionProps {
  className?: string;
}

export default function BrandSection({ className = "" }: BrandSectionProps) {
  return (
    <div className={`${className}`}>
      <BrandHeader />
    </div>
  );
}
