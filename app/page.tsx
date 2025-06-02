import { HeroBanner } from "@/components/hero-banner"
import { FeaturedProducts } from "@/components/featured-products"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <HeroBanner />

      {/* Giới thiệu ngắn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Về Sầu Riêng Miền Tây</h2>
              <p className="text-gray-600 mb-6">
                Chúng tôi tự hào là đơn vị cung cấp sầu riêng chất lượng cao từ các vườn sầu riêng nổi tiếng miền Tây
                Nam Bộ. Với hơn 10 năm kinh nghiệm trong lĩnh vực trồng và phân phối sầu riêng, chúng tôi cam kết mang
                đến cho khách hàng những trái sầu riêng thơm ngon, chất lượng nhất.
              </p>
              <p className="text-gray-600 mb-6">
                Tất cả sầu riêng của chúng tôi đều được trồng theo quy trình hữu cơ, không sử dụng hóa chất độc hại, đảm
                bảo an toàn cho sức khỏe người tiêu dùng.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/gioi-thieu">Tìm hiểu thêm</Link>
              </Button>
            </div>
            <div className="md:w-1/2 relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/durian-banner.jpg" alt="Vườn sầu riêng miền Tây" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Cam kết chất lượng */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Cam kết của chúng tôi</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src="/images/durian-banner.jpg" alt="Chất lượng" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Chất lượng đảm bảo</h3>
              <p className="text-gray-600">
                Cam kết 100% sầu riêng chín tự nhiên, không sử dụng hóa chất, đảm bảo an toàn cho sức khỏe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src="/images/durian-banner.jpg" alt="Giao hàng" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Giao hàng toàn quốc</h3>
              <p className="text-gray-600">
                Giao hàng nhanh chóng trong vòng 24h đối với nội thành và 2-3 ngày đối với các tỉnh thành khác.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src="/images/durian-banner.jpg" alt="Hỗ trợ" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hỗ trợ 24/7</h3>
              <p className="text-gray-600">
                Đội ngũ tư vấn viên luôn sẵn sàng hỗ trợ khách hàng 24/7, giải đáp mọi thắc mắc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
