import { Rule } from "sanity";

export const buttonSchema = [
  {
    name: "label",
    title: "Button Label",
    type: "string",
    description: "The text that will be displayed on the button.",
    validation: (Rule: Rule) => Rule.optional().min(1).max(50),
  },
  {
    name: "link",
    title: "Button Link",
    type: "url",
    description:
      "Where the button should lead when clicked. Leave empty for buttons without links.",
    validation: (Rule: Rule) =>
      Rule.uri({ allowRelative: true, scheme: ["http", "https"] }).optional(),
    hidden: ({ parent }: { parent: any }) => parent?.linkOrAnchor === "anchor",
  },
  {
    name: "arrow",
    title: "Display Arrow",
    type: "boolean",
    description:
      "Toggle to determine if an arrow should be displayed next to the button label.",
  },
  {
    name: "displayIcon",
    title: "Display Icon",
    type: "boolean",
    description:
      "Toggle to determine if an arrow should be displayed next to the button label.",
  },
  {
    name: "icon",
    title: "Button Icon",
    type: "image",
    description: "The icon that will be displayed on the button.",
    hidden: ({ parent }: { parent: any }) => parent?.displayIcon === false,
  },
  {
    name: "type",
    title: "Button Type",
    type: "string",
    description: "The visual style of the button.",
    options: {
      list: ["solid", "text"], // Define your button types here
      layout: "radio", // Display as radio buttons for better clarity
    },
    validation: (Rule: Rule) => Rule.optional().valid(["solid", "text"]),
  },
  {
    name: "color",
    title: "Button Color",
    type: "string",
    description: "The color theme of the button.",
    options: {
      list: ["primary", "secondary", "alt"], // Define your button colors here
      layout: "dropdown", // Display as a dropdown for compactness
    },
    hidden: ({ parent }: { parent: any }) => parent?.type === "text",
    validation: (Rule: Rule) =>
      Rule.optional().valid(["primary", "secondary", "alt", "transparent"]),
  },
];
