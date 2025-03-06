export interface User {
  id: number;
  username: string;
  email: string;
  role: 'customer' | 'provider';
}

export interface Profile {
  id: number;
  fullName: string;
  phone: string;
  rating: number;
  isProvider: boolean;
  avatar?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  serviceStatus: 'active' | 'completed' | 'cancelled';
  provider: Profile;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  service: Service;
  author: Profile;
}
