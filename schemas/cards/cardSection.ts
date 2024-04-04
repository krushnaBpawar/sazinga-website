import { defineField, defineType } from "sanity";

export default defineType({
  name: "cardSection",
  title: "Card section",
  type: "object",
  fields: [
    defineField({
      name: "column",
      title: "Column",
      type: "number",
      description:
        "Number of columns to display, the rows will be no of items/column",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shadow",
      title: "Card Shadow",
      type: "boolean",
      description: "Toggle to show card shadow and choose text color",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "paddingTop",
      title: "Padding Top",
      type: "boolean",
      description: "Padding top for the section",
      validation: (rule) => rule.required(),
    }),
    {
      name: "fullWidthIcon",
      title: "Full Width Icon",
      type: "boolean",
    },
    defineField({
      name: "listOfpointers",
      title: "List Of Pointers",
      type: "array",
      of: [{ type: "card" }], // Reference the pointer schema here
    }),
  ],
});
