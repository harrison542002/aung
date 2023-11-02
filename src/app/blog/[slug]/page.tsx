import SpacingLayout from "@/components/SpacingLayout";
import React from "react";
import client from "../../../../tina/__generated__/client";
import ActualBlog from "../components/acutalBlog";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await client.queries.blog({
    relativePath: `${params.slug}.mdx`,
  });

  return {
    title: blog.data.blog.title,
    keywords: [blog.data.blog.title],
    description: blog.data.blog.intro,
  };
}

const Page = async ({ params }: Props) => {
  const blog = await client.queries.blog({
    relativePath: `${params.slug}.mdx`,
  });

  return (
    <SpacingLayout>
      <div className="py-10">
        <ActualBlog {...blog} />
      </div>
    </SpacingLayout>
  );
};

export default Page;
