import { defineField, defineType } from "sanity";

export default defineType({
  name: "onecolumnlayout",
  title: "One Column Layout",
  type: "object",
  fields: [
    {
      name: "horizontalAlign",
      title: "Horizontal Align",
      description: "Horizontal alignment of the one column layout",
      type: "string",
      options: {
        list: ["left", "center", "right"],
      },
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "bannerBackground",
      title: "Banner Background",
      type: "string",
      options: {
        list: ["Green", "LightBlue", "DarkBlue", "Blue", "Black", "Secondary", "White", "Transparent", "Alt"],
      },
    },
    {
      name: "textColor",
      title: "Text Color",
      type: "string",
      options: {
        list: ["Green", "LightBlue", "DarkBlue", "Blue", "Black", "Secondary", "White", "Transparent", "Alt"],
      },
    },
    defineField({
      name: "fieldId",
      title: "Section Id",
      type: "string",
      description: "Unique identifier for the two-column layout.",
    }),
    defineField({
      name: "oneColumnSection",
      title: "Section",
      type: "leftSection",
      description: "Content for the section of the one-column layout.",
      validation(rule) {
        return rule.required();
      },
    }),
  ],
});
