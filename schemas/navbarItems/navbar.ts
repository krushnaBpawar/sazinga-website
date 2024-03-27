import { buttonSchema } from "@files/schemas/common/buttonSchema";
import { Rule } from "sanity";

import { SanitySchema } from "@/utility/types";

const navbar: SanitySchema = {
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    {
      name: "navName",
      title: "Name",
      type: "string",
      description: "The name of the navigation bar, e.g. 'Main Navigation'.",
      validation: (Rule: Rule) =>
        Rule.required()
          .min(3)
          .error("Name should be at least 3 characters long."),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "The logo to be displayed on the navigation bar.",
      validation: (Rule: Rule) =>
        Rule.required().error("A logo image is required."),
    },
    {
      name: "menuOptions",
      title: "Menu Options",
      type: "array",
      description:
        "The list of menu options to be displayed in the navigation bar.",
      of: [{ type: "navbarMenuItems" }],
    },
    {
      name: "primaryButton",
      title: "Primary Button",
      type: "document",
      description:
        "The primary button displayed in the navigation bar. Optional.",
      fields: buttonSchema,
      required: false,
      validation: (Rule: Rule) => Rule.optional(),
    },
    {
      name: "secondaryButton",
      title: "Secondary Button",
      type: "document",
      description:
        "The secondary button displayed in the navigation bar. Optional.",
      fields: buttonSchema,
      required: false,
      validation: (Rule: Rule) => Rule.optional(),
    },
  ],
};

export default navbar;
