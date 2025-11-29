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