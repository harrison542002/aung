import formatDate from "@/lib/formatDate";
import Link from "next/link";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Prop = {
  title: string;
  date?: string | null | undefined;
  intro?: any;
  _sys: {
    filename: string;
  };
};
const BlogCard = (props: Prop) => {
  return (
    <div className="bg-gray-50 border p-5 w-full rounded-md shadow-md text-gray-800">
      <h3 className="text-2xl font-semibold">{props.title}</h3>
      <p className="text-xs text-gray-400 ">
        {formatDate(props.date as string)}
      </p>
      <div className="py-5">
        <TinaMarkdown
          content={props.intro}
          components={{
            p: (props) => (
              <p className="text-xs text-justify lg:h-20 overflow-hidden">
                {props?.children} {"..."}
              </p>
            ),
          }}
        />
      </div>
      <div>
        <Link href={`/blog/${props?._sys?.filename}`}>
          <button className=" text-gray-900 border border-gray-900 p-3 rounded-md text-sm shadow-md transition-all duration-500 hover:bg-gray-900 hover:text-slate-100">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
