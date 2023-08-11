"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import navbarStyle from "./navbar.module.css";
import SpacingLayout from "./SpacingLayout";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [open, setOpen] = useState(false);
  const path = usePathname();
  const links = [
    { href: "/", link: "Intro" },
    { href: "/experiences", link: "Experiences" },
    { href: "/projects", link: "Projects" },
    { href: "/blog", link: "Blogs" },
  ];

  const menuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(() => !open);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`bg-white/90 sticky z-30 shadow-slate-100 shadow-sm transition-all duration-300 top-0 ${
          show ? "translate-y-0" : "-translate-y-40"
        }`}
      >
        <SpacingLayout>
          <div className="py-3 flex justify-between">
            <div>
              <Image
                src="/aung.svg"
                height={60}
                width={60}
                alt="Aung Thiha Htun"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
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
                      className={
                        path === link.href ? "font-bold" : "font-normal"
                      }
                    >
                      {link.link}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={"/contact"}
                    className="bg-cyan-400 p-3 font-bold text-black rounded-md shadow-md"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </SpacingLayout>
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
          <li className="text-center">
            <Link href="/contact" onClick={() => setOpen(() => !open)}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
