"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import navbarStyle from "./navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const links = [
    { href: "/", link: "Intro" },
    { href: "/experiences", link: "Experiences" },
    { href: "/education", link: "Education" },
    { href: "/contact", link: "Contact Me" },
  ];

  const menuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(() => !open);
  };

  return (
    <>
      <div className="bg-white/80 sticky top-0 z-30">
        <div className="mx-10 py-5 flex justify-between">
          <div>
            <h1>Logo</h1>
          </div>
          <div
            className={`flex lg:hidden ${navbarStyle.menu_btn} ${
              open === true ? navbarStyle.open : ""
            }`}
            onClick={(event) => menuClick(event)}
          >
            <div className={navbarStyle.meun_btn__burger}></div>
          </div>
          <ul className="lg:flex hidden gap-9">
            {links.map((link) => (
              <li>
                <Link
                  href={link.href}
                  className={path === link.href ? "font-bold" : "font-normal"}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div
        className={`h-full lg:hidden fixed w-full bg-black transition-all duration-200 ease-out left-0 z-50 ${
          open === false ? "-translate-x-full" : ""
        }`}
      >
        <ul className="text-gray-300 flex-col my-5 space-y-10 items-center text-lg transition-all duration-100 ease-out ">
          {links.map((link) => (
            <li className="text-center">
              <Link href={link.href} onClick={() => setOpen(() => !open)}>
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
