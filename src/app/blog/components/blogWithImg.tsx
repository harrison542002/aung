import React from "react";
import { BlogParagraphParagraphWithImage } from "../../../../tina/__generated__/types";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import CodeBlock from "./codeBlock";

const BlogWithImage = (props: BlogParagraphParagraphWithImage) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative aspect-video my-10 shadow-md w-full max-w-xl h-auto border">
          <Image
            src={props.paragraphImage as string}
            fill
            alt="blogging"
            className="absolute"
          />
        </div>
      </div>
      <TinaMarkdown
        content={props.paragraph}
        components={{
          p: (props) => <p className="my-5" {...props} />,
          h3: (props) => (
            <h3 className="pt-5 text-xl font-semibold" {...props} />
          ),
          code_block: (props) => (
            <>
              <CodeBlock code={props?.value as string} lang={props?.lang} />
            </>
          ),
        }}
      />
    </>
  );
};

export default BlogWithImage;
