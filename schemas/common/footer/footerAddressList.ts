import { defineType, Rule } from "sanity";

export default defineType({
  name: "footerAddressList",
  title: "Address List",
  type: "object",
  fields: [
    {
      name: "title",
      title: "📝 Title",
      type: "string",
      description: "The title of this column. Provides a label or heading for the section.",
      validation: (Rule: Rule) => Rule.required().max(100).error("Title is required and should be shorter than 100 characters."),
    },
    {
      name: "addresses",
      title: "📍 Addresses",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "addressDetails",
              title: "Address Details",
              type: "string",
              validation: (Rule: Rule) => Rule.required().max(100).error("This is required and should be shorter than 100 characters."),
            },
          ],
        },
      ],
    },
  ],
});
