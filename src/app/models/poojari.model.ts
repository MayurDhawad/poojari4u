export interface Review {
  name: string;
  comment: string;
  rating: number;
}

export interface CeremonyPrices {
  [ceremonyName: string]: number;
}

export interface Poojari {
  id: string;
  name: string;
  tagline: string;
  isGoldCertified?: boolean;
  scholarTag?: string;
  avatarUrl: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  languages: string[];
  locationCoverage?: string;
  description: string;
  ceremonyFee: number;
  vidhiSteps?: string[];
  samagriDetails?: string;
  addons?: {
    id: string;
    title: string;
    description: string;
    price: number;
  }[];
}

export interface SearchFilterState {
  ceremony: string;
  location: string;
  date: string;
  language: string;
  specialization: string;
  minExperience: number;
  goldOnly: boolean;
  sortBy: 'rating' | 'priceLow' | 'priceHigh' | 'experience';
}

export interface BookingAddons {
  bajanthri: boolean;
  samagri: boolean;
  decor: boolean;
}