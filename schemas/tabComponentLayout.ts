import { defineType } from "sanity";

export default defineType({
  name: "tabComponentLayout",
  title: "Tab Component Layout",
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
              name: "leftSection",
              title: "Left Section",
              type: "leftSection",
              description:
                "Content for the left section of the tab-component layout.",
            },
            {
              name: "rightSection",
              title: "Right Section",
              type: "rightSection",

              description:
                "Content for the right section of the tab-component layout.",
            },
          ],
        },
      ],
    },
  ],
});
