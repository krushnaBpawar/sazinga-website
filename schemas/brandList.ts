import { defineField } from "sanity";

import { SanitySchema } from "@/utility/types";

const brandList: SanitySchema = {
  name: "brandList",
  title: "Brand List",
  type: "object",
  fields: [
    {
      name: "brandListName",
      title: "Brand List Name",
      type: "string",
    },
    defineField({
      name: "brandlistHeight",
      title: "Brand List Height",
      type: "number",
      validation: (rule) => rule.required(),
      description: "Height of the brand list in px",
    }),
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          "Green",
          "LightBlue",
          "DarkBlue",
          "Blue",
          "Black",
          "Secondary",
          "White",
          "Transparent",
          "Alt",
        ],
      },
      validation: (rule) => rule.required(),
      description:
        "Background color of the brand list and gradient at the sides",
    }),
    defineField({
      name: "brandLogos",
      title: "List of Logo",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
};

export default brandList;
