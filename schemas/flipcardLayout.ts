import { defineType } from "sanity";

export default defineType({
  name: "flipCardLayout",
  title: "Flip Card Layout",
  type: "object",
  description: "A layout that displays flip cards.",
  fields: [
    {
      name: "flipCards",
      title: "Flip Cards",
      type: "array",
      description: "Add flip cards to this layout.",
      of: [{ type: "sectionItems" }],
    },
  ],
});
