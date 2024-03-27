import { buttonSchema } from "@files/schemas/common/buttonSchema";
import { BookIcon } from "@sanity/icons";
import { format, parseISO } from "date-fns";
import { defineField, defineType } from "sanity";

import authorType from "./blogAuthor";
import blogCategory from "./blogCategory";
import blogLayout from "./blogLayout";

export default defineType({
  name: "post",
  title: "Blog Post",
  // @ts-expect-error random TS Error but works fine
  icon: BookIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Image caption",
              description: "Caption displayed below the image.",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    }),
    defineField({
      name: "showCTAButton",
      title: "Show CTA Button",
      type: "boolean",
    }),
    defineField({
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: buttonSchema,
      hidden: ({ parent }) => !parent?.showCTAButton,
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: authorType.name }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: blogCategory.name }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "reference",
      to: [{ type: blogLayout.name }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "timetoRead",
      title: "Time to Read",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      date: "date",
      media: "coverImage",
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), "LLL d, yyyy")}`,
      ].filter(Boolean);

      return { title, media, subtitle: subtitles.join(" ") };
    },
  },
});
