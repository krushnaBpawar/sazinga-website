import { schemaTypes } from "@files/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { media } from "sanity-plugin-media";

import { defaultDocumentNode } from "./defaultDocumentNode";

export default defineConfig({
  name: "default",
  title: "Sazinga",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: "production",

  plugins: [deskTool({ defaultDocumentNode }), media()],
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
});

