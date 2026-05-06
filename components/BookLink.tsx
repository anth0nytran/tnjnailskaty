"use client";

import Link from "next/link";
import { trackEvent, type TrackSource } from "@/lib/analytics";

type Props = {
  source: TrackSource;
  label?: string; // visible text label, e.g. "Request appointment"
  className?: string;
  href?: string; // override; defaults to /book
  children: React.ReactNode;
};

export default function BookLink({
  source,
  label,
  className,
  href = "/book",
  children,
}: Props) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent("book_cta_clicked", { source, label })}
      className={className}
    >
      {children}
    </Link>
  );
}
