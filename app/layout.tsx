import type { Metadata } from "next";
import "./nocturne.css";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Nguyễn Thanh Thiện — Full-stack Developer",
  description:
    "Portfolio của Nguyễn Thanh Thiện: Full-stack Developer hơn 3 năm kinh nghiệm NodeJS / NestJS, ReactJS, SQL Server.",
};

const themeScript = `(function(){try{var t=localStorage.getItem("ntt-theme")||"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}try{var l=localStorage.getItem("ntt-lang")||"vi";document.documentElement.setAttribute("lang",l)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
