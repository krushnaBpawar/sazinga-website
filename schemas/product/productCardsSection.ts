import { defineField, defineType } from "sanity";

export default defineType({
  name: "productCardsSection",
  title: "Product Cards section",
  type: "object",
  fields: [
    defineField({
      name: "column",
      title: "Column",
      type: "number",
      description: "Number of columns to display, the rows will be no of items/column",
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
      name: "fullWidthImage",
      title: "Full Width Image",
      type: "boolean",
    },
    defineField({
      name: "listOfProductCards",
      title: "List Of Product Cards",
      type: "array",
      of: [{ type: "productCard" }], // Reference the product card schema here
    }),
  ],
});
