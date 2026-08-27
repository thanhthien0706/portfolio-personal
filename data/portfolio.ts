export const profile = {
  name: "Nguyễn Thanh Thiện",
  role: "Full-stack Developer",
  years: "hơn 4 năm",
  born: "2002",
  city: "Đà Nẵng",
  phone: "0373245002",
  phonePretty: "0373 245 002",
  zalo: "https://zalo.me/0373245002",
  facebook: "https://www.facebook.com/nguyenthanhthien0706/",
  email: "thanhthien0706.developer@gmail.com",
  github: "https://github.com/thanhthien0706",
  cv: "https://drive.google.com/file/d/144F6Vr2ZutkIdotu5WRkbM7A5vGIW38j/view?usp=sharing",
  headline: ["Làm hệ thống", "từ dữ liệu", "đến người dùng."],
  intro:
    "Full-stack Developer hơn 4 năm kinh nghiệm, tập trung vào NodeJS / NestJS, ReactJS và SQL Server. Tôi làm hệ thống quản lý, tích hợp và báo cáo cho doanh nghiệp — từ API, cơ sở dữ liệu đến giao diện người dùng cuối.",
  aboutLead:
    "Tôi làm backend chủ lực với NodeJS / NestJS, rồi làm cả frontend để tự đưa một tính năng đi hết đường: từ bảng dữ liệu đến màn hình người dùng nhìn thấy.",
  aboutBody:
    "Hơn bốn năm qua tôi làm cho hệ thống của khách hàng nước ngoài tại Napa Global — quản lý và kiểm kê cho chuỗi bán lẻ, cổng nhà cung cấp, tích hợp và báo cáo dữ liệu. Hiện tôi làm tại Cục Thống kê Đà Nẵng, phát triển website thống kê dân số và tôn giáo, đồng thời rà lỗi và kiểm tra bảo mật cho hệ thống. Tôi quen làm việc trực tiếp với người dùng để hiểu nghiệp vụ trước khi viết dòng code đầu tiên.",
  education: {
    school: "Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU)",
    detail: "Kỹ sư Công nghệ thông tin · 2020",
  },
};

export const nav = [
  { num: "01", label: "Giới thiệu", id: "gioi-thieu" },
  { num: "02", label: "Kinh nghiệm", id: "kinh-nghiem" },
  { num: "03", label: "Dự án đã làm", id: "du-an" },
  { num: "04", label: "Dự án cá nhân", id: "ca-nhan" },
  { num: "05", label: "Bài viết", id: "blog" },
  { num: "06", label: "Liên hệ", id: "lien-he" },
];

export const skills = [
  {
    group: "Backend",
    tag: "tag-accent",
    items: ["NodeJS", "NestJS", "RESTful API", ".NET / C#"],
  },
  {
    group: "Frontend",
    tag: "tag-neutral",
    items: ["ReactJS", "JavaScript / TS", "HTML / CSS"],
  },
  {
    group: "Dữ liệu & khác",
    tag: "tag-outline",
    items: ["SQL Server", "SSIS / ETL", "Git", "Kiểm tra bảo mật"],
  },
];

export type Job = {
  period: string;
  type: string;
  role: string;
  company: string;
  place: string;
  points: string[];
};

