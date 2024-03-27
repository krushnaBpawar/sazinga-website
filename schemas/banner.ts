import { portableTextSchema } from "@files/schemas/common/portableTextSchema";

import { SanitySchema } from "@/utility/types";

// schemas/pointer.js
const banner: SanitySchema = {
  name: "banner",
  title: "Banner",
  type: "object",
  fields: [
    {
      name: "bannerMargin",
      title: "Banner Margin",
      type: "boolean",
    },
    {
      name: "bannerBackground",
      title: "Banner Background",
      type: "string",
      options: {
        list: ["Green", "LightBlue", "DarkBlue", "Blue", "Black", "Secondary", "White", "Transparent", "Alt"],
      },
    },
    {
      name: "bannerItems",
      title: "Select Banner Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "sectionName",
              title: "Banner Item",
              type: "string",
              options: {
                list: [
                  "Heading",
                  "Text Block",
                  "One Column Layout",
                  "Two Column Layout",
                  "Tab Component Layout",
                  "Flip Card Layout",
                  "Caraousel",
                  "Hero Image",
                  "Pointers",
                  "Product Cards",
                  "Brand List",
                  "Image Card",
                  "Line Break",
                  "Testimonial Section",
                  "Form Embbed",
                ],
              },
            },
            {
              name: "caraousel",
              title: "Caraousel",
              type: "array",
              of: [
                {
                  type: "image",
                },
              ],
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Caraousel",
            },
            {
              name: "heroImage",
              title: "Hero Image",
              type: "image",
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Hero Image",
            },
            {
              name: "oneColumnLayout",
              title: "One Column Layout",
              type: "onecolumnlayout",
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "One Column Layout",
            },
            {
              name: "twoColumnLayout",
              title: "Two Column Layout",
              type: "twocolumnlayout",
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Two Column Layout",
            },
            {
              name: "tabComponentLayout",
              title: "Tab Component Layout",
              type: "tabComponentLayout",
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Tab Component Layout",
            },
            {
              name: "pointerLayout",
              title: "Pointers",
              type: "pointerSection",
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Pointers",
            },
            {
              name: "productCardLayout",
              title: "Product Cards",
              type: "productCardsSection",
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Product Cards",
            },
            {
              name: "brandMention",
              title: "Brand List",
              type: "brandList",
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Brand List",
            },
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
                },
                {
                  name: "content",
                  title: "Content",
                  type: "array",
                  of: portableTextSchema,
                },
              ],
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Text Block",
            },
            {
              name: "imageCard",
              title: "Image Card",
              type: "object",
              fields: [
                {
                  name: "layout",
                  title: "Layout",
                  type: "string",
                  options: {
                    list: ["row", "column"],
                  },
                },
                {
                  name: "thumbnail",
                  title: "Image",
                  type: "array",
                  of: [
                    {
                      type: "imagecard",
                    },
                  ],
                },
              ],
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Image Card",
            },
            {
              name: "lineBreak",
              title: "Line Break",
              type: "lineBreak",
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Line Break",
            },
            {
              name: "heading",
              title: "Heading",
              type: "object",
              fields: [
                {
                  name: "preTitle",
                  title: "Pre Title",
                  type: "string",
                },
                {
                  name: "headingType",
                  title: "Heading Type",
                  type: "string",
                  options: {
                    list: ["h1", "h2"],
                  },
                  description: "Select the heading type",
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                },
                {
                  name: "textPosition",
                  title: "Text Position",
                  type: "string",
                  options: {
                    list: ["left", "right", "center"],
                  },
                },
                {
                  name: "verticalAlign",
                  title: "Vertical Align",
                  type: "string",
                  options: {
                    list: ["top", "center", "bottom"],
                  },
                },
                {
                  name: "horizontalAlign",
                  title: "Horizontal Align",
                  type: "string",
                  options: {
                    list: ["left", "center", "right"],
                  },
                },
              ],
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Heading",
            },
            {
              name: "testimonial",
              title: "Testimonial Section",
              type: "testimonialSection",
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Testimonial Section",
              description: "Configuration for a Testimonial Section.",
            },
            {
              name: "flipCardLayout",
              title: "Flip Card Layout",
              type: "flipCardLayout",
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Flip Card Layout",
            },
            {
              name: "formEmbbed",
              title: "Form Embbed",
              type: "reference",
              to: [{ type: "formEmbbed" }],
              hidden: ({ parent }: { parent: any }) => parent.sectionName !== "Form Embbed",
            },
          ],
        },
      ],
    },
  ],
};

export default banner;
