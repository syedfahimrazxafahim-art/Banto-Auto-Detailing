export type Page = 'home' | 'services' | 'pricing' | 'gallery' | 'about' | 'book' | 'contact';

export type VehicleType = 'coupe_sedan' | 'suv_crossover' | 'truck_van';

export type ImageKey =
  | 'ferrari_finish'
  | 'mobile_wash'
  | 'foam_bath'
  | 'lift_studio'
  | 'paint_correction'
  | 'luxury_detail';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'ceramic' | 'mobile';
  tagline: string;
  description: string;
  duration: string;
  startingPrice: number;
  imageKey: ImageKey;
  highlights: string[];
  inclusions: string[];
  recommendedFor: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tier: 'Silver Care' | 'Gold Detail' | 'Platinum Ceramic' | 'Mobile Signature';
  popular?: boolean;
  tagline: string;
  sedanPrice: number;
  suvPrice: number;
  truckPrice: number;
  duration: string;
  features: string[];
  bestFor: string;
}

export interface DetailingAddon {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  vehicle: string;
  category: 'Ceramic Coating' | 'Paint Correction' | 'Interior Restoration' | 'Mobile Detailing' | 'Exterior Detailing';
  description: string;
  imageKey: ImageKey;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  review: string;
  service: string;
  date: string;
}

export interface BookingFormData {
  vehicleType: VehicleType;
  yearMakeModel: string;
  packageId: string;
  selectedAddons: string[];
  serviceLocation: 'mobile' | 'studio';
  address: string;
  city: string;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}
