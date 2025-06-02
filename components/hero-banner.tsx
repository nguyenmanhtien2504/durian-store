import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroBanner() {
  return (
    <div className="relative h-[500px] w-full">
      <Image
        src="/images/durian-banner.jpg"
        alt="Sầu riêng chất lượng cao"
        fill
        priority
        className="object-cover brightness-75"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Sầu riêng chuẩn cơm mẹ nấu</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Giao tận nơi toàn quốc – Cam kết chất lượng</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg">
              <Link href="/san-pham">Mua ngay</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20 text-lg"
            >
              <Link href="/gioi-thieu">Tìm hiểu thêm</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
