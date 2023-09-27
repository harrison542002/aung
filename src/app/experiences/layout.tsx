import { Metadata } from "next";
import React from "react";

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
  title: "Experiences | Aung Thiha Htun",
  description: "Learn more about my job experiences.",
  keywords: ["aung thiha htun", "web developer", "software engineering"],
};

const Layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default Layout;
