"use client";
import { BlogQuery } from "../../../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import formatDate from "@/lib/formatDate";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import BlogWithImage from "./blogWithImg";
import BlogWithoutImage from "./blogWithoutImg";

type Props = {
  data: BlogQuery;
  variables: { relativePath: string };
  query: string;
};

const ActualBlog = (props: Props) => {
  const { data } = useTina(props);
  return (
    <div className="lg:p-10 md:p-5 xl:p-12 p-4 text-gray-800 text-lg leading-8">
      <h2 className="lg:text-7xl xl:text-8xl text-5xl font-semibold">
        {data.blog.title}
      </h2>
      <p className="text-md text-gray-400 pt-3">
        {formatDate(data.blog.date as string)}
      </p>
      <div className="py-3">
        <TinaMarkdown
          content={data.blog.intro}
          components={{
            p: (props) => <p className="my-5" {...props} />,
          }}
        />
        {data.blog.paragraph?.map((p) => {
          switch (p?.__typename) {
            case "BlogParagraphParagraphWithImage": {
              return (
                <>
                  <BlogWithImage {...p} />
                </>
              );
            }
            case "BlogParagraphParagraphWithoutImage": {
              return (
                <>
                  <BlogWithoutImage {...p} />
                </>
              );
            }
          }
        })}
      </div>
      <Link href={"/blog"}>
        <button className="flex justify-start hover:bg-gray-800 hover:text-slate-50 transition-all duration-500 ease-in-out items-center gap-3 group lg:text-base md:text-base xl:text-base text-sm mb-5 border rounded-lg p-2 border-gray-800">
          <AiOutlineLeft />
          <p>Go Back</p>
        </button>
      </Link>
    </div>
  );
};

export default ActualBlog;
