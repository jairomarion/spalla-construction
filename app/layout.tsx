import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/navbar";

// Load Montserrat with the specific weights we need for that bold, premium look
const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Spalla Limited | Construction & Infrastructure",
  description: "Leaders in quality construction and infrastructure.",
  icons:{
   icon: "/Spalla.png",}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
      className={`${montserrat.variable} h-full antialiased`}
    >
      
      <body className="font-sans min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
