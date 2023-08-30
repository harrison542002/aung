import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BlogParagraphParagraphWithoutImage } from "../../../../tina/__generated__/types";
import CodeBlock from "./codeBlock";

const BlogWithoutImage = (props: BlogParagraphParagraphWithoutImage) => {
  return (
    <div>
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
    </div>
  );
};

export default BlogWithoutImage;
