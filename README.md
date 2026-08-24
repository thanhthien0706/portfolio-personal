# Portfolio — Nguyễn Thanh Thiện (Next.js)

Bản Next.js (App Router, TypeScript) của trang portfolio. Giao diện theo design system **Nocturne**, có 2 chế độ sáng / tối (mặc định tối, ghi nhớ trong localStorage).

## Chạy thử

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Cấu trúc

- `app/layout.tsx` — khung trang, font Inter, script chống nháy màu khi tải
- `app/page.tsx` — bố cục 2 cột: sidebar bên trái, nội dung bên phải
- `app/globals.css` — override token cho theme sáng, animation, responsive
- `app/nocturne.css` — token và class của design system Nocturne (không sửa)
- `components/Sidebar.tsx` — menu, đánh dấu mục đang xem, nút đổi theme, tải CV
- `components/Projects.tsx` — grid dự án + modal chi tiết
- `components/Reveal.tsx` — hiệu ứng hiện dần khi cuộn
- `data/portfolio.ts` — toàn bộ nội dung (thông tin, timeline, dự án, bài viết)

## Cần thay
- Bài viết trong `data/portfolio.ts` đang là nháp — thay tiêu đề và link thật
- Ảnh dự án cá nhân: `public/goidaugiuong.png`
