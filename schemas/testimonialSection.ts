import { portableTextSchema } from "@files/schemas/common/portableTextSchema";
import { defineArrayMember, defineField, Rule } from "sanity";

import { SanitySchema } from "@/utility/types";

// schemas/pointer.js
const testimonialSection: SanitySchema = {
  name: "testimonialSection",
  title: "Testimonial Section",
  type: "object",
  fields: [
    defineField({
      name: "testimonialBackground",
      title: "Background",
      type: "string",
      options: {
        list: [
          "Green",
          "LightBlue",
          "DarkBlue",
          "Blue",
          "Black",
          "Secondary",
          "Transparent",
          "Alt",
        ],
      },
      description: "Select the background color for the testimonial section.",
      validation: (Rule) =>
        Rule.required().error("Please select a background color."),
    }),
    {
      name: "testimonialItems",
      title: "Select Testimonial Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "sectionName",
              title: "Testimonial Item",
              type: "string",
              options: {
                list: [
                  "Text Block",
                  "Featured Source",
                  "Testimonial Cards",
                  "Brand List",
                ],
              },
              description: "Choose the type of testimonial item to add.",
              validation: (Rule: Rule) =>
                Rule.required().error("Please select a testimonial item."),
            },
            /**
             * Text Block
             */
            {
              name: "textBlock",
              title: "Text Block",
              type: "object",
              fields: [
                {
                  name: "textPosition",
                  title: "Text Position",
                  type: "string",
                  options: {
                    list: ["left", "right", "center"],
                  },
                  description:
                    "Select the position of the text block within the section.",
                  validation: (Rule: Rule) =>
                    Rule.required().error("Please select a text position."),
                },
                {
                  name: "content",
                  title: "Content",
                  type: "array",
                  of: portableTextSchema,
                  description: "Enter the text content for the text block.",
                },
              ],
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Text Block",
            },
            {
              name: "videoEmbed",
              title: "Featured Source",
              type: "object",
              fields: [
                {
                  name: "isImageLeft",
                  title: "Reverse Column",
                  type: "boolean",
                  description:
                    "Check this box to reverse the column order of the featured source section.",
                },
                {
                  name: "testimonialSideImage",
                  title: "Testimonial Image",
                  type: "image",
                  description:
                    "Upload an image to display on right side of quoted text",
                  validation: (Rule: Rule) =>
                    Rule.required().error("Please upload an image"),
                },
                {
                  name: "textContent",
                  title: "Text Content for Testimonial",
                  type: "object",
                  fields: [
                    {
                      name: "testimonialName",
                      title: "Testimonial Name",
                      type: "string",
                      description: "Enter the name of the testimonial source.",
                    },
                    {
                      name: "testimonialImage",
                      title: "Source Image",
                      type: "image",
                      description: "Upload an image of the testimonial source.",
                    },
                    {
                      name: "testimonialDesignation",
                      title: "Testimonial Designation",
                      type: "string",
                      description:
                        "Enter the designation of the testimonial source.",
                    },
                    {
                      name: "testimonialContent",
                      title: "Testimonial Content",
                      type: "array",
                      of: portableTextSchema,
                      description:
                        "Enter the text content for the testimonial source.",
                    },
                  ],
                  validation: (Rule: Rule) =>
                    Rule.required().error("Please enter text content"),
                },
              ],
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Featured Source",
            },
            {
              name: "testimonialCards",
              title: "Testimonial Cards",
              type: "object",
              fields: [
                {
                  name: "showAllCards",
                  title: "Show All Cards",
                  type: "boolean",
                  description:
                    "Check this box to show all testimonial cards at once.",
                  validation: (Rule: Rule) =>
                    Rule.required().error("Please toggle this option on/off"),
                },
                {
                  name: "testimonialCards",
                  title: "Testimonial Cards",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        {
                          name: "stars",
                          title: "Stars",
                          type: "number",
                          options: {
                            min: 1, // Minimum value (1 star)
                            max: 5, // Maximum value (5 stars)
                          },
                          description:
                            "Rate the testimonial with a number of stars.",
                          validation: (Rule: Rule) =>
                            Rule.required().error(
                              "Please rate the testimonial with a number of stars."
                            ),
                        },
                        {
                          name: "testimonialImage",
                          title: "Testimonial Image",
                          type: "image",
                          description:
                            "Upload an image of the testimonial source.",
                          validation: (Rule: Rule) =>
                            Rule.required().error("Please upload an image"),
                        },
                        {
                          name: "testimonialName",
                          title: "Testimonial Name",
                          type: "string",
                          description:
                            "Enter the name of the testimonial source.",
                          validation: (Rule: Rule) =>
                            Rule.required().error(
                              "Please enter the name of the testimonial source."
                            ),
                        },
                        {
                          name: "testimonialDesignation",
                          title: "Testimonial Designation",
                          type: "string",
                          description:
                            "Enter the designation of the testimonial source.",
                          validation: (Rule: Rule) =>
                            Rule.required().error(
                              "Please enter the designation of the testimonial source."
                            ),
                        },
                        {
                          name: "testimonialContent",
                          title: "Testimonial Content",
                          type: "array",
                          of: portableTextSchema,
                          description:
                            "Enter the text content for the testimonial source.",
                          validation: (Rule: Rule) =>
                            Rule.required().error(
                              "Please enter the text content for the testimonial source."
                            ),
                        },
                      ],
                    },
                  ],
                },
              ],
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Testimonial Cards",
            },
            {
              name: "brandMention",
              title: "Brand List",
              type: "brandList",
              hidden: ({ parent }: { parent: any }) =>
                parent.sectionName !== "Brand List",
            },
          ],
        }),
      ],
      validation: (Rule: Rule) => Rule.required().min(1),
    },
  ],
};

export default testimonialSection;
