import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "@/lib/getClient";
const builder = imageUrlBuilder({projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'j8u3nucp',
  dataset: "production",});
function getURL(source: string | undefined) {
  if (!source) return undefined;
  return builder.image(source);
}
export default getURL;