import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Giới thiệu về Sầu Riêng Miền Tây</h1>

        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-md mb-8">
          <Image src="/images/durian-banner.jpg" alt="Vườn sầu riêng miền Tây" fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Câu chuyện của chúng tôi</h2>
          <p>
            Sầu Riêng Miền Tây được thành lập vào năm 2010 bởi một nhóm nông dân trồng sầu riêng tại miền Tây Nam Bộ.
            Với hơn 10 năm kinh nghiệm trong lĩnh vực trồng và phân phối sầu riêng, chúng tôi tự hào là đơn vị cung cấp
            sầu riêng chất lượng cao từ các vườn sầu riêng nổi tiếng miền Tây Nam Bộ.
          </p>

          <p>
            Chúng tôi bắt đầu từ một vườn sầu riêng nhỏ tại Cái Bè, Tiền Giang và dần mở rộng quy mô với hơn 50 hecta
            vườn sầu riêng tại các tỉnh miền Tây như Tiền Giang, Vĩnh Long, Cần Thơ và Bến Tre. Với mong muốn mang những
            trái sầu riêng thơm ngon, chất lượng đến tay người tiêu dùng, chúng tôi đã không ngừng cải tiến quy trình
            trồng trọt, thu hoạch và bảo quản sầu riêng.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="/images/durian-banner.jpg" alt="Thu hoạch sầu riêng" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="/images/durian-banner.jpg" alt="Đóng gói sầu riêng" fill className="object-cover" />
            </div>
          </div>

          <h2>Sứ mệnh của chúng tôi</h2>
          <p>
            Sứ mệnh của Sầu Riêng Miền Tây là mang đến cho khách hàng những trái sầu riêng thơm ngon, chất lượng nhất từ
            vùng đất miền Tây Nam Bộ. Chúng tôi cam kết:
          </p>

          <ul>
            <li>
              Cung cấp sầu riêng chín tự nhiên, không sử dụng hóa chất, đảm bảo an toàn cho sức khỏe người tiêu dùng.
            </li>
            <li>Áp dụng quy trình trồng trọt hữu cơ, thân thiện với môi trường.</li>
            <li>Hỗ trợ nông dân địa phương phát triển kinh tế bền vững.</li>
            <li>Mang đến trải nghiệm mua sắm thuận tiện, dịch vụ chăm sóc khách hàng tận tâm.</li>
          </ul>

          <h2>Quy trình từ vườn đến bàn ăn</h2>
          <p>Chúng tôi kiểm soát chặt chẽ toàn bộ quy trình từ vườn đến bàn ăn để đảm bảo chất lượng sản phẩm:</p>

          <ol>
            <li>
              <strong>Trồng trọt:</strong> Áp dụng quy trình trồng hữu cơ, không sử dụng hóa chất độc hại.
            </li>
            <li>
              <strong>Thu hoạch:</strong> Sầu riêng được thu hoạch đúng độ chín, đảm bảo hương vị thơm ngon nhất.
            </li>
            <li>
              <strong>Phân loại:</strong> Mỗi trái sầu riêng được kiểm tra kỹ lưỡng về chất lượng, kích thước, độ chín.
            </li>
            <li>
              <strong>Đóng gói:</strong> Sử dụng bao bì thân thiện với môi trường, bảo quản lạnh trong quá trình vận
              chuyển.
            </li>
            <li>
              <strong>Vận chuyển:</strong> Giao hàng nhanh chóng, đảm bảo sầu riêng đến tay khách hàng trong tình trạng
              tươi ngon nhất.
            </li>
          </ol>

          <h2>Các loại sầu riêng của chúng tôi</h2>
          <p>Chúng tôi cung cấp đa dạng các loại sầu riêng nổi tiếng:</p>

          <ul>
            <li>
              <strong>Sầu Riêng Ri6:</strong> Giống sầu riêng nổi tiếng của Việt Nam với múi dày, màu vàng đậm, vị ngọt
              béo và mùi thơm đặc trưng.
            </li>
            <li>
              <strong>Sầu Riêng Monthong:</strong> Còn gọi là "Vua sầu riêng", có múi dày, màu vàng nhạt, vị ngọt thanh
              và mùi thơm nhẹ, dễ ăn hơn các loại sầu riêng khác.
            </li>
            <li>
              <strong>Sầu Riêng Musang King:</strong> Giống sầu riêng cao cấp của Malaysia với múi dày, màu vàng đậm, vị
              ngọt đậm đà và mùi thơm nồng.
            </li>
            <li>
              <strong>Sầu Riêng Chuồng Bò:</strong> Giống sầu riêng đặc sản của Tiền Giang với múi dày, màu vàng đậm, vị
              ngọt béo và mùi thơm đặc trưng.
            </li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Liên hệ với chúng tôi</h3>
            <p>Nếu bạn có bất kỳ câu hỏi nào hoặc muốn đặt hàng, vui lòng liên hệ với chúng tôi qua:</p>
            <ul>
              <li>Điện thoại: 0123 456 789</li>
              <li>Email: contact@sauriengmientay.vn</li>
              <li>Địa chỉ: 123 Đường Sầu Riêng, Quận Cái Răng, TP. Cần Thơ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
