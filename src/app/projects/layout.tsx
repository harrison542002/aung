import { Metadata } from "next";
import React from "react";

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
  title: "Projects | Aung Thiha Htun",
  description: "Learn more about my projects.",
  keywords: ["aung thiha htun", "web developer"],
};

const Layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default Layout;
