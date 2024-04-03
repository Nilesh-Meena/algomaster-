import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Providers } from "@/utils/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlgoMaster",
  description: "Personal Blog Website for Data Structure and Algorithm",
};

// bg-[#0D1117]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Providers>
            <Navbar />
            {children}

            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
