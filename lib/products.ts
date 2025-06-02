import type { Product } from "@/types"

// Danh sách sản phẩm mẫu
const products: Product[] = [
  {
    id: "1",
    name: "Sầu Riêng Ri6",
    description:
      "Sầu riêng Ri6 là giống sầu riêng nổi tiếng của Việt Nam với múi dày, màu vàng đậm, vị ngọt béo và mùi thơm đặc trưng.",
    price: 120000,
    unit: "kg",
    imageUrl: "/images/durian-banner.jpg",
    category: "ri6",
    featured: true,
    stock: 50,
  },
  {
    id: "2",
    name: "Sầu Riêng Monthong",
    description:
      "Sầu riêng Monthong (Vua sầu riêng) có múi dày, màu vàng nhạt, vị ngọt thanh và mùi thơm nhẹ, dễ ăn hơn các loại sầu riêng khác.",
    price: 150000,
    unit: "kg",
    imageUrl: "/images/durian-banner.jpg",
    category: "monthong",
    featured: true,
    stock: 40,
  },
  {
    id: "3",
    name: "Sầu Riêng Musang King",
    description:
      "Sầu riêng Musang King là giống sầu riêng cao cấp của Malaysia với múi dày, màu vàng đậm, vị ngọt đậm đà và mùi thơm nồng.",
    price: 250000,
    unit: "kg",
    imageUrl: "/images/durian-banner.jpg",
    category: "musang-king",
    featured: true,
    stock: 30,
  },
  {
    id: "4",
    name: "Sầu Riêng Chuồng Bò",
    description:
      "Sầu riêng Chuồng Bò là giống sầu riêng đặc sản của Tiền Giang với múi dày, màu vàng đậm, vị ngọt béo và mùi thơm đặc trưng.",
    price: 130000,
    unit: "kg",
    imageUrl: "/images/durian-banner.jpg",
    category: "chuong-bo",
    featured: false,
    stock: 35,
  },
  {
    id: "5",
    name: "Sầu Riêng Dona",
    description:
      "Sầu riêng Dona là giống sầu riêng mới của Việt Nam với múi dày, màu vàng nhạt, vị ngọt thanh và mùi thơm nhẹ.",
    price: 140000,
    unit: "kg",
    imageUrl: "/images/durian-banner.jpg",
    category: "dona",
    featured: false,
    stock: 45,
  },
  {
    id: "6",
    name: "Sầu Riêng Kanyao",
    description:
      "Sầu riêng Kanyao là giống sầu riêng cao cấp của Thái Lan với múi dày, màu vàng đậm, vị ngọt đậm đà và mùi thơm nồng.",
    price: 200000,
    unit: "kg",
    imageUrl: "/images/durian-banner.jpg",
    category: "kanyao",
    featured: true,
    stock: 25,
  },
]

// Lấy tất cả sản phẩm
export function getAllProducts(): Product[] {
  return products
}

// Lấy sản phẩm nổi bật
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

// Lấy sản phẩm theo ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

// Lấy sản phẩm theo danh mục
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

// Tìm kiếm sản phẩm
export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) || product.description.toLowerCase().includes(lowercaseQuery),
  )
}
