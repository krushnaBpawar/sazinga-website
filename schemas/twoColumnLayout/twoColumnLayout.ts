import { defineField, defineType } from "sanity";

export default defineType({
  name: "twocolumnlayout",
  title: "Two Column Layout",
  type: "object",
  fields: [
    defineField({
      name: "layoutBackground",
      title: "Layout Background",
      type: "string",
      options: {
        list: [
          "Green",
          "LightBlue",
          "DarkBlue",
          "Blue",
          "Black",
          "Secondary",
          "White",
          "Transparent",
          "Alt",
        ],
      },
      description: "Background color of the two-column layout.",
    }),
    defineField({
      name: "fieldId",
      title: "Section Id",
      type: "string",
      description: "Unique identifier for the two-column layout.",
    }),
    defineField({
      name: "layoutShadow",
      title: "Layout Shadow",
      type: "boolean",
      initialValue: false,
      description: "Toggle to add a shadow to the two-column layout.",
    }),
    defineField({
      name: "invertPosition",
      title: "Invert Position",
      type: "boolean",
      initialValue: true,
      description: "Toggle to invert the position of the columns.",
    }),
    {
      name: "verticalAlign",
      title: "Vertical Align",
      type: "string",
      options: {
        list: ["top", "center", "bottom"],
      },
      description: "Vertical alignment of the two-column layout.",
    },
    {
      name: "horizontalAlign",
      title: "Horizontal Align",
      description: "Horizontal alignment of the one column layout",
      type: "string",
      options: {
        list: ["left", "center", "right"],
      },
      hidden: ({ parent }: { parent: any }) =>
        parent?.showLeftSection && parent?.showRightSection,
    },
    defineField({
      name: "showLeftSection",
      title: "Show Left Section",
      type: "boolean",
      initialValue: false,
      description: "Toggle to show the left section of the two-column layout.",
    }),
    defineField({
      name: "leftSection",
      title: "Left Section",
      type: "leftSection",
      hidden: ({ parent }: { parent: any }) =>
        parent && !parent.showLeftSection,
      description: "Content for the left section of the two-column layout.",
    }),
    defineField({
      name: "showRightSection",
      title: "Show Right Section",
      type: "boolean",
      description: "Toggle to show the right section of the two-column layout.",
    }),
    {
      name: "rightSection",
      title: "Right Section",
      type: "rightSection",
      hidden: ({ parent }: { parent: any }) =>
        parent && !parent.showRightSection,
      description: "Content for the right section of the two-column layout.",
    },
  ],
});
