"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 sm:w-96 overflow-hidden">
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">Hỗ trợ trực tuyến</h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-green-700"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-4 h-80 bg-gray-50 overflow-y-auto">
            <div className="bg-green-100 p-3 rounded-lg rounded-tl-none mb-4 max-w-[80%]">
              <p className="text-sm">Xin chào! Tôi có thể giúp gì cho bạn?</p>
              <span className="text-xs text-gray-500 mt-1 block">Nhân viên hỗ trợ, 10:30</span>
            </div>

            {/* Thêm tin nhắn mẫu */}
            <div className="bg-blue-100 p-3 rounded-lg rounded-tr-none mb-4 max-w-[80%] ml-auto">
              <p className="text-sm">Tôi muốn biết thêm về sầu riêng Ri6</p>
              <span className="text-xs text-gray-500 mt-1 block">Bạn, 10:31</span>
            </div>

            <div className="bg-green-100 p-3 rounded-lg rounded-tl-none mb-4 max-w-[80%]">
              <p className="text-sm">
                Sầu riêng Ri6 là giống sầu riêng nổi tiếng của Việt Nam với hương vị thơm ngon đặc trưng. Bạn có thể xem
                chi tiết sản phẩm tại mục Sản phẩm trên website của chúng tôi.
              </p>
              <span className="text-xs text-gray-500 mt-1 block">Nhân viên hỗ trợ, 10:32</span>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                className="flex-1 border rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <Button className="rounded-l-none bg-green-600 hover:bg-green-700">Gửi</Button>
            </div>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
