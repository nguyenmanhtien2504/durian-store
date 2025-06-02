"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/types"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <Link href={`/san-pham/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">{product.name}</h3>
        </Link>
        <p className="text-green-600 font-bold mt-2">
          {formatPrice(product.price)} / {product.unit}
        </p>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
        <Button onClick={() => addItem(product)} className="w-full mt-4 bg-green-600 hover:bg-green-700">
          Thêm vào giỏ hàng
        </Button>
      </div>
    </div>
  )
}
