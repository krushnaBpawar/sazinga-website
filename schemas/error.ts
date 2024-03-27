import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "error",
  title: "Error Pages",
  type: "document",
  fields: [
    defineField({
      name: "navbar",
      title: "Navbar",
      type: "reference",
      to: [{ type: "navbar" }],
      validation: (Rule) => Rule.required().error("Navbar is required"),
    }),
    defineField({
      name: "footerSection",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      validation: (Rule) => Rule.required().error("Footer is required"),
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [defineArrayMember({ type: "sectionItems" })],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
