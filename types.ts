export interface Service {
  name: string;
  price?: string;
  description: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  city: string;
  phone: string;
  phoneClean: string; // for tel: links
  mapLink: string;
  yearsInBusiness: number;
  neighborhoods: string[];
}

export interface NeighborReview {
  name: string;
  quote: string;
  meta?: {
    badges?: string[]; // e.g. "Local Guide"
    reviewCount?: number;
    photoCount?: number;
    when?: string; // e.g. "11 months ago", "Edited 4 years ago"
    priceRange?: string; // e.g. "$40–60"
  };
}