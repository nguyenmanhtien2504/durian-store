export interface Product {
  id: string
  name: string
  description: string
  price: number
  unit: string
  imageUrl: string
  category: string
  featured: boolean
  stock: number
}

export interface CartItem extends Product {
  quantity: number
}

export interface Order {
  id: string
  items: CartItem[]
  totalPrice: number
  customerName: string
  customerPhone: string
  customerAddress: string
  notes?: string
  status: "pending" | "confirmed" | "shipping" | "delivered" | "cancelled"
  createdAt: Date
}
