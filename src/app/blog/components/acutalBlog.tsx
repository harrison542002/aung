"use client";
import React from "react";
import { BlogQuery } from "../../../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import formatDate from "@/lib/formatDate";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
type Props = {
  data: BlogQuery;
  variables: { relativePath: string };
  query: string;
};

const ActualBlog = (props: Props) => {
  const { data } = useTina(props);
  return (
    <div className="">
      <div className="bg-gray-50 p-10 text-gray-800 rounded-md shadow-md">
        <h2 className="lg:text-6xl xl:text-8xl md:text-5xl text-3xl font-semibold">
          {data.blog.title}
        </h2>
        <p className="text-xs text-gray-400 pt-3">
          {formatDate(data.blog.date as string)}
        </p>
        <div className="py-3 text-sm">
          <TinaMarkdown
            content={data.blog.intro}
            components={{
              p: (props) => <p className="py-5 text-justify" {...props} />,
            }}
          />
          {data.blog.paragraph?.map((p) => {
            switch (p?.__typename) {
              case "BlogParagraphParagraphWithImage": {
                return (
                  <>
                    <div className="flex justify-center items-center">
                      <div className="relative aspect-video my-10 shadow-md w-full max-w-xl h-auto border">
                        <Image
                          src={p.paragraphImage as string}
                          fill
                          alt="blogging"
                          className="absolute"
                        />
                      </div>
                    </div>
                    <TinaMarkdown
                      content={p.paragraph}
                      components={{
                        p: (props) => <p className="text-justify" {...props} />,
                        h3: (props) => (
                          <h3
                            className="pt-5 text-xl font-semibold"
                            {...props}
                          />
                        ),
                      }}
                    />
                  </>
                );
              }
              case "BlogParagraphParagraphWithoutImage": {
                return (
                  <>
                    <TinaMarkdown
                      content={p.paragraph}
                      components={{
                        p: (props) => <p className="text-justify" {...props} />,
                        h3: (props) => (
                          <h3
                            className="pt-5 text-xl font-semibold"
                            {...props}
                          />
                        ),
                      }}
                    />
                  </>
                );
              }
            }
          })}
        </div>
        <Link href={"/blog"}>
          <div className="text-gray-600 pt-10 flex items-center gap-3 group lg:text-base md:text-base xl:text-base text-xs">
            <AiOutlineLeft className="group-hover:-translate-x-2 transition-transform duration-500" />
            <p>Back To Blog Lists</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ActualBlog;
