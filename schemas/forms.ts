import { portableTextSchema } from "@files/schemas/common/portableTextSchema";
import { defineField, Rule } from "sanity";

export default defineField({
  name: "formEmbbed",
  title: "Form Embbed",
  type: "document",
  fields: [
    {
      name: "formName",
      title: "Form Name",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().error("Please provide a form name."),
    },
    {
      name: "formURL",
      title: "Form Code",
      type: "string",
      description: "Code of the form to embbed.",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "formTitle",
      title: "Form Title",
      type: "array",
      of: portableTextSchema,
    },
  ],
  description: "Section that embbeds a form.",
  hidden: ({ parent }) => parent.openResource,
});
