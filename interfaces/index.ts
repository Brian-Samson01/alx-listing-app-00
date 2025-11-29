export interface PropertyProps {
  name: string;
  rating: number;
  price: number;
  image: string;
  images?: string[];
  description: string;
  category: string[];
  address: {
    city: string;
    country: string;
  };
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
  host?: {
    name: string;
    bio: string;
  };
}
