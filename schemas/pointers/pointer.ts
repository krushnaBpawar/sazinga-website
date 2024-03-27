import { defineType } from "sanity";

// schemas/pointer.js
export default defineType({
  name: "pointer",
  title: "Pointer",
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
  ],
});
