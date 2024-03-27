import { ArrowDownIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { buttonSchema } from "../common/buttonSchema";
import blogCategory from "./blogCategory";

export default defineType({
  name: "blogspreview",
  title: "Blog Preview",
  type: "object",
  fields: [
    defineField({
      name: "preTitle",
      title: "Pre Title",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category Recommendation",
      type: "reference",
      to: [{ type: blogCategory.name }],
    }),
    {
      name: "button",
      title: "Buttons",
      type: "object",
      fields: [
        {
          name: "buttonLayout",
          title: "Button Layout",
          type: "string",
          options: {
            list: ["row", "column"],
          },
        },
        {
          name: "showprimarybutton",
          title: "Show Primary Button",
          type: "boolean",
          description: "Toggle to show primary button",
        },
        {
          name: "primaryButton",
          title: "Primary Button",
          type: "document",
          fields: buttonSchema,
          hidden: ({ parent }: { parent: any }) =>
            parent && !parent.showprimarybutton,
        },
        {
          name: "showsecondarybutton",
          title: "Show Secondary Button",
          type: "boolean",
          description: "Toggle to show secondary button",
        },
        {
          name: "secondaryButton",
          title: "Secondary Button",
          type: "document",
          fields: buttonSchema,
          hidden: ({ parent }: { parent: any }) =>
            parent && !parent.showsecondarybutton,
        },
      ],
    },
  ],
});
