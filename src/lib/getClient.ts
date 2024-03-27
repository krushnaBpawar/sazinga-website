import type { SanityClient } from "@sanity/client";
import { createClient } from "@sanity/client";

export function getClient(previewToken?: string): SanityClient {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });

  return previewToken
    ? client.withConfig({
        token: previewToken,
        useCdn: false,
        ignoreBrowserTokenWarning: true,
        perspective: "previewDrafts",
      })
    : client;
}
