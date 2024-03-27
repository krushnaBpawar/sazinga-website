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
