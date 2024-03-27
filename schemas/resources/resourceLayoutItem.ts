import { portableTextSchema } from "@files/schemas/common/portableTextSchema";
import { defineType } from "sanity";

export default defineType({
  name: "resourceLayoutItems",
  title: "Resource Layout Items",
  type: "object",
  fields: [
    {
      name: "sectionName",
      title: "Section Name",
      type: "string",
      options: {
        list: [
          "Line Break",
          "Text Block",
          "Tab Component Layout",
          "Vertial Tab Component Layout",
          "Two Column Layout",
          "Carousel",
          "Hero Image",
          "Pointers",
          "Brand List",
          "Banner",
          "Footer",
          "Team Section",
          "Blogs Preview",
          "Blog Post",
          "Resource Items",
        ],
      },
    },
    {
      name: "allBlogsSection",
      title: "All Blogs",
      type: "allBlogs",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "All Blogs",
    },
    {
      name: "lineBreak",
      title: "Line Break",
      type: "lineBreak",
      description: "Line Break",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Line Break",
    },
    {
      name: "blogsPreview",
      title: "Blogs Preview",
      type: "blogspreview",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Blogs Preview",
    },
    {
      name: "caraousel",
      title: "Carousel",
      type: "array",
      of: [{ type: "image" }],
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Carousel",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Hero Image",
    },
    {
      name: "twoColumnLayout",
      title: "Two Column Layout",
      type: "twocolumnlayout",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Two Column Layout",
    },
    {
      name: "pointerLayout",
      title: "Pointers",
      type: "pointerSection",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Pointers",
    },
    {
      name: "brandList",
      title: "Brand List",
      type: "reference",
      to: [{ type: "brandList" }],
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Brand List",
    },
    {
      name: "textBlock",
      title: "Text Block",
      type: "object",
      fields: [
        {
          name: "textPosition",
          title: "Text Position",
          type: "string",
          options: {
            list: ["left", "right", "center"],
          },
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: portableTextSchema,
        },
      ],
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Text Block",
    },
    {
      name: "banner",
      title: "Banner",
      type: "banner",
      hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Banner",
    },
    {
      name: "tabComponentLayout",
      title: "Tab Component Layout",
      type: "tabComponentLayout",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Tab Component Layout",
    },
    {
      name: "verticalTabComponentLayout",
      title: "Vertial Tab Component Layout",
      type: "verticalTabComponentLayout",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Vertial Tab Component Layout",
    },
    {
      name: "teamSection",
      title: "Team Section",
      type: "teams",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Team Section",
    },
  ],
});
