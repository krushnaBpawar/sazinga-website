import { defineField, defineType } from "sanity";

export default defineType({
  name: "lineBreak",
  title: "Line Break",
  type: "object",
  fields: [
    defineField({
      name: "lineColor",
      title: "Line color",
      type: "string",
      options: {
        list: [
          "Alt",
          "Green",
          "LightBlue",
          "DarkBlue",
          "Blue",
          "Black",
          "Secondary",
          "White",
          "Transparent",
        ],
      },
    }),
    defineField({
      name: "marginTop",
      title: "Margin Top",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "marginBottom",
      title: "Margin Bottom",
      type: "number",
      validation: (rule) => rule.required(),
    }),
  ],
});
