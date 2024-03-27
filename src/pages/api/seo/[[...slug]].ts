// ./pages/api/preview.ts

import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { getClient } from "@/lib/getClient";
import { Page } from "@/utility/types/Page";

// export const STUDIO_URL =
//   (process.env.NEXT_PUBLIC_MY_DOMAIN || "http://127.0.0.1:3000") + "/studio";

// export const WEBSITE_URL =
//   process.env.NEXT_PUBLIC_MY_DOMAIN || "http://127.0.0.1:3000";

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const host = req.headers.host;
  // Is the SEO plugin trying to fetch and return HTML?
  // AND is the Studio on a different URL to the website?
  if (req.query.fetch && host) {
    // Allow requests from the Studio's URL
    // res.setHeader("Access-Control-Allow-Origin", STUDIO_URL);
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }

  const slugs = req.query.slug as string[];
  const destination = slugs ? slugs.join("/") : "/";

  if (!destination) {
    return res.status(401).json({ message: "No document id provided" });
  }
  let page: Page | null = null;
  const client = await getClient();
  // Ensure this slug actually exists in the dataset
  if (slugs && slugs[0] == "resource") {
    try {
      const resourceData = await client.fetch(
        groq`*[_type == "resourceItem" && slug.current == $slug]{title,content,slug,coverImage,excerpt,layout,points,downloadContent,openResource,pdfFile,formEmbbed,contentImage,thankYouPage->{_id,formURL,formID},downloadForm->{_id,formURL,formID},category->{name, _id}}[0]`,
        { slug: slugs[1] }
      );

      page = await client.fetch("*[_id == $refId][0]", {
        refId: resourceData?.layout?._ref,
      });
      if (!page) {
        throw new Error("Not found");
      }
      const pageSections = page.sections.map((section: any) => {
        if (section.sectionName == "Resource Items") {
          return { ...section, resourceData };
        } else {
          return section;
        }
      });
      page = { ...page, sections: pageSections };
    } catch (err) {
      return {
        notFound: true,
      };
    }
  } else if (slugs && slugs[0] == "blog") {
    try {
      const blogData = await client.fetch(
        groq`*[_type == "post" && slug.current == $slug]{timetoRead,title,content,slug,coverImage,excerpt,date,layout,category->{name, _id},author->{name,_id,picture}}[0]`,
        { slug: slugs[1] }
      );
      page = await client.fetch("*[_id == $refId][0]", {
        refId: blogData?.layout?._ref,
      });
      if (!page) throw new Error("Not found");

      const pageSections = page.sections.map((section) => {
        if (section.sectionName == "Blog Post") {
          return { ...section, blogData };
        } else {
          return section;
        }
      });
      page = { ...page, sections: pageSections };

      if (page.isBlogRecommendationsNeeded) {
        const index = page.sections.findIndex(
          (section) => section.sectionName == "Blog Post"
        );

        page.sections.splice(index + 1, 0, {
          sectionName: "Blogs Preview",
          _key: "abcd",
          blogsPreview: {
            category: { _ref: blogData?.category?._id },
          },
        });
      }
    } catch (err) {
      return {
        notFound: true,
      };
    }
  } else {
    try {
      page = await client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]`,
        { slug: slugs ? slugs.join("/") : "/" }
      );
      if (!page) throw new Error("Not found");
    } catch (err) {
      return {
        notFound: true,
      };
    }
  }

  if (!page) {
    return res.status(401).json({ message: "Invalid document id" });
  }

  // Initialise preview mode
  res.setDraftMode({ enable: true });
  // Return just the HTML if the SEO plugin is requesting it
  if (req.query.fetch && host) {
    // Create preview URL

    // const absoluteUrl = new URL(destination, STUDIO_URL).toString();

    // Create preview headers from the setPreviewData above
    const previewHeader = res.getHeader("Set-Cookie");
    const previewHeaderString =
      typeof previewHeader === "string" || typeof previewHeader === "number"
        ? previewHeader.toString()
        : previewHeader?.join("; ");
    const headers = new Headers();
    headers.append("credentials", "include");
    headers.append("Cookie", previewHeaderString ?? "");

    // const previewHtml = await fetch(absoluteUrl, { headers })
    //   .then((previewRes) => previewRes.text())
    //   .catch((err) => console.error(err));

    // return res.send(previewHtml);
  }

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  return res.writeHead(307, { Location: destination }).end();
}