export const jobs: Job[] = [
  {
    period: "04/2026 — nay",
    type: "Freelancer",
    role: "Software Engineer",
    company: "Freelancer",
    place: "Đà Nẵng",
    points: [
      "Sử dụng AI Claude Code để hỗ trợ phát triển các dự án.",
      "Tối ưu hóa mã nguồn và hiệu năng hệ thống.",
      "Phát triển các tính năng mới cho các dự án.",
      "Rà soát lỗi và kiểm tra bảo mật cho các dự án.",
    ],
  },
  {
    period: "09/2022 — 04/2026",
    type: "Full-time",
    role: "Software Engineer",
    company: "Napa Global",
    place: "Đà Nẵng",
    points: [
      "Làm fullstack (.NET / C# và ReactJS) cho hệ thống 7GT — quản lý và kiểm kê chuỗi 7-Eleven.",
      "Phát triển Vendor Portal và SIA: cổng nhà cung cấp, báo cáo và tích hợp dữ liệu bằng SSIS.",
      "Thiết kế và tối ưu cơ sở dữ liệu SQL Server, viết stored procedure cho báo cáo.",
      "Làm việc trực tiếp với khách hàng để chốt yêu cầu và xử lý phản hồi.",
    ],
  },
  {
    period: "08/2025 — 12/2025",
    type: "Full-time",
    role: "Junior Developer",
    company: "Cục Thống kê Đà Nẵng",
    place: "Đà Nẵng",
    points: [
      "Phát triển website thống kê dân số và tôn giáo của thành phố.",
      "Rà soát, tìm và xử lý lỗi trong quá trình vận hành hệ thống.",
      "Kiểm tra bảo mật website và đề xuất phương án khắc phục.",
    ],
  },
  {
    period: "07/2022 — 08/2022",
    type: "Thực tập",
    role: "Intern Backend Developer",
    company: "FPT Software",
    place: "Đà Nẵng",
    points: [
      "Làm quen quy trình phát triển thực tế: quản lý mã nguồn, review code, kiểm thử.",
      "Thực hành backend .NET và truy vấn SQL trên bài tập dự án của nhóm.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  company: string;
  period: string;
  kind: string;
  short: string;
  detail: string;
  points: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "7gt",
    name: "7GT",
    company: "Napa Global — khách hàng chuỗi 7-Eleven",
    period: "2023 — 2025",
    kind: "Quản lý & kiểm kê chuỗi bán lẻ",
    short:
      "Hệ thống quản lý và kiểm kê hàng hoá cho chuỗi cửa hàng tiện lợi 7-Eleven: theo dõi tồn kho, phiếu kiểm kê và đối chiếu số liệu theo từng cửa hàng.",
    detail:
      "7GT là hệ thống nội bộ phục vụ vận hành chuỗi 7-Eleven: nhân viên cửa hàng tạo phiếu kiểm kê, hệ thống đối chiếu với tồn kho và xuất số liệu cho bộ phận quản lý. Tôi tham gia ở cả hai đầu — API và cơ sở dữ liệu bên .NET, giao diện bên ReactJS — nên chịu trách nhiệm cho tính năng từ lúc phân tích nghiệp vụ đến khi lên production.",
    points: [
      "Phát triển API bằng .NET / C# và thiết kế, tối ưu truy vấn trên SQL Server cho các bảng dữ liệu lớn.",
      "Dựng giao diện quản lý và kiểm kê bằng ReactJS: bảng dữ liệu, biểu mẫu nhập liệu, phân quyền theo cửa hàng.",
      "Trao đổi trực tiếp với khách hàng để làm rõ nghiệp vụ, chốt yêu cầu và xử lý phản hồi sau khi phát hành.",
      "Sửa lỗi, bảo trì và hỗ trợ vận hành hệ thống sau khi lên production.",
    ],
    stack: [".NET / C#", "ReactJS", "SQL Server", "RESTful API"],
  },
  {
    id: "vendor",
    name: "Vendor Portal & SIA",
    company: "Napa Global",
    period: "2022 — 2024",
    kind: "Cổng nhà cung cấp & báo cáo dữ liệu",
    short:
      "Cổng thông tin cho nhà cung cấp cùng hệ thống báo cáo — tích hợp và đồng bộ dữ liệu giữa các hệ thống bằng SSIS.",
    detail:
      "Vendor Portal là nơi nhà cung cấp tra cứu đơn hàng và số liệu của họ; SIA là phần tổng hợp, tích hợp và xuất báo cáo cho bộ phận nghiệp vụ. Phần việc khó nhất không phải giao diện mà là làm cho dữ liệu từ nhiều nguồn khớp nhau và chạy đúng lịch mỗi ngày.",
    points: [
      "Xây và bảo trì luồng tích hợp dữ liệu bằng SSIS / ETL giữa các hệ thống, chạy theo lịch hằng ngày.",
      "Viết stored procedure và truy vấn SQL Server phục vụ báo cáo nghiệp vụ.",
      "Phát triển API .NET và giao diện ReactJS cho cổng nhà cung cấp.",
      "Rà soát sai lệch số liệu và xử lý cùng người dùng nghiệp vụ.",
    ],
    stack: [".NET / C#", "SSIS / ETL", "SQL Server", "ReactJS"],
  },
  {
    id: "thongke",
    name: "Website thống kê dân số & tôn giáo",
    company: "Cục Thống kê Đà Nẵng",
    period: "2025 — nay",
    kind: "Hệ thống khu vực công",
    short:
      "Website công bố và tra cứu số liệu thống kê dân số, tôn giáo; kèm việc rà lỗi và kiểm tra bảo mật cho hệ thống.",
    detail:
      "Công việc hiện tại của tôi: phát triển website thống kê dân số và tôn giáo cho Cục Thống kê Đà Nẵng. Ngoài phần phát triển tính năng, tôi còn rà soát lỗi và kiểm tra bảo mật cho website — một hệ thống công bố dữ liệu công khai thì độ chính xác và độ an toàn quan trọng ngang nhau.",
    points: [
      "Phát triển tính năng cho website thống kê dân số và tôn giáo.",
      "Tìm và xử lý lỗi trong quá trình vận hành, kể cả các lỗi do dữ liệu đầu vào.",
      "Kiểm tra bảo mật website và đề xuất phương án khắc phục.",
    ],
    stack: [".NET / C#", "SQL Server", "JavaScript", "Bảo mật web"],
  },
  {
    id: "digital-wallet",
    name: "Digital Wallet",
    company: "Dự án cá nhân",
    period: "2026 — nay",
    kind: "Ví điện tử",
    short:
      "Ví điện tử cho phép người dùng nạp tiền từ ngân hàng vào ví, giao dịch trong ví và đổi sang USDT.",
    detail:
      "Digital Wallet là ví điện tử tôi tự xây dựng: người dùng liên kết tài khoản ngân hàng để nạp tiền vào ví, thực hiện giao dịch nội bộ trong ví, và đổi số dư sang USDT. Tôi làm backend bằng NestJS xử lý nạp tiền, đối soát giao dịch và tích hợp đổi USDT, giao diện bằng ReactJS / NextJS.",
    points: [
      "Xây dựng API bằng NestJS xử lý nạp tiền từ ngân hàng, giao dịch trong ví và đổi sang USDT.",
      "Thiết kế cơ sở dữ liệu và luồng đối soát giao dịch đảm bảo số dư chính xác.",
      "Dựng giao diện người dùng bằng ReactJS / NextJS cho ví và lịch sử giao dịch.",
    ],
    stack: ["NestJS", "ReactJS / NextJS", "PostgreSQL / MongoDB"],
  },
];

export const posts = [
  {
    date: "2026 · nháp",
    title: "Tối ưu truy vấn SQL Server cho bảng vài triệu dòng",
    excerpt:
      "Những gì tôi học được khi báo cáo chạy 40 giây và khách hàng chỉ chờ được 3 giây.",
    read: "6 phút",
    href: "#blog",
  },
  {
    date: "2026 · nháp",
    title: "SSIS trong thực tế: khi dữ liệu hai hệ thống không khớp",
    excerpt:
      "Ghi chép về việc dựng luồng ETL chạy hằng ngày mà không phải sửa tay mỗi sáng.",
    read: "8 phút",
    href: "#blog",
  },
  {
    date: "2026 · nháp",
    title: "Tự làm trang bán ebook: thanh toán và gửi mail tự động",
    excerpt:
      "Toàn bộ quá trình dựng goidaugiuong.site, từ domain đến luồng giao hàng qua email.",
    read: "5 phút",
    href: "#blog",
  },
];
