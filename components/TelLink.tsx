"use client";

import { BUSINESS } from "@/lib/business";
import { trackEvent, type TrackSource } from "@/lib/analytics";

type Props = {
  source: TrackSource;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function TelLink({ source, className, ariaLabel, children }: Props) {
  return (
    <a
      href={`tel:${BUSINESS.phoneTel}`}
      aria-label={ariaLabel ?? `Call ${BUSINESS.name} at ${BUSINESS.phone}`}
      onClick={() => trackEvent("phone_call_clicked", { source })}
      className={className}
    >
      {children}
    </a>
  );
}
