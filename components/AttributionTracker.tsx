"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

// Mounted once at the root layout. Captures first-touch attribution into
// sessionStorage so the booking form can submit it silently with the lead.
export default function AttributionTracker() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
