import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { FiFacebook, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aung Thiha Htun | Full-Stack Developer",
  generator: "NextJS Software Developer",
  applicationName: "Aung Thiha Htun | Full-Stack Developer",
  description:
    "I have been working and learning on software dev since 2020 and created lots of personal, academic and commercial projects. As a person, I am optimistic, passionate, fast to learn and timely on deadline.",
  creator: "Aung Thiha Htun",
  authors: [{ name: "Aung Thiha Htun" }],
  openGraph: {
    title: "Aung Thiha Htun | Full-Stack Developer",
    description:
      "I have been working and learning on software dev since 2020 and created lots of personal, academic and commercial projects. As a person, I am optimistic, passionate, fast to learn and timely on deadline.",
    siteName: "Aung Thiha Htun | Full-Stack Developer",
    url: "https://aung-omega.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://aung-omega.vercel.app/img/profile.jpg",
        alt: "Aung Thiha Htun",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grid-slate-100`}>
        <Navbar />
        <div className="bg-gradient-to-b from-transparent to-white">
          {children}
          <footer className="text-center text-gray-400 py-5">
            <div className="flex gap-5 text-2xl hover:text-gray-800 text-black items-center justify-center py-5">
              <Link
                href={"https://www.facebook.com/harris5402"}
                target="_blank"
              >
                <FiFacebook />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/aung-thiha-tun-6234a61b6"}
                target="_blank"
              >
                <FiLinkedin />
              </Link>
              <Link href={"https://github.com/harrison542002"} target="_blank">
                <FiGithub />
              </Link>
              <Link
                href={
                  "https://instagram.com/harrison.yin?igshid=MjEwN2IyYWYwYw=="
                }
                target="_blank"
              >
                <FiInstagram />
              </Link>
            </div>
            <p>Copyright © {new Date().getFullYear()}. Make With 💖 By Aung</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
