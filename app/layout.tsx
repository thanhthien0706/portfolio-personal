import type { Metadata } from "next";
import "./nocturne.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Thanh Thiện — Full-stack Developer",
  description:
    "Portfolio của Nguyễn Thanh Thiện: Full-stack Developer 3 năm kinh nghiệm .NET / C#, ReactJS, NodeJS, SQL Server.",
};

const themeScript = `(function(){try{var t=localStorage.getItem("ntt-theme")||"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
