import { portableTextSchema } from "@files/schemas/common/portableTextSchema";
import { defineType, Rule } from "sanity";

export default defineType({
  name: "sectionItems",
  title: "Section Items",
  type: "object",
  description: "Sections that can be added to a page or layout.",
  fields: [
    {
      name: "sectionName",
      title: "Section Name",
      type: "string",
      description: "Select the desired section type.",
      options: {
        list: [
          "Form Embbed",
          "Hero Video",
          "Line Break",
          "Testimonial Section",
          "Text Block",
          "Heading",
          "Tab Component Layout",
          "Vertial Tab Component Layout",
          "One Column Layout",
          "Two Column Layout",
          "Flip Card Layout",
          "Carousel",
          "NewCarousel",
          "Slider",
          "Hero Image",
          "Full Image",
          "Normal Image",
          "Pointers",
          "Cards",
          "Brand List",
          "Banner",
          "Footer",
          "Team Section",
          "Blogs Preview",
          "All Blogs",
          "Resources",
        ],
      },
      validation: (Rule: Rule) =>
        Rule.required().error("Please select a section type."),
    },
    {
      name: "formEmbbed",
      title: "Form Embbed",
      type: "reference",
      to: [{ type: "formEmbbed" }],
      hidden: ({ parent }) => parent.sectionName !== "Form Embbed",
    },
    {
      name: "heading",
      title: "Heading",
      type: "object",
      fields: [
        {
          name: "preTitle",
          title: "Pre Title",
          type: "string",
        },
        {
          name: "headingType",
          title: "Heading Type",
          type: "string",
          options: {
            list: ["h1", "h2"],
          },
          description: "Select the heading type",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: portableTextSchema,
          description: "Text content for this block.",
        },
        {
          name: "textPosition",
          title: "Text Position",
          type: "string",
          options: {
            list: ["left", "right", "center"],
          },
        },
        {
          name: "verticalAlign",
          title: "Vertical Align",
          type: "string",
          options: {
            list: ["top", "center", "bottom"],
          },
        },
        {
          name: "horizontalAlign",
          title: "Horizontal Align",
          type: "string",
          options: {
            list: ["left", "center", "right"],
          },
        },
      ],
      hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Heading",
    },
    {
      name: "allBlogsSection",
      title: "All Blogs Section",
      type: "allBlogs",
      description: "Section that displays all blogs.",
      hidden: ({ parent }) => parent.sectionName !== "All Blogs",
    },
    {
      name: "allResourceSection",
      title: "All Resource Section",
      type: "allResources",
      description: "Section that displays all resources.",
      hidden: ({ parent }) => parent.sectionName !== "Resources",
    },
    {
      name: "lineBreak",
      title: "Line Break",
      type: "lineBreak",
      description: "Insert a line break in this section.",
      hidden: ({ parent }) => parent.sectionName !== "Line Break",
    },
    {
      name: "blogsPreview",
      title: "Blogs Preview",
      type: "blogspreview",
      description: "A preview or snippet of the blogs.",
      hidden: ({ parent }) => parent.sectionName !== "Blogs Preview",
    },
    {
      name: "carousel",
      title: "Carousel",
      type: "array",
      of: [{ type: "image" }],
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Carousel",
      description: "Images for the carousel.",
    },
    {
      name: "newcarousel",
      title: "NewCarousel",
      type: "pointerSection",
      description: "Key pointers or highlights for this section.",
      hidden: ({ parent }) => parent.sectionName !== "NewCarousel",

    },
    {
      name: "slider",
      title: "Slider",
      type: "array",
      of: [{ type: "image" }],
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Slider",
      description: "Images for the slider.",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        paddingTop: true, // Add your boolean field here
      },
      description: "A prominent image displayed in this section.",
      hidden: ({ parent }) => parent.sectionName !== "Hero Image",
      fields: [
        {
          name: "paddingTop",
          title: "Padding Top",
          type: "boolean",
          description: "Include paddingTop in this image?",
        },
      ],
    },
    {
      name: "fullImage",
      title: "Full Image",
      type: "image",
      options: {
        paddingTop: true, // Add your boolean field here
      },
      description: "A prominent image displayed in this section.",
      hidden: ({ parent }) => parent.sectionName !== "Full Image",
      fields: [
        {
          name: "paddingTop",
          title: "Padding Top",
          type: "boolean",
          description: "Include paddingTop in this image?",
        },
      ],
    },
    {
      name: "heroVideo",
      title: "Hero Video",
      type: "object",
      fields: [
        {
          name: "videoUrlDesktop",
          title: "Desktop Video Url",
          type: "url",
          description: " Video Url for desktop.",
        },
        {
          name: "videoUrlMobile",
          title: "Video Url Mobile & Tablet",
          type: "url",
          description: "Video Url for mobile and tablet.",
        },
      ],

      description: "A prominent image displayed in this section.",
      hidden: ({ parent }) => parent.sectionName !== "Hero Video",
    },
    {
      name: "normalImage",
      title: "Normal Image",
      type: "image",
      description: "A normal image displayed in this section.",
      hidden: ({ parent }) => parent.sectionName !== "Normal Image",
    },
    {
      name: "oneColumnLayout",
      title: "One Column Layout",
      type: "onecolumnlayout",
      description: "A layout with a single column.",
      hidden: ({ parent }) => parent.sectionName !== "One Column Layout",
    },
    {
      name: "twoColumnLayout",
      title: "Two Column Layout",
      type: "twocolumnlayout",
      description: "A layout with two columns.",
      hidden: ({ parent }) => parent.sectionName !== "Two Column Layout",
    },
    {
      name: "pointerLayout",
      title: "Pointer Layout",
      type: "pointerSection",
      description: "Key pointers or highlights for this section.",
      hidden: ({ parent }) => parent.sectionName !== "Pointers",
    },
    {
      name: "cardLayout",
      title: "card Layout",
      type: "cardSection",
      description: "Key pointers or highlights for this section.",
      hidden: ({ parent }) => parent.sectionName !== "Cards",
    },
    {
      name: "brandList",
      title: "Brand List",
      type: "reference",
      to: [{ type: "brandList" }],
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Brand List",
      description: "Reference to a list of brands.",
    },
    {
      name: "textBlock",
      title: "Text Block",
      type: "object",
      fields: [
        {
          name: "textPosition",
          title: "Text Position",
          type: "string",
          options: {
            list: ["left", "right", "center"],
          },
          description: "Position of text within the block.",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: portableTextSchema,
          description: "Text content for this block.",
        },
      ],
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Text Block",
      description: "A block of text with customizable content and position.",
    },
    {
      name: "banner",
      title: "Banner",
      type: "banner",
      description:
        "A banner section, typically used for promotions or highlights.",
      hidden: ({ parent }) => parent.sectionName !== "Banner",
    },
    {
      name: "tabComponentLayout",
      title: "Tab Component Layout",
      type: "tabComponentLayout",
      description:
        "Layout that involves tab components for categorizing content.",
      hidden: ({ parent }) => parent.sectionName !== "Tab Component Layout",
    },
    {
      name: "verticalTabComponentLayout",
      title: "Vertial Tab Component Layout",
      type: "verticalTabComponentLayout",
      description:
        "Layout that involves tab components for categorizing content.",
      hidden: ({ parent }) => parent.sectionName !== "Vertial Tab Component Layout",
    },
    {
      name: "teamSection",
      title: "Team Section",
      type: "teams",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Team Section",
      description: "Configuration for a team section.",
    },
    {
      name: "testimonial",
      title: "Testimonial Section",
      type: "testimonialSection",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Testimonial Section",
      description: "Configuration for a Testimonial Section.",
    },
    {
      name: "flipCardLayout",
      title: "Flip Card Layout",
      type: "flipCardLayout",
      hidden: ({ parent }: { parent: any }) =>
        parent.sectionName !== "Flip Card Layout",
    },
  ],
});
