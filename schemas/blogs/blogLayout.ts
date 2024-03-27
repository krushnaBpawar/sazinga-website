import { DashboardIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "blogLayout",
  title: "Blog Layout",
  // @ts-expect-error random TS Error but works fine
  icon: DashboardIcon,
  type: "document",
  fields: [
    defineField({
      name: "layoutName",
      title: "Layout Name",
      description: "Specify the name for this blog layout.",
      type: "string",
      validation: (Rule) => Rule.required().error("Layout name is mandatory."),
    }),

    defineField({
      name: "navbar",
      title: "Navbar",
      description: "Choose the navbar to be used for this blog layout.",
      type: "reference",
      to: [{ type: "navbar" }],
      validation: (Rule) => Rule.required().error("Please select a navbar."),
    }),

    defineField({
      name: "footerSection",
      title: "Footer",
      description: "Choose the footer section for this blog layout.",
      type: "reference",
      to: [{ type: "footer" }],
      validation: (Rule) =>
        Rule.required().error("Please select a footer section."),
    }),

    defineField({
      name: "isBlogRecommendationsNeeded",
      title: "Show Blog Recommendations?",
      description:
        "Indicate if recommendations should appear at the end of the blog post.",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required().error("This field is mandatory."),
    }),

    defineField({
      name: "sections",
      title: "Sections",
      description: "Define the sections to be included in the blog layout.",
      type: "array",
      of: [defineArrayMember({ type: "blogLayoutItems" })],
      validation: (Rule) =>
        Rule.required().min(1).error("At least one section is required."),
    }),
  ],
});
