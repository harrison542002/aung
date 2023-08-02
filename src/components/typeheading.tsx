import React from "react";
import ReactTyped from "react-typed";

type Props = { heading: string };

const TypedHeading = ({ heading }: Props) => {
  return (
    <h1 className="lg:text-6xl md:text-5xl text-3xl font-extrabold">
      <ReactTyped
        strings={[heading]}
        typeSpeed={50}
        backSpeed={50}
        showCursor={false}
      />
    </h1>
  );
};

export default TypedHeading;
