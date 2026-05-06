import { z } from "zod";

// Marketing attribution captured silently from URL + referrer + sessionStorage.
// Every field is optional and length-capped so we don't trust client input.
export const AttributionSchema = z
  .object({
    utmSource: z.string().trim().max(100).optional(),
    utmMedium: z.string().trim().max(100).optional(),
    utmCampaign: z.string().trim().max(120).optional(),
    utmContent: z.string().trim().max(120).optional(),
    utmTerm: z.string().trim().max(120).optional(),
    referrer: z.string().trim().max(400).optional(),
    referrerHost: z.string().trim().max(200).optional(),
    channel: z.string().trim().max(80).optional(),
    landingPath: z.string().trim().max(400).optional(),
    submittedFromPath: z.string().trim().max(400).optional(),
    capturedAt: z.string().trim().max(40).optional(),
  })
  .partial()
  .optional();

export type Attribution = z.infer<typeof AttributionSchema>;

export const QuoteRequestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long.")
    .regex(/^[\p{L}\s'\-.]+$/u, "Letters, spaces, hyphens, and apostrophes only."),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits.")
    .max(20, "Phone number is too long.")
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Please enter a valid US phone number."),
  email: z.string().trim().email("Please enter a valid email."),
  preferredDate: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format."),
  preferredTime: z.string().trim().min(3).max(20),
  services: z.array(z.string().trim().min(1).max(200)).min(1, "Select at least one service."),
  notes: z.string().trim().max(1000).optional().default(""),
  // honeypot — must be empty to pass
  website: z.string().max(0, "Bot detected.").optional().default(""),
  // form-render time — block submissions under 3 seconds
  formStartedAt: z.coerce.number(),
  // optional silent attribution payload
  attribution: AttributionSchema,
});

export type QuoteRequest = z.infer<typeof QuoteRequestSchema>;

export function formatPhone(input: string) {
  const d = input.replace(/\D/g, "");
  if (d.length === 10) return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  if (d.length === 11 && d.startsWith("1")) return `+1 (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7)}`;
  return input;
}
