export interface Product {
  id: string;
  name: string;
  category: 'stations' | 'protections' | 'batteries';
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  stock: number;
  featured: boolean;
  created_at: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  customer_address: string;
  city: string;
  items: CartItem[];
  total: number;
  payment_method: 'cod' | 'paypal';
  status: 'pending' | 'delivered' | 'cancelled';
  created_at: string;
}

export interface AdminStats {
  pendingOrders: number;
  deliveredOrders: number;
  todayOrders: number;
  weekOrders: number;
  monthOrders: number;
  totalVisitors: number;
  pageViews: number;
}