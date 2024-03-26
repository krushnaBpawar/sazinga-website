// import { buttonSchema } from "@files/schemas/common/buttonSchema";
import { Rule } from "sanity";

const Navbar = {
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
   
    },
     ],
};

export default Navbar;
