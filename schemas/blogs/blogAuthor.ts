import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  description: "This represents the authors of blog posts or articles.",
  // @ts-expect-error random TS Error but works fine
  icon: UserIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Full name of the author.",
      validation: (rule) => rule.required().min(3).max(100),
    }),
    defineField({
      name: "picture",
      title: "Picture",
      description: "Profile picture of the author.",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description:
            "Describe the image for SEO and accessibility. Typically, this might describe the author's appearance or setting.",
          validation: (rule) => rule.required().max(200),
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});
