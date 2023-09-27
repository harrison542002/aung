import Link from "next/link";
import React from "react";

type Props = {
  content: React.ReactNode;
  href: string;
};

const Button = ({ content, href }: Props) => {
  return (
    <Link href={href}>
      <button className="shadow-md lg:p-3 md:p-2 p-2 lg:text-lg md:text-base text-sm bg-slate-950 my-5 text-slate-100 rounded-md hover:text-cyan-400 transition-all duration-700">
        {content}
      </button>
    </Link>
  );
};

export default Button;
