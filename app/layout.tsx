import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "GameMano",
  description: "GameMano Creation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Sidebar />
          <div className="mb-8">
            <Navbar />
          </div>
        </StoreProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
