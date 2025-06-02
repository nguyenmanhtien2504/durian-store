"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { CartItem as CartItemType } from "@/types"
import { formatPrice } from "@/lib/utils"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateItemQuantity, removeItem } = useCart()

  return (
    <div className="flex items-center py-4 border-b">
      <div className="relative h-20 w-20 rounded-md overflow-hidden">
        <Image src={item.imageUrl || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>

      <div className="ml-4 flex-1">
        <h3 className="text-base font-medium text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">
          {formatPrice(item.price)} / {item.unit}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}
        >
          <Minus className="h-4 w-4" />
        </Button>

        <span className="w-8 text-center">{item.quantity}</span>

        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="ml-6 text-right">
        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
        <Button
          variant="ghost"
          size="sm"
          className="text-red-500 hover:text-red-700 mt-1"
          onClick={() => removeItem(item.id)}
        >
          <Trash2 className="h-4 w-4 mr-1" />
          <span className="text-xs">Xóa</span>
        </Button>
      </div>
    </div>
  )
}
