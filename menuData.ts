export interface MenuItem {
  name: string;
  price?: number;
  price_starting_at?: number;
  price_extra?: number;
  full_set?: number;
  refill?: number;
}

export interface MenuSection {
  section: string;
  items: MenuItem[];
  pricing_columns?: string[];
  notes?: string[];
  extras?: MenuItem[];
  changes_applied?: string[];
}

export interface MenuData {
  business: {
    name: string;
    tagline: string;
    phone: string;
  };
  menu: MenuSection[];
  footer: string[];
}

export const MENU_DATA: MenuData = {
  "business": {
    "name": "T & J Nails",
    "tagline": "Professional Nails & Spa Care",
    "phone": "281-391-1411"
  },
  "menu": [
    {
      "section": "Nail Service",
      "pricing_columns": ["Full Set", "Refills"],
      "items": [
        {
          "name": "Solar Clear Tip w/ color polish",
          "full_set": 40.0,
          "refill": 35.0
        },
        {
          "name": "Solar Clear Tip w/ Shellac Polish",
          "full_set": 50.0,
          "refill": 45.0
        },
        {
          "name": "Solar White/Pearl tip",
          "full_set": 45.0,
          "refill": 40.0
        },
        {
          "name": "Solar White & Pink powder",
          "full_set": 55.0,
          "refill": 50.0
        },
        {
          "name": "Solar Color Powder",
          "full_set": 50.0,
          "refill": 45.0
        },
        {
          "name": "Dipping Powder",
          "full_set": 50.0,
          "refill": 45.0
        }
      ],
      "notes": ["Long Nails Add Extra", "Design Shape Add Extra"]
    },
    {
      "section": "Manicure",
      "items": [
        { "name": "Basic Manicure", "price": 20.0 },
        { "name": "Collagen Manicure", "price": 25.0 },
        { "name": "Shellac Basic Manicure", "price": 35.0 },
        { "name": "Shellac Collagen Manicure", "price": 40.0 }
      ]
    },
    {
      "section": "Pedicure",
      "items": [
        { "name": "Classic Pedicure", "price": 30.0 },
        { "name": "Pamper Pedicure", "price": 40.0 },
        { "name": "Deluxe Pedicure", "price": 50.0 },
        { "name": "Royal Pedicure", "price": 65.0 },
        { "name": "Deluxe Relief Pedicure", "price": 70.0 },
        { "name": "Extra Massages 10\"", "price": 15.0 }
      ],
      "changes_applied": [
        "Removed: Hot Stone Pedicure ($35.00)",
        "Added: Royal Pedicure ($65.00)",
        "Added: Deluxe Relief Pedicure ($70.00)"
      ]
    },
    {
      "section": "Waxing",
      "items": [
        { "name": "Eyebrow Wax", "price": 12.0 },
        { "name": "Lip Wax", "price": 10.0 },
        { "name": "Chin Wax", "price_starting_at": 20.0 },
        { "name": "Face Wax", "price": 35.0 },
        { "name": "Under Arms Wax", "price": 30.0 },
        { "name": "Legs Wax", "price_starting_at": 50.0 }
      ],
      "changes_applied": ["Changed: Eyebrow Wax from $10.00 → $12.00"]
    },
    {
      "section": "Additional Services",
      "items": [
        { "name": "Polish Change Color", "price_starting_at": 15.0 },
        { "name": "Polish French or Color Tip", "price_extra": 10.0 },
        { "name": "Nails Soak Off", "price": 15.0 },
        { "name": "Nails Repair", "price_starting_at": 5.0 },
        { "name": "Nails Design", "price_starting_at": 5.0 },
        { "name": "Nails Trim", "price_extra": 3.0 }
      ],
      "extras": [{ "name": "Eyebrows tinting", "price": 20.0 }]
    }
  ],
  "footer": ["Gift Certificates Available", "Thank You & Come Again"]
};
