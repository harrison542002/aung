import { Metadata } from "next";
import React from "react";

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
  title: "Blog | Aung Thiha Htun",
  description: "I love to share what I know.",
  keywords: [
    "aung thiha htun",
    "web developer",
    "software engineering",
    "react",
    "DNS",
    "node",
    "design pattern",
  ],
};

const Layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default Layout;
