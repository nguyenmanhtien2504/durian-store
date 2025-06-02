"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { getProductById } from "@/lib/products"
import type { Product } from "@/types"
import { formatPrice } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const { addItem } = useCart()
  const router = useRouter()

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = getProductById(params.id)

      if (foundProduct) {
        setProduct(foundProduct)
      }

      setLoading(false)
    }

    fetchProduct()
  }, [params.id])

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem(product)
      }
      router.push("/gio-hang")
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-gray-500">Đang tải...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sản phẩm không tồn tại</h1>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <a href="/san-pham">Quay lại danh sách sản phẩm</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Hình ảnh sản phẩm */}
        <div className="md:w-1/2">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-md">
            <Image src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-green-600 mb-4">
            {formatPrice(product.price)} / {product.unit}
          </p>

          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-2">Số lượng:</p>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <span className="w-12 text-center">{quantity}</span>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= product.stock}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => {
                if (product) {
                  for (let i = 0; i < quantity; i++) {
                    addItem(product)
                  }
                }
              }}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Thêm vào giỏ hàng
            </Button>

            <Button onClick={handleAddToCart} className="flex-1">
              Mua ngay
            </Button>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Thông tin sản phẩm:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Xuất xứ: Miền Tây Nam Bộ</li>
              <li>• Trọng lượng trung bình: 2-5kg/trái</li>
              <li>• Bảo quản: 2-3 ngày ở nhiệt độ phòng, 5-7 ngày trong tủ lạnh</li>
              <li>• Vận chuyển: Đóng gói cẩn thận, bảo quản lạnh trong quá trình vận chuyển</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sản phẩm liên quan */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sản phẩm liên quan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Hiển thị các sản phẩm liên quan ở đây */}
        </div>
      </div>
    </div>
  )
}
