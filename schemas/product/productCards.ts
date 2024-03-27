import { defineType } from "sanity";
import { buttonSchema } from "@files/schemas/common/buttonSchema";

// schemas/productCard.js
export default defineType({
  name: "productCard",
  title: "Product Card",
  type: "object",
  fields: [
    {
      name: "image",
      title: "image",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "showCTAButton",
      title: "Show CTA Button",
      type: "boolean",
    },
    {
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: buttonSchema,
      hidden: ({ parent }) => !parent?.showCTAButton,
    },
    {
      name: "textPosition",
      title: "Text Position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Center", value: "center" },
        ],
        layout: "radio",
      },
    },
  ],
});
