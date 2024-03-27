import { defineType, Rule } from "sanity";

export default defineType({
  name: "rightFooterSection",
  title: "👉 Right Footer Section",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "title",
          title: "📝 Title",
          type: "string",
          description:
            "The title of the footer section. Provides a label or heading for the section.",
          validation: (Rule: Rule) =>
            Rule.required()
              .max(100)
              .error(
                "Title is required and should be shorter than 100 characters."
              ),
        },
        {
          name: "sectionItems",
          title: "🔗 Section Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "📝 Title",
                  type: "string",
                  description:
                    "The title of an individual item within the section.",
                  validation: (Rule: Rule) =>
                    Rule.required()
                      .max(50)
                      .error(
                        "Title is required and should be shorter than 50 characters."
                      ),
                },
                {
                  name: "link",
                  title: "🌐 Link",
                  type: "string", // Use 'url' type to ensure valid URLs are provided.
                  description: "The URL link associated with the item.",
                  validation: (Rule: Rule) => Rule.required(),
                },
              ],
            },
          ],
          description:
            "A list of items within the footer section. Each item may have a title and a link.",
        },
      ],
      description:
        "Represents a section in the website's footer, typically found on the right side. It can contain multiple subsections.",
    },
  ],
});
