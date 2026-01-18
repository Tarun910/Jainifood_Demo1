
export interface SpecialItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface Location {
  id: string;
  city: string;
  district: string;
  address: string;
  status: 'Open Now' | 'Closing Soon' | 'Closed';
  hours: string;
  image: string;
  icon: string;
  gallery?: string[];
  fullDescription?: string;
  phone?: string;
  email?: string;
  coordinates?: { lat: number; lng: number };
  outletSpecials?: SpecialItem[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
