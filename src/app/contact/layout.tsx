import { Metadata } from "next";
import React from "react";

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
  title: "Contact Me | Aung Thiha Htun",
  description: "Reach out to me to consult potential solutions.",
  keywords: ["aung thiha htun", "web developer", "software engineering"],
};

const Layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default Layout;
