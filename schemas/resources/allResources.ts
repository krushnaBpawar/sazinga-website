import { defineField, defineType } from "sanity";

export default defineType({
  name: "allResources",
  title: "Resources",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
