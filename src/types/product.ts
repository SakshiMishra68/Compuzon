export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: Category;
  brand: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  specifications?: Record<string, string>;
  tags?: string[];
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  image?: string;
}

export interface FilterOptions {
  categories?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  brands?: string[];
  inStock?: boolean;
  sort?: 'price-asc' | 'price-desc' | 'newest' | 'rating';
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}