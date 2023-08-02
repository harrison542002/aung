import React from "react";

type Props = {
  children: React.ReactNode;
};

const SpacingLayout = ({ children }: Props) => {
  return <div className="lg:mx-20 mx-10">{children}</div>;
};

export default SpacingLayout;
