import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "content/blogs",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/blog/${document._sys.filename}`;
          },
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "date",
            label: "date",
            type: "datetime",
          },
          { name: "intro", label: "Introduction", type: "rich-text" },
          {
            name: "paragraph",
            label: "Paragraph",
            type: "object",
            list: true,
            templates: [
              {
                name: "paragraphWithImage",
                label: "Paragraph With Image",
                fields: [
                  {
                    name: "paragraph",
                    label: "Paragraph",
                    type: "rich-text",
                  },
                  {
                    name: "paragraphImage",
                    label: "Paragraph Image",
                    type: "image",
                  },
                ],
              },
              {
                name: "paragraphWithoutImage",
                label: "Paragraph Without Image",
                fields: [
                  {
                    name: "paragraph",
                    label: "Paragraph",
                    type: "rich-text",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
