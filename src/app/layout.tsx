import type { Metadata } from "next";
import "@/styles/index.css";
import { Providers } from "@/app/providers";
import { Navbar } from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "OPC Club - 一人公司俱乐部",
  description: "独立开发者、自由职业者、一人公司创始人的展示与连接平台",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
