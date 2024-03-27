import { DashboardIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Pages",
  // @ts-expect-error random TS Error but works fine
  icon: DashboardIcon,
  type: "document",
  fields: [
    defineField({
      name: "pageName",
      title: "Page Name",
      type: "string",
      description: "The name of the page for SEO purposes",
      validation: (Rule) => Rule.required().error("Page name is required"),
    }),
    defineField({
      name: "pageDescription",
      title: "Page Description",
      type: "string",
      description: "The description of the page for SEO purposes",
      validation: (Rule) =>
        Rule.required().error("Page description is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "pageName",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required(),
    }),
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
