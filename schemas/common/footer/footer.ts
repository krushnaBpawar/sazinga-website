import MdSettings from "react-icons/md";
import { defineType, Rule } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  // @ts-expect-error random TS Error but works fine
  icon: MdSettings,
  description: "Represents the website's footer containing primary and secondary sections.",
  fields: [
    {
      name: "footerTitle",
      title: "Footer Title",
      type: "string",
      description: "A title or name for the footer, if applicable.",
      validation: (Rule: Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "showPrimaryFooter",
      title: "Show Primary Footer",
      type: "boolean",
    },
    {
      name: "showSecondaryFooter",
      title: "Show Secondary Footer",
      type: "boolean",
    },
    {
      name: "primaryFooter",
      title: "Primary Footer",
      type: "object",
      description: "The main sections of the footer.",
      fields: [
        {
          name: "leftSection",
          title: "Left Section",
          type: "leftFooterSection",
          description: "The left section of the footer, often used for contact information.",
        },
        {
          name: "rightSection",
          title: "Right Section",
          type: "rightFooterSection",
          description: "The right section of the footer, typically containing links and content.",
        },
        {
          name: "addressList",
          title: "Address List",
          type: "footerAddressList",
          description: "List of addresses for the offices. Min. 1 address is required",
        },
      ],
      hidden: ({ parent }: { parent: any }) => parent?.showPrimaryFooter === false,
    },
    {
      name: "secondaryFooter",
      title: "Secondary Footer",
      type: "object",
      description: "Secondary components like copyrights, links, and social media icons.",
      fields: [
        {
          name: "copyright",
          title: "Copyright Text",
          type: "string",
          description: "The copyright text to display in the footer.",
          validation: (Rule: Rule) => Rule.required().min(2).max(200),
        },
        {
          name: "links",
          title: "Menu Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  description: "The title of a menu link.",
                  validation: (Rule: Rule) => Rule.required().min(2).max(50),
                },
                {
                  name: "link",
                  title: "Link",
                  type: "url",
                  description: "The URL link associated with the menu link.",
                  validation: (Rule: Rule) => Rule.required().uri({ allowRelative: true }),
                },
              ],
            },
          ],
        },
        {
          name: "socialLinks",
          title: "Social Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  description: "The name of the social media platform.",
                  validation: (Rule: Rule) => Rule.required().min(2).max(50),
                },
                {
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  description: "The icon for the social media platform.",
                  validation: (Rule: Rule) => Rule.required(),
                },
                {
                  name: "link",
                  title: "Link",
                  type: "url",
                  description: "The link to the social media platform.",
                  validation: (Rule: Rule) => Rule.required().uri({ scheme: ["http", "https"] }),
                },
              ],
            },
          ],
        },
      ],
      hidden: ({ parent }: { parent: any }) => parent?.showSecondaryFooter === false,
    },
  ],
});
