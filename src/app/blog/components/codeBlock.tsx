import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
type Props = {
  lang: string | undefined;
  code: string;
};

function CodeBlock({ code, lang }: Props) {
  return (
    <>
      <SyntaxHighlighter
        style={atomOneDark}
        showLineNumbers={true}
        language={lang}
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
}

export default CodeBlock;
