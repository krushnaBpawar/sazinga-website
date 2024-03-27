import { defineType,Rule } from "sanity";

// Custom Validation Helper Functions
const isShowDialogOn = (context: any) => context.parent?.showdialog === true;
const isShowDialogOff = (context: any) => context.parent?.showdialog === false;

const requiredWhenShowDialogOn = (Rule: Rule) =>
  Rule.custom((fieldValue, context) => {
    if (isShowDialogOn(context) && !fieldValue) {
      return 'Field is required when "Show Dialog" is turned on.';
    }
    return true;
  });

export default defineType({
  name: "navbarMenuItems",
  title: "Navbar Menu Items",
  type: "object",
  initialValue: {
    showdialog: false,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "The title to be displayed in the navbar. This field is mandatory.",
    },
    {
      name: "showdialog",
      title: "Show Dialog",
      type: "boolean",
      initialValue: false,
      description:
        "Toggle to determine if the dialog should be shown or hidden. Defaults to hidden.",
    },
    {
      name: "dialogBoxItems",
      title: "Dialog Box Items",
      description: "List of items to be shown when the dialog box is active.",
      type: "object",
      fields: [
        {
          name: "dialogType",
          title: "Dialog Type",
          type: "string",
          validation: (Rule) => Rule.required(),
          options: {
            list: ["With Image", "Without Image"],
          },
          description: "Choose the visual format of the dialog.",
        },
        {
          name: "imageLayout",
          title: "Image Layout",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              description: "Image to be shown in the dialog box.",
            },
            {
              name: "heading",
              title: "Heading",
              type: "string",
              validation: requiredWhenShowDialogOn,
              description: "The main heading for the dialog box content.",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
              validation: requiredWhenShowDialogOn,
              description:
                "Description or details pertaining to the dialog's content.",
            },
          ],
          hidden: ({ parent }) => parent?.dialogType !== "With Image",
        },
        {
          name: "dialogMenu",
          title: "Dialog Box Menu Items",
          description: "The menu items to be displayed within the dialog box.",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                  description: "Title of the menu item within the dialog box.",
                },
                {
                  name: "link",
                  title: "Link",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                  description: "Link associated with this menu item.",
                },
              ],
            },
          ],
          validation: (Rule) =>
            Rule.custom((fieldValue, context) => {
              if (
                isShowDialogOn(context) &&
                (!Array.isArray(fieldValue) || fieldValue.length === 0)
              ) {
                return 'Add at least one menu item for "Show Dialog".';
              }
              return true;
            }),
        },
      ],
      hidden: ({ parent }) => !parent?.showdialog,
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule) =>
        Rule.custom((fieldValue, context) => {
          if (isShowDialogOff(context) && !fieldValue) {
            return 'A link is mandatory when "Show Dialog" is deactivated.';
          }
          return true;
        }),
      description:
        "Main link associated with this navbar item. Essential if the dialog is turned off.",
    },
  ],
});
