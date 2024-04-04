import { defineType } from "sanity";
import { buttonSchema } from "../common/buttonSchema";

// schemas/pointer.js
export default defineType({
  name: "card",
  title: "card",
  type: "object",
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "position",
      title: "Icon Position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Top", value: "top" },
        ],
        layout: "radio",
      },
    },
    {
      name: "button",
      title: "Buttons",
      type: "object",
      fields: [
        {
          name: "buttonLayout",
          title: "Button Layout",
          type: "string",
          options: {
            list: ["row", "column"],
          },
        },
        {
          name: "showprimarybutton",
          title: "Show Primary Button",
          type: "boolean",
          description: "Toggle to show primary button",
        },
        {
          name: "primaryButton",
          title: "Primary Button",
          type: "document",
          fields: buttonSchema,
        //   hidden: ({ parent }: { parent: any }) =>
        //     parent && !parent.showprimarybutton,
        },
        {
          name: "showsecondarybutton",
          title: "Show Secondary Button",
          type: "boolean",
          description: "Toggle to show secondary button",
        },
        {
          name: "secondaryButton",
          title: "Secondary Button",
          type: "document",
          fields: buttonSchema,
        //   hidden: ({ parent }: { parent: any }) =>
        //     parent && !parent.showsecondarybutton,
        },
      ],
    //   hidden: ({ parent }: { parent: any }) =>
    //     parent.sectionName !== "Buttons",
    },
  ],
});

