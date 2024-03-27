import { defineField, defineType } from "sanity";

function isValidURL(str: string) {
  // Regular expression for a simple URL format (you can adjust it as needed)
  const urlPattern =
    /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})(\/\S*)?$/;
  return urlPattern.test(str);
}

export default defineType({
  name: "teams",
  title: "Teams",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "designation",
              title: "Designation",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              validation: (rule) => rule.required(),
            },
            defineField({
              name: "socialLinks",
              title: "Social Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      description: "eg: Meta, Twitter, etc.",
                      type: "string",
                      validation: (rule) => rule.required(),
                    },
                    {
                      name: "icon",
                      title: "Icon",
                      type: "image",
                      validation: (rule) => rule.required(),
                    },
                    {
                      name: "link",
                      title: "Link",
                      type: "string",
                      validation: (Rule) =>
                        Rule.required().custom((value: string) => {
                          if (!isValidURL(value)) {
                            return "Link must be a valid URL";
                          }
                          return true;
                        }),
                    },
                  ],
                },
              ],
              validation: (rule) =>
                rule.required().max(3).error("Only 3 social links are allowed"),
            }),
          ],
        },
      ],
      validation: (rule) =>
        rule.required().min(1).error("At least 1 team member is required"),
    },
  ],
});
