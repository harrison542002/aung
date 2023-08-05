import SpacingLayout from "@/components/SpacingLayout";
import React from "react";
import client from "../../../../tina/__generated__/client";
import ActualBlog from "../components/acutalBlog";

const Page = async ({ params }: { params: { slug: string } }) => {
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
