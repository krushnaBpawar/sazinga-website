import { portableTextSchema } from "@files/schemas/common/portableTextSchema";
import resourceCategory from "@files/schemas/resources/resourceCategory";
import resourceLayout from "@files/schemas/resources/resourceLayout";
import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "resourceItem",
  title: "Resource Items",
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
      name: "pdfFile",
      type: "file",
      title: "PDF File",
      description: "Upload your PDF file here.",
      options: {
        accept: ".pdf", // Specify the file format allowed (PDF in this case)
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: resourceCategory.name }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "Resource Description",
      type: "array",
      of: portableTextSchema,
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "reference",
      to: [{ type: resourceLayout.name }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: portableTextSchema,
    }),
    defineField({
      name: "contentImage",
      title: "Content Image",
      type: "image",
    }),
    defineField({
      name: "openResource",
      title: "Open Resource",
      type: "boolean",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "downloadForm",
      title: "Download Form",
      description: "Reference to the form to be embedded for download.",
      type: "reference",
      to: [{ type: "formEmbbed" }], // Reference to the formEmbbed type
      hidden: ({ parent }) => parent?.openResource,
    }),
    defineField({
      name: "thankYouForm",
      title: "Thank You Form",
      description:
        "Reference to the form to be embedded for thanks contact section.",
      type: "reference",
      to: [{ type: "formEmbbed" }], // Reference to the formEmbbed type
      hidden: ({ parent }) => parent?.openResource,
    }),
    defineField({
      name: "formSubmitMessage",
      title: "Form Submission Message",
      type: "string",
      hidden: ({ parent }) => parent?.openResource,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
    prepare({ title, media }) {
      return { title, media };
    },
  },
});
