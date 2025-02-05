import React, { JSX } from "react";

const Title = ({
  children,
  tag = "div",
}: {
  children: React.ReactNode;
  tag: string;
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag>{children}</Tag>;
};

export default Title;
