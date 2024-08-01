import { defineType } from "sanity";

export default defineType({
  name: "integrateverticalTabComponentLayout",
  title: "Integrate Vertial Tab Component Layout",
  type: "object",
  fields: [
    {
      name: "tabBackground",
      title: "Tab Background",
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
          "Alt"
        ],
      },
    },
    {
      name: "tabComponentItems",
      title: "Tab Component Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
                name: "headingName",
                title: "Heading Name",
                type: "string",
              },
            {
              name: "tabName",
              title: "Tab Name",
              type: "string",
            },
            {
              name: "tabIcon",
              title: "Tab Icon",
              type: "image",
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
            {
              name: "oneColumnSection",
              title: "Section",
              type: "leftSection",
              description: "Content for the section of the one-column layout.",
              validation(rule) {
                return rule.required();
              },
            }
          ],
        },
      ],
    },
  ],
});
