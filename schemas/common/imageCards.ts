import { BsImage } from "react-icons/bs";
import { defineField, defineType, Rule } from "sanity";

export default defineType({
  name: "imagecard",
  title: "Image Card",
  type: "object",
  icon: BsImage,
  description: "A card element consisting of an image and its caption.",
  fields: [
    defineField({
      name: "textPosition",
      title: "Text Position",
      type: "string",
      options: {
        list: ["left", "right", "center"],
      },
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "The text caption for the image.",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      description: "The link to the image.",
    }),
    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
      description: "The main image for the card.",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "A brief description of the image. Important for SEO and accessibility.",
          validation: (Rule: Rule) => Rule.required().min(2).max(100),
        },
      ],
    }),
  ],
});
