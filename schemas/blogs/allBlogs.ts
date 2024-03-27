import { defineField, defineType } from "sanity";

export default defineType({
  name: "allBlogs",
  title: "All Blogs",
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
