"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/types"
import { getAllProducts, getProductsByCategory } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  useEffect(() => {
    const allProducts = getAllProducts()
    setProducts(allProducts)
    setFilteredProducts(allProducts)
  }, [])

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "ri6", name: "Ri6" },
    { id: "monthong", name: "Monthong" },
    { id: "musang-king", name: "Musang King" },
    { id: "chuong-bo", name: "Chuồng Bò" },
    { id: "dona", name: "Dona" },
    { id: "kanyao", name: "Kanyao" },
  ]

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)

    if (categoryId === "all") {
      setFilteredProducts(products)
    } else {
      const filtered = getProductsByCategory(categoryId)
      setFilteredProducts(filtered)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) {
      handleCategoryChange(activeCategory)
      return
    }

    const lowercaseQuery = searchQuery.toLowerCase()
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery),
    )

    setFilteredProducts(results)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Sản phẩm</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Bộ lọc */}
        <div className="md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Danh mục</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeCategory === category.id ? "bg-green-600 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Giá</h2>
            <div className="space-y-2">
              <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">Dưới 150.000đ</button>
              <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                150.000đ - 200.000đ
              </button>
              <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">Trên 200.000đ</button>
            </div>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="md:w-3/4">
          <div className="mb-6">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="rounded-l-none bg-green-600 hover:bg-green-700">
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào phù hợp.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
