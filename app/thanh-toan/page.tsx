"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { generateOrderId } from "@/lib/utils"
import { CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    notes: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [orderId, setOrderId] = useState("")

  // Tính phí vận chuyển (miễn phí cho đơn hàng trên 500.000đ)
  const shippingFee = totalPrice > 500000 ? 0 : 30000

  // Tổng thanh toán
  const totalPayment = totalPrice + shippingFee

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Xóa lỗi khi người dùng nhập lại
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ tên"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại"
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Vui lòng nhập địa chỉ"
    }

    if (!formData.city.trim()) {
      newErrors.city = "Vui lòng chọn tỉnh/thành phố"
    }

    if (!formData.district.trim()) {
      newErrors.district = "Vui lòng chọn quận/huyện"
    }

    if (!formData.ward.trim()) {
      newErrors.ward = "Vui lòng chọn phường/xã"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Giả lập gửi đơn hàng
    setTimeout(() => {
      const newOrderId = generateOrderId()
      setOrderId(newOrderId)
      setIsSuccess(true)
      clearCart()
      setIsSubmitting(false)
    }, 1500)
  }

  if (items.length === 0 && !isSuccess) {
    router.push("/gio-hang")
    return null
  }

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Đặt hàng thành công!</h1>
          <p className="text-gray-600 mb-6">Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đã được xác nhận.</p>
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <p className="text-gray-700">
              Mã đơn hàng: <span className="font-semibold">{orderId}</span>
            </p>
          </div>
          <p className="text-gray-600 mb-8">
            Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn hàng.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <a href="/">Quay lại trang chủ</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Thanh toán</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form thông tin */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Thông tin giao hàng</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500`}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="address" className="block text-gray-700 mb-2">
                  Địa chỉ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="city" className="block text-gray-700 mb-2">
                    Tỉnh/Thành phố <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500`}
                  >
                    <option value="">Chọn tỉnh/thành phố</option>
                    <option value="hcm">TP. Hồ Chí Minh</option>
                    <option value="hn">Hà Nội</option>
                    <option value="ct">Cần Thơ</option>
                    <option value="dn">Đà Nẵng</option>
                  </select>
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label htmlFor="district" className="block text-gray-700 mb-2">
                    Quận/Huyện <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.district ? "border-red-500" : "border-gray-300"
                    } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500`}
                  >
                    <option value="">Chọn quận/huyện</option>
                    <option value="q1">Quận 1</option>
                    <option value="q2">Quận 2</option>
                    <option value="q3">Quận 3</option>
                    <option value="q4">Quận 4</option>
                  </select>
                  {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district}</p>}
                </div>

                <div>
                  <label htmlFor="ward" className="block text-gray-700 mb-2">
                    Phường/Xã <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="ward"
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.ward ? "border-red-500" : "border-gray-300"
                    } rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500`}
                  >
                    <option value="">Chọn phường/xã</option>
                    <option value="p1">Phường 1</option>
                    <option value="p2">Phường 2</option>
                    <option value="p3">Phường 3</option>
                    <option value="p4">Phường 4</option>
                  </select>
                  {errors.ward && <p className="text-red-500 text-sm mt-1">{errors.ward}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="notes" className="block text-gray-700 mb-2">
                  Ghi chú
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                ></textarea>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Phương thức thanh toán</h3>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      value="cod"
                      defaultChecked
                      className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="cod" className="ml-2 text-gray-700">
                      Thanh toán khi nhận hàng (COD)
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bank"
                      name="payment"
                      value="bank"
                      className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="bank" className="ml-2 text-gray-700">
                      Chuyển khoản ngân hàng
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="momo"
                      name="payment"
                      value="momo"
                      className="h-4 w-4 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="momo" className="ml-2 text-gray-700">
                      Ví MoMo
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Tổng thanh toán */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Đơn hàng của bạn</h2>

            <div className="max-h-64 overflow-y-auto mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center py-3 border-b">
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    <p className="text-gray-500 text-sm">
                      {formatPrice(item.price)} x {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>

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

            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full mt-6 bg-green-600 hover:bg-green-700"
            >
              {isSubmitting ? "Đang xử lý..." : "Đặt hàng"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
