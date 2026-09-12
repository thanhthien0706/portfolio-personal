export type Lang = "vi" | "en";

export type Job = {
  period: string;
  type: string;
  role: string;
  company: string;
  place: string;
  points: string[];
};

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

export type PersonalProject = {
  id: string;
  href: string;
  image: string;
  imageAlt: string;
  badge1: string;
  badge2: string;
  title: string;
  description: string;
  tags: string[];
  cta: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type PortfolioContent = {
  profile: {
    name: string;
    nameLines: [string, string];
    role: string;
    years: string;
    born: string;
    city: string;
    phone: string;
    phonePretty: string;
    zalo: string;
    facebook: string;
    email: string;
    github: string;
    cv: string;
    headline: [string, string, string];
    intro: string;
    aboutLead: string;
    aboutBody: string;
    education: { school: string; detail: string }[];
  };
  nav: { num: string; label: string; id: string }[];
  skills: { group: string; tag: string; items: string[] }[];
  jobs: Job[];
  projects: Project[];
  personalProjects: PersonalProject[];
  faqs: Faq[];
  ui: {
    experienceKicker: string;
    roleKicker: string;
    fullstack: string;
    openTo: [string, string];
    currentKicker: string;
    currentRole: string;
    strongestKicker: string;
    quickContactKicker: string;
    zaloMessage: string;
    sectionAbout: string;
    sectionExperience: string;
    sectionWorkProjects: string;
    sectionPersonalProjects: string;
    sectionFaq: string;
    sectionContact: string;
    educationKicker: string;
    languagesKicker: string;
    languageNative: string;
    languageTechnical: string;
    workProjectsHint: string;
    faqHint: string;
    contactHeadline: string;
    contactPhone: string;
    contactZalo: string;
    contactFacebook: string;
    contactEmail: string;
    downloadCv: string;
    switchToLight: string;
    switchToDark: string;
    viewDetails: string;
    prevProject: string;
    nextProject: string;
    pageLabel: string;
    close: string;
    workIDid: string;
  };
};

export const content: Record<Lang, PortfolioContent> = {
  vi: {
    profile: {
      name: "Nguyễn Thanh Thiện",
      nameLines: ["Nguyễn", "Thanh Thiện"],
      role: "Full-stack Developer",
      years: "hơn 3 năm",
      born: "2002",
      city: "Đà Nẵng",
      phone: "0373245002",
      phonePretty: "0373 245 002",
      zalo: "https://zalo.me/0373245002",
      facebook: "https://www.facebook.com/nguyenthanhthien0706/",
      email: "thanhthien0706.developer@gmail.com",
      github: "https://github.com/thanhthien0706",
      cv: "/CV-NguyenThanhThien.pdf",
      headline: ["Làm hệ thống", "từ dữ liệu", "đến người dùng."],
      intro:
        "Full-stack Developer hơn 3 năm kinh nghiệm, tập trung vào .NET, NodeJS / NestJS, ReactJS và SQL Server. Tôi làm hệ thống quản lý, tích hợp và báo cáo cho doanh nghiệp — từ API, cơ sở dữ liệu đến giao diện người dùng cuối.",
      aboutLead:
        "Tôi làm backend chủ lực với .Net, NodeJS / NestJS, rồi làm cả frontend để tự đưa một tính năng đi hết đường: từ bảng dữ liệu đến màn hình người dùng nhìn thấy.",
      aboutBody:
        "Hơn ba năm qua tôi làm cho hệ thống của khách hàng nước ngoài tại Napa Global — quản lý và kiểm kê cho chuỗi bán lẻ, cổng nhà cung cấp, tích hợp và báo cáo dữ liệu. Hiện tôi làm tại Cục Thống kê Đà Nẵng, phát triển website thống kê dân số và tôn giáo, đồng thời rà lỗi và kiểm tra bảo mật cho hệ thống. Tôi quen làm việc trực tiếp với người dùng để hiểu nghiệp vụ trước khi viết dòng code đầu tiên.",
      education: [
        {
          school: "Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU)",
          detail: "Kỹ sư Công nghệ thông tin · 01/2020 – 05/2025",
        },
        {
          school: "Trung tâm Tin học - Ngoại ngữ Genetic (Genetic - Computer & Languages)",
          detail: "Khóa Master Front-End & VueJS · 07/2021 – 02/2022",
        },
      ],
    },
    nav: [
      { num: "01", label: "Giới thiệu", id: "gioi-thieu" },
      { num: "02", label: "Kinh nghiệm", id: "kinh-nghiem" },
      { num: "03", label: "Dự án đã làm", id: "du-an" },
      { num: "04", label: "Dự án cá nhân", id: "ca-nhan" },
      { num: "05", label: "Câu hỏi thường gặp", id: "faq" },
      { num: "06", label: "Liên hệ", id: "lien-he" },
    ],
    skills: [
      {
        group: "Backend",
        tag: "tag-accent",
        items: [".NET / C#", "NodeJS", "NestJS", "RESTful API", "GraphQL", "Express.js"],
      },
      {
        group: "Frontend",
        tag: "tag-neutral",
        items: ["ReactJS", "Next.js", "JavaScript / TypeScript", "HTML / CSS", "SASS"],
      },
      {
        group: "Cơ sở dữ liệu",
        tag: "tag-outline",
        items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis", "SSIS / ETL"],
      },
      {
        group: "DevOps & Kiểm thử",
        tag: "tag-accent-2",
        items: [
          "Docker",
          "Docker Compose",
          "CI/CD (GitHub Actions / GitLab CI)",
          "Nginx",
          "Jest",
          "Vitest",
          "xUnit",
        ],
      },
      {
        group: "AI & công cụ",
        tag: "tag-accent",
        items: ["Claude (Claude Code)", "Cursor", "ChatGPT", "Prompt Engineering", "Git", "Kiểm tra bảo mật"],
      },
    ],
    jobs: [
      {
        period: "01/2022 — nay",
        type: "Freelancer",
        role: "Freelancer Developer",
        company: "Freelance",
        place: "Từ xa",
        points: [
          "Xây dựng và tùy chỉnh website responsive, landing page chuyển đổi cao cho hơn 15 khách hàng, rút ngắn thời gian bàn giao 40% nhờ quy trình làm việc có hỗ trợ AI (Cursor, Claude).",
          "Phát triển script tự động hóa và công cụ RESTful điều phối dữ liệu (Node.js) để tự động hóa quy trình nghiệp vụ, giúp khách hàng tiết kiệm trung bình hơn 10 giờ/tuần nhập liệu thủ công.",
          "Duy trì tỷ lệ hoàn thành đúng hạn 100% và điểm hài lòng khách hàng trên 95% trên toàn bộ hợp đồng.",
        ],
      },
      {
        period: "09/2022 — 06/2026",
        type: "Full-time",
        role: "Software Engineer",
        company: "Napa Global",
        place: "Đà Nẵng",
        points: [
          "Tham gia phát triển dự án blockchain bằng Golang, tập trung vào giao dịch USDT.",
          "Phối hợp với nhóm liên chức năng xây dựng hệ thống theo dõi sản phẩm cho chuỗi cửa hàng Seven-Eleven, nâng cao hiệu quả quản lý tồn kho.",
          "Phát triển sản phẩm theo dõi hàng hóa xuất/nhập tại các cửa hàng Seven-Eleven.",
          "Tham gia thiết kế cơ sở dữ liệu và giải pháp cho dự án.",
          "Bảo trì và phát triển tính năng cho các dự án cũ: thêm tính năng cho Access App, tạo/chỉnh sửa báo cáo với Report Builder / SSRS, tạo/chỉnh sửa job tự động bằng SSIS.",
          "Hỗ trợ triển khai sản phẩm lên môi trường Production và Staging.",
          "Giảm thời gian tải trang từ 15 phút xuống còn 3 phút nhờ tối ưu nội dung và áp dụng lazy loading, cải thiện trải nghiệm người dùng, xử lý lỗi timeout và out-of-memory.",
          "Tham gia dự án theo mô hình Agile Scrum.",
          "Tích hợp đăng nhập với Microsoft Azure và đồng bộ dữ liệu từ Stripe.",
          "Hoàn thiện giao diện từ thiết kế Figma.",
        ],
      },
      {
        period: "08/2025 — 12/2025",
        type: "Full-time",
        role: "Junior Software Engineer",
        company: "Cục Thống kê Đà Nẵng",
        place: "Đà Nẵng",
        points: [
          "Phát triển web form responsive và dashboard thống kê động bằng DevExpress và C#, rút ngắn thời gian báo cáo hàng tháng 35% cho các phòng ban nội bộ.",
          "Phân tích và tối ưu truy vấn SQL Server cùng chiến lược đánh index, giảm 40% thời gian thực thi truy vấn tổng hợp dữ liệu cho các tập dữ liệu thống kê lớn.",
          "Thực hiện đánh giá lỗ hổng và kiểm thử bảo mật cho cổng web và dịch vụ di động, phát hiện và xử lý hơn 15 rủi ro bảo mật tiềm ẩn trước khi đưa vào production.",
        ],
      },
      {
        period: "07/2022 — 08/2022",
        type: "Thực tập",
        role: "Intern Backend Engineer",
        company: "FPT Software",
        place: "Đà Nẵng",
        points: [
          "Phân tích yêu cầu hệ thống và phát triển RESTful API bằng Spring Boot, đạt 100% tiến độ bàn giao đúng hạn cho các module backend được giao.",
          "Viết tài liệu API và bộ Postman collection đầy đủ, đẩy nhanh tích hợp frontend-backend và giảm 25% thời gian kiểm thử onboarding.",
          "Quản lý công việc hàng ngày và backlog sprint qua Trello trong môi trường Agile, tích cực tham gia review code và thảo luận kỹ thuật cùng nhóm.",
        ],
      },
    ],
    projects: [
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
    ],
    personalProjects: [
      {
        id: "goidaugiuong",
        href: "https://goidaugiuong.site/",
        image: "/goidaugiuong.png",
        imageAlt: "Trang chủ goidaugiuong.site — Gối Đầu Giường",
        badge1: "Đang hoạt động",
        badge2: "Tự làm & tự vận hành",
        title: "goidaugiuong.site",
        description:
          "Trang bán ebook của riêng tôi: khách chọn sách, thanh toán trực tuyến, hệ thống tự động gửi ebook qua email ngay sau khi nhận được thanh toán. Tôi làm toàn bộ từ giao diện, backend, luồng thanh toán đến việc mua domain và triển khai.",
        tags: ["Thanh toán online", "Gửi mail tự động", "Tự deploy"],
        cta: "Mở website →",
      },
      {
        id: "uslove",
        href: "https://vue-app-love-us-new.vercel.app/home",
        image: "/uslove.png",
        imageAlt: "Trang chủ UsLove — danh sách động vật tuyệt chủng",
        badge1: "Dự án thi trường",
        badge2: "Website đẹp",
        title: "UsLove",
        description:
          "Dự án cá nhân tôi mang đi thi website đẹp của trường: một trang giới thiệu danh sách các loài động vật đang có nguy cơ tuyệt chủng, giúp người xem tìm hiểu và nâng cao nhận thức về bảo tồn thiên nhiên.",
        tags: ["Vue.js", "Bảo tồn động vật", "Cuộc thi website"],
        cta: "Mở website →",
      },
    ],
    faqs: [
      {
        q: "Bạn đang làm freelance hay tìm việc full-time?",
        a: "Hiện tại tôi làm freelancer và đang mở cho cả hai hướng: nhận dự án ngắn hạn, hoặc một vị trí full-time phù hợp. Cứ nhắn tôi cụ thể nhu cầu, tôi sẽ phản hồi rõ có nhận được hay không.",
      },
      {
        q: "Bạn mạnh nhất ở mảng công nghệ nào?",
        a: "Backend là chủ lực với NodeJS / NestJS và .NET / C#, thiết kế và tối ưu SQL Server. Tôi cũng làm frontend bằng ReactJS / NextJS để tự đưa một tính năng đi hết đường, từ API đến giao diện người dùng.",
      },
      {
        q: "Bạn có nhận dự án làm việc từ xa (remote) không?",
        a: "Có. Phần lớn công việc trước đây của tôi đã làm với khách hàng nước ngoài và các hệ thống nội bộ theo hình thức phối hợp từ xa, nên làm remote không phải vấn đề.",
      },
      {
        q: "Quy trình làm việc với bạn như thế nào?",
        a: "Tôi thường trao đổi trực tiếp để hiểu rõ nghiệp vụ và mục tiêu trước khi viết dòng code đầu tiên, sau đó chia nhỏ công việc, cập nhật tiến độ thường xuyên và bàn giao kèm hướng dẫn vận hành.",
      },
      {
        q: "Bao lâu thì bạn phản hồi khi được liên hệ?",
        a: "Tôi thường phản hồi trong ngày qua Zalo hoặc điện thoại. Nếu nhắn qua email, có thể chậm hơn một chút nhưng tôi vẫn kiểm tra và trả lời đều đặn.",
      },
    ],
    ui: {
      experienceKicker: "Kinh nghiệm",
      roleKicker: "Vai trò",
      fullstack: "Fullstack",
      openTo: ["Đang mở cho", "cơ hội mới"],
      currentKicker: "Hiện tại",
      currentRole: "Junior Developer — Freelancer",
      strongestKicker: "Làm mạnh nhất",
      quickContactKicker: "Liên hệ nhanh",
      zaloMessage: "Nhắn qua Zalo",
      sectionAbout: "01 — Giới thiệu",
      sectionExperience: "02 — Kinh nghiệm",
      sectionWorkProjects: "03 — Dự án đã làm",
      sectionPersonalProjects: "04 — Dự án cá nhân",
      sectionFaq: "05 — Câu hỏi thường gặp",
      sectionContact: "06 — Liên hệ",
      educationKicker: "Học vấn",
      languagesKicker: "Ngôn ngữ",
      languageNative: "Tiếng Việt — bản ngữ",
      languageTechnical: "English — đọc tài liệu kỹ thuật",
      workProjectsHint: "Nhấn vào từng thẻ để xem chi tiết công việc tôi đảm nhận.",
      faqHint: "Nhấn vào từng câu hỏi để xem câu trả lời.",
      contactHeadline: "Đang tìm người làm fullstack? Nhắn tôi một câu là được.",
      contactPhone: "Điện thoại & Zalo",
      contactZalo: "Zalo",
      contactFacebook: "Facebook",
      contactEmail: "Email",
      downloadCv: "Tải CV (PDF)",
      switchToLight: "Chuyển sang giao diện sáng",
      switchToDark: "Chuyển sang giao diện tối",
      viewDetails: "Xem chi tiết →",
      prevProject: "Dự án trước",
      nextProject: "Dự án tiếp theo",
      pageLabel: "Trang",
      close: "Đóng",
      workIDid: "Việc tôi làm",
    },
  },
  en: {
    profile: {
      name: "Nguyen Thanh Thien",
      nameLines: ["Nguyen Thanh", "Thien"],
      role: "Full-stack Developer",
      years: "3+ years",
      born: "2002",
      city: "Da Nang",
      phone: "0373245002",
      phonePretty: "0373 245 002",
      zalo: "https://zalo.me/0373245002",
      facebook: "https://www.facebook.com/nguyenthanhthien0706/",
      email: "thanhthien0706.developer@gmail.com",
      github: "https://github.com/thanhthien0706",
      cv: "/CV-NguyenThanhThien.pdf",
      headline: ["Building systems", "from data", "to users."],
      intro:
        "Full-stack Developer with 3+ years of experience, focused on .NET, NodeJS / NestJS, ReactJS and SQL Server. I build management, integration and reporting systems for businesses — from the API and database to the end-user interface.",
      aboutLead:
        "I do backend mainly with .NET and NodeJS / NestJS, and I also do frontend so I can carry a feature all the way through: from the data table to the screen users actually see.",
      aboutBody:
        "Over the past few years I've worked on systems for an overseas client at Napa Global — inventory management for a retail chain, a vendor portal, and data integration and reporting. I'm currently at the Da Nang Statistics Office, building a population and religion statistics website while also finding bugs and running security tests on the system. I'm used to working directly with users to understand the business need before writing the first line of code.",
      education: [
        {
          school: "Vietnam - Korea University of Information and Communication Technology (VKU)",
          detail: "B.Eng. in Software Engineering · 01/2020 – 05/2025",
        },
        {
          school: "Genetic - Computer & Languages Center",
          detail: "Master Front-End & VueJS course · 07/2021 – 02/2022",
        },
      ],
    },
    nav: [
      { num: "01", label: "About", id: "gioi-thieu" },
      { num: "02", label: "Experience", id: "kinh-nghiem" },
      { num: "03", label: "Work projects", id: "du-an" },
      { num: "04", label: "Personal projects", id: "ca-nhan" },
      { num: "05", label: "FAQ", id: "faq" },
      { num: "06", label: "Contact", id: "lien-he" },
    ],
    skills: [
      {
        group: "Backend",
        tag: "tag-accent",
        items: [".NET / C#", "NodeJS", "NestJS", "RESTful API", "GraphQL", "Express.js"],
      },
      {
        group: "Frontend",
        tag: "tag-neutral",
        items: ["ReactJS", "Next.js", "JavaScript / TypeScript", "HTML / CSS", "SASS"],
      },
      {
        group: "Databases",
        tag: "tag-outline",
        items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis", "SSIS / ETL"],
      },
      {
        group: "DevOps & Testing",
        tag: "tag-accent-2",
        items: [
          "Docker",
          "Docker Compose",
          "CI/CD (GitHub Actions / GitLab CI)",
          "Nginx",
          "Jest",
          "Vitest",
          "xUnit",
        ],
      },
      {
        group: "AI & Tools",
        tag: "tag-accent",
        items: ["Claude (Claude Code)", "Cursor", "ChatGPT", "Prompt Engineering", "Git", "Security testing"],
      },
    ],
    jobs: [
      {
        period: "01/2022 — present",
        type: "Freelancer",
        role: "Freelancer Developer",
        company: "Freelance",
        place: "Remote",
        points: [
          "Built and customized responsive websites and high-converting landing pages for 15+ clients, cutting turnaround time by 40% using AI-assisted engineering workflows (Cursor, Claude).",
          "Developed automation scripts and RESTful data-dispatching tools (Node.js) to automate business processes, saving clients an average of 10+ hours per week of manual data entry.",
          "Maintained a 100% on-time milestone completion rate and over 95% client satisfaction score across all contracts.",
        ],
      },
      {
        period: "09/2022 — 06/2026",
        type: "Full-time",
        role: "Software Engineer",
        company: "Napa Global",
        place: "Da Nang",
        points: [
          "Participated in the development of a blockchain project using Golang, focused on USDT trading.",
          "Collaborated with a cross-functional team to build a product tracking system for Seven-Eleven stores, improving inventory management efficiency.",
          "Developed products to track imported and exported goods at Seven-Eleven stores.",
          "Participated in database design and solutions for the project.",
          "Maintained and developed features for legacy projects: adding features to the Access App, creating/editing reports with Report Builder / SSRS, and creating/editing automated SSIS jobs.",
          "Supported deployment of products to Production and Staging environments.",
          "Reduced page load time from 15 minutes to 3 minutes through content optimization and lazy loading, improving user experience and fixing timeout and out-of-memory issues.",
          "Participated in projects following the Agile Scrum model.",
          "Integrated login with Microsoft Azure and synced data from Stripe.",
          "Polished the UI from Figma designs.",
        ],
      },
      {
        period: "08/2025 — 12/2025",
        type: "Full-time",
        role: "Junior Software Engineer",
        company: "Da Nang Statistics Office",
        place: "Da Nang",
        points: [
          "Developed responsive web forms and dynamic statistical dashboards using DevExpress and C#, cutting monthly reporting turnaround time by 35% across internal departments.",
          "Analyzed and optimized SQL Server queries and indexing strategies, reducing data aggregation query execution time by 40% for large statistical datasets.",
          "Conducted vulnerability assessments and security testing for web portals and mobile services, identifying and resolving over 15 potential security risks before production rollout.",
        ],
      },
      {
        period: "07/2022 — 08/2022",
        type: "Internship",
        role: "Intern Backend Engineer",
        company: "FPT Software",
        place: "Da Nang",
        points: [
          "Analyzed system requirements and developed RESTful API endpoints using Spring Boot, achieving 100% on-schedule delivery for assigned backend modules.",
          "Authored comprehensive API documentation and Postman collections, accelerating frontend-backend integration and cutting onboarding testing time by 25%.",
          "Managed daily task workflows and sprint backlogs via Trello in an Agile environment, actively contributing to code reviews and technical discussions.",
        ],
      },
    ],
    projects: [
      {
        id: "7gt",
        name: "7GT",
        company: "Napa Global — 7-Eleven chain client",
        period: "2023 — 2025",
        kind: "Retail chain management & inventory",
        short:
          "Inventory management and stock-check system for the 7-Eleven convenience store chain: tracking stock, stock-check slips, and reconciling figures per store.",
        detail:
          "7GT is an internal system supporting 7-Eleven chain operations: store staff create stock-check slips, the system reconciles them against inventory, and exports figures for the management team. I worked on both ends — the .NET API and database, and the ReactJS interface — so I owned features from business analysis through to production.",
        points: [
          "Developed APIs in .NET / C# and designed and optimized SQL Server queries for large data tables.",
          "Built the management and stock-check interface in ReactJS: data tables, input forms, per-store permissions.",
          "Worked directly with the client to clarify requirements and handle feedback after each release.",
          "Fixed bugs, maintained, and supported the system in production.",
        ],
        stack: [".NET / C#", "ReactJS", "SQL Server", "RESTful API"],
      },
      {
        id: "vendor",
        name: "Vendor Portal & SIA",
        company: "Napa Global",
        period: "2022 — 2024",
        kind: "Vendor portal & data reporting",
        short:
          "A portal for vendors alongside a reporting system — integrating and syncing data between systems using SSIS.",
        detail:
          "Vendor Portal is where vendors look up their orders and figures; SIA aggregates, integrates, and exports reports for the business team. The hardest part wasn't the UI — it was making data from multiple sources match up and run correctly on schedule every day.",
        points: [
          "Built and maintained data integration pipelines with SSIS / ETL between systems, running on a daily schedule.",
          "Wrote stored procedures and SQL Server queries for business reporting.",
          "Developed the .NET API and ReactJS interface for the vendor portal.",
          "Reviewed data discrepancies and resolved them together with business users.",
        ],
        stack: [".NET / C#", "SSIS / ETL", "SQL Server", "ReactJS"],
      },
      {
        id: "thongke",
        name: "Population & religion statistics website",
        company: "Da Nang Statistics Office",
        period: "2025 — present",
        kind: "Public sector system",
        short:
          "A website for publishing and looking up population and religion statistics, including bug fixing and security testing for the system.",
        detail:
          "My current job: building a population and religion statistics website for the Da Nang Statistics Office. Besides feature development, I also review bugs and test security for the site — for a system that publishes public data, accuracy and safety matter equally.",
        points: [
          "Developed features for the population and religion statistics website.",
          "Found and fixed bugs during operation, including ones caused by bad input data.",
          "Tested website security and proposed fixes.",
        ],
        stack: [".NET / C#", "SQL Server", "JavaScript", "Web security"],
      },
      {
        id: "digital-wallet",
        name: "Digital Wallet",
        company: "Personal project",
        period: "2026 — present",
        kind: "E-wallet",
        short:
          "An e-wallet that lets users top up from their bank into the wallet, transact within the wallet, and convert to USDT.",
        detail:
          "Digital Wallet is an e-wallet I built myself: users link a bank account to top up the wallet, make internal transactions, and convert their balance to USDT. I built the backend in NestJS handling top-ups, transaction reconciliation, and USDT conversion, with a ReactJS / NextJS frontend.",
        points: [
          "Built APIs in NestJS handling bank top-ups, in-wallet transactions, and USDT conversion.",
          "Designed the database and transaction reconciliation flow to keep balances accurate.",
          "Built the user interface in ReactJS / NextJS for the wallet and transaction history.",
        ],
        stack: ["NestJS", "ReactJS / NextJS", "PostgreSQL / MongoDB"],
      },
    ],
    personalProjects: [
      {
        id: "goidaugiuong",
        href: "https://goidaugiuong.site/",
        image: "/goidaugiuong.png",
        imageAlt: "goidaugiuong.site homepage — Gối Đầu Giường",
        badge1: "Active",
        badge2: "Built & run solo",
        title: "goidaugiuong.site",
        description:
          "My own ebook store: customers pick a book, pay online, and the system automatically emails the ebook right after payment is received. I built everything myself — UI, backend, payment flow, domain purchase, and deployment.",
        tags: ["Online payment", "Automated email", "Self-deployed"],
        cta: "Open website →",
      },
      {
        id: "uslove",
        href: "https://vue-app-love-us-new.vercel.app/home",
        image: "/uslove.png",
        imageAlt: "UsLove homepage — endangered species list",
        badge1: "School competition",
        badge2: "Beautiful website",
        title: "UsLove",
        description:
          "A personal project I entered in my school's website design contest: a page introducing endangered animal species, helping visitors learn about and raise awareness for wildlife conservation.",
        tags: ["Vue.js", "Wildlife conservation", "Website contest"],
        cta: "Open website →",
      },
    ],
    faqs: [
      {
        q: "Are you freelancing or looking for a full-time role?",
        a: "Right now I'm freelancing and open to both: short-term projects or a suitable full-time position. Just tell me what you need and I'll let you know clearly whether I can take it on.",
      },
      {
        q: "What's your strongest area?",
        a: "Backend is my main strength with NodeJS / NestJS and .NET / C#, along with SQL Server design and optimization. I also do frontend with ReactJS / NextJS so I can carry a feature all the way through, from API to user interface.",
      },
      {
        q: "Do you take remote work?",
        a: "Yes. Most of my past work has been with overseas clients and internal systems in a remote setup, so remote work isn't an issue.",
      },
      {
        q: "What's your workflow like?",
        a: "I usually talk directly with the client first to understand the business need and goals before writing the first line of code, then break the work into pieces, give regular progress updates, and hand off with operating instructions.",
      },
      {
        q: "How fast do you respond when contacted?",
        a: "I usually respond the same day via Zalo or phone. If you message by email, it might be a bit slower, but I still check and reply regularly.",
      },
    ],
    ui: {
      experienceKicker: "Experience",
      roleKicker: "Role",
      fullstack: "Fullstack",
      openTo: ["Open to", "new opportunities"],
      currentKicker: "Currently",
      currentRole: "Junior Developer — Freelancer",
      strongestKicker: "Strongest at",
      quickContactKicker: "Quick contact",
      zaloMessage: "Message via Zalo",
      sectionAbout: "01 — About",
      sectionExperience: "02 — Experience",
      sectionWorkProjects: "03 — Work projects",
      sectionPersonalProjects: "04 — Personal projects",
      sectionFaq: "05 — FAQ",
      sectionContact: "06 — Contact",
      educationKicker: "Education",
      languagesKicker: "Languages",
      languageNative: "Vietnamese — native",
      languageTechnical: "English — technical reading",
      workProjectsHint: "Click each card to see the details of the work I did.",
      faqHint: "Click each question to see the answer.",
      contactHeadline: "Looking for a fullstack developer? Just send me a message.",
      contactPhone: "Phone & Zalo",
      contactZalo: "Zalo",
      contactFacebook: "Facebook",
      contactEmail: "Email",
      downloadCv: "Download CV (PDF)",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      viewDetails: "View details →",
      prevProject: "Previous project",
      nextProject: "Next project",
      pageLabel: "Page",
      close: "Close",
      workIDid: "What I did",
    },
  },
};
