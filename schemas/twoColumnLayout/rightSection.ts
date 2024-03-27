import { buttonSchema } from "@files/schemas/common/buttonSchema";
import { portableTextSchema } from "@files/schemas/common/portableTextSchema";
import { defineType } from "sanity";

// schemas/pointer.js
export default defineType({
  name: "rightSection",
  title: "Right Section",
  type: "object",
  fields: [
    {
      name: "rightSectionItems",
      title: "Select Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "sectionName",
              title: "Item Name",
              type: "string",
              options: {
                list: [
                  "Form Embbed",
                  "Heading",
                  "Line Break",
                  "Buttons",
                  "Text Block",
                  "Pointers",
                  "Image",
                  "Image Card",
                  "Bullet Points",
                  "Slider"
                ],
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
            {
              name: "formEmbbed",
              title: "Form Embbed",
              type: "reference",
              to: [{ type: "formEmbbed" }],
              hidden: ({ parent }) => parent.sectionName !== "Form Embbed",
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
                },
                {
                  name: "content",
                  title: "Content",
                  type: "array",
                  of: portableTextSchema,
                },
              ],
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Text Block",
            },
            {
              name: "pointerLayout",
              title: "Pointers",
              type: "pointerSection",
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Pointers",
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
                  hidden: ({ parent }: { parent: any }) =>
                    parent && !parent.showprimarybutton,
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
                  hidden: ({ parent }: { parent: any }) =>
                    parent && !parent.showsecondarybutton,
                },
              ],
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Buttons",
            },
            {
              name: "imageCard",
              title: "Image Card",
              type: "array",
              of: [
                {
                  type: "imagecard",
                },
              ],
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Image Card",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Image",
            },
            {
              name: "lineBreak",
              title: "Line Break",
              type: "lineBreak",
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Line Break",
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
                  name: "title",
                  title: "Title",
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
                  name: "description",
                  title: "Description",
                  type: "string",
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
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Heading",
            },
            {
              name: "bulletPoints",
              title: "Bullet Points",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "bulletIcon",
                      title: "Bullet Icon",
                      type: "image",
                    },
                    {
                      name: "bulletText",
                      title: "Bullet Text",
                      type: "string",
                    },
                  ],
                },
              ],
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Bullet Points",
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
          ],
        },
      ],
    },
  ],
});
