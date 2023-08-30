import React from "react";

type Props = {
  children: React.ReactNode;
};

const SpacingLayout = ({ children }: Props) => {
  return <div className="lg:mx-20 md:mx-10 xl:mx-28 mx-5">{children}</div>;
};

export default SpacingLayout;
