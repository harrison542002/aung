import SpacingLayout from "@/components/SpacingLayout";
import TypedHeading from "@/components/typeheading";
import { client } from "../../../tina/__generated__/client";
import BlogCard from "./components/blogCard";

type Props = {};

const Page = async (props: Props) => {
  const blogResponse = await client.queries.blogConnection();
  return (
    <SpacingLayout>
      <div className="py-10">
        <TypedHeading heading="I love to share What I know" />
        <div className="grid-col xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 grid gap-5 py-5">
          {blogResponse.data.blogConnection.edges?.map((blog) => {
            const data = {
              title: blog?.node?.title as string,
              date: blog?.node?.date as string,
              _sys: {
                filename: blog?.node?._sys.filename as string,
              },
              intro: blog?.node?.intro,
            };

            return (
              <>
                <BlogCard {...data} />
              </>
            );
          })}
        </div>
      </div>
    </SpacingLayout>
  );
};

export default Page;
