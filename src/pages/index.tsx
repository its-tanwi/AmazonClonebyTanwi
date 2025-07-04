import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header/Header";
import HeaderBottom from "@/components/header/HeaderBottom";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      
      <div>
        <Banner/>
      </div>
    </main>
  );
}
