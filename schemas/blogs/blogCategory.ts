import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  description: "Categories used to group and classify content.",
  // @ts-expect-error random TS Error but works fine
  icon: TagIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Unique name for the category.",
      validation: (rule) => rule.required().min(2).max(50),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Brief description of what this category represents.",
      validation: (rule) => rule.required().min(5).max(200),
    }),
  ],
});
