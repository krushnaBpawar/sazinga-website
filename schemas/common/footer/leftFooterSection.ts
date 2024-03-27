import { Rule, defineType } from "sanity";

export default defineType({
  name: "leftFooterSection",
  title: "Left Footer Section",
  type: "object",
  description:
    "Represents the left section of the website's footer, often used for contact information.",
  fields: [
    {
      name: "logo",
      title: "🖼️ Logo",
      type: "image",
      description:
        "Upload the logo image that you want to display in the footer. Ideally, it should be in PNG or JPEG format for the best clarity.",
      validation: (Rule: Rule) =>
        Rule.required().error("Logo is a required field."),
    },
    {
      name: "description",
      title: "📝 Description",
      type: "string",
      description:
        "Provide a concise description or message for the footer section. This gives visitors a brief idea about your business or purpose.",
      validation: (Rule: Rule) =>
        Rule.max(200).warning(
          "Description should be shorter than 200 characters for best display."
        ),
    },
    {
      name: "email",
      title: "📧 Email",
      type: "string", // 'email' is not a built-in sanity type. Use 'string' and add custom validation.
      description:
        "Enter the official email address that visitors can use to get in touch. Ensure it's accurate to avoid missed opportunities.",
      validation: (Rule: Rule) =>
        Rule.required().email().error("Please provide a valid email address."),
    },
    // {
    //   name: "phone",
    //   title: "📞 Phone",
    //   type: "string",
    //   description:
    //     "Provide a direct contact number. This makes it easier for visitors or clients to reach out quickly.",
    //   validation: (Rule: Rule) =>
    //     Rule.required()
    //       .regex(/^[+\d][\d\s\-()]*$/)
    //       .error(
    //         "Enter a valid phone number. It can include numbers, spaces, dashes, and parentheses."
    //       ),
    // },
  ],
});
