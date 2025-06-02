"use client"
import Link from "next/link"
import { ShoppingCart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart-item"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { items, totalPrice, clearCart } = useCart()

  // Tính phí vận chuyển (miễn phí cho đơn hàng trên 500.000đ)
  const shippingFee = totalPrice > 500000 ? 0 : 30000

  // Tổng thanh toán
  const totalPayment = totalPrice + shippingFee

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Giỏ hàng của bạn</h1>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <div className="flex justify-center mb-4">
            <ShoppingCart className="h-16 w-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Giỏ hàng của bạn đang trống</h2>
          <p className="text-gray-500 mb-8">Hãy thêm sản phẩm vào giỏ hàng để tiến hành mua hàng</p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/san-pham">Tiếp tục mua sắm</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Danh sách sản phẩm */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Sản phẩm ({items.length})</h2>
                <Button variant="ghost" className="text-red-500 hover:text-red-700 hover:bg-red-50" onClick={clearCart}>
                  Xóa tất cả
                </Button>
              </div>

              <div className="divide-y">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Tổng thanh toán */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Tổng thanh toán</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tạm tính:</span>
                  <span className="font-medium">{formatPrice(totalPrice)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Phí vận chuyển:</span>
                  <span className="font-medium">{shippingFee === 0 ? "Miễn phí" : formatPrice(shippingFee)}</span>
                </div>

                {shippingFee > 0 && (
                  <div className="text-sm text-gray-500">Miễn phí vận chuyển cho đơn hàng trên 500.000đ</div>
                )}

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-800 font-semibold">Tổng cộng:</span>
                    <span className="text-green-600 font-bold text-xl">{formatPrice(totalPayment)}</span>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full mt-6 bg-green-600 hover:bg-green-700">
                <Link href="/thanh-toan">
                  Tiến hành thanh toán
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full mt-4">
                <Link href="/san-pham">Tiếp tục mua sắm</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
