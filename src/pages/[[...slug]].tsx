/* eslint-disable @next/next/no-html-link-for-pages */
import type { SanityDocument } from "@sanity/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { groq } from "next-sanity";

import Loader from "@/atoms/Loader";
import SEO from "@/atoms/SEO";
import PreviewProvider from "@/lib/PreviewProvider";
import Footer from "@/section/Footer";
import Navbar from "@/section/Navbar";
import { section } from "@/utility/constants";
import { Page } from "@/utility/types/Page";
import GetPage from "@/wrappers/GetPage";

import { getClient } from "../lib/getClient";
// import AmpPage from "@/atoms/AmpPage";

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient(); // Assuming getClient is properly imported and configured

  // Fetch pages where isProductPage is true
  const blogPaths = await client.fetch(
    groq`*[_type == "post"]{
      "slug": slug.current
    }`
  );

  const resourcePaths = await client.fetch(
    groq`*[_type == "resourceItem"]{
      "slug": slug.current
    }`
  );

  // Map over productPaths and prepend "product/" to the slug
  const finalBlogPaths = blogPaths.map((item: any) => {
    return { params: { slug: [`blog/${item.slug}`] } };
  });

  const finalResourcePaths = resourcePaths.map((item: any) => {
    return { params: { slug: [`resource/${item.slug}`] } };
  });
  // Fetch pages where isProductPage is false
  const nonProductPaths = await client.fetch(
    groq`*[_type == "page"]{
      "slug": slug.current
    }`
  );

  // Map over nonProductPaths
  const finalNonProductPaths = nonProductPaths.map((item: any) => {
    return { params: { slug: [item.slug] } };
  });

  // Concatenate the two arrays of paths
  const finalPaths = [
    ...finalBlogPaths,
    ...finalNonProductPaths,
    ...finalResourcePaths,
  ];

  return { paths: finalPaths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = context.draftMode || false;
  const previewToken = preview ? process.env.SANITY_READ_TOKEN : ``;
  const client = getClient(previewToken);

  const slugs = context?.params?.slug as string[];

  // If this is coming from api we just splice the api part of the slugs
  if (context?.params?.slug) {
    if (context?.params?.slug[0] == "api") slugs?.splice(0, 2);
  }

  // Fetches sanity data based on slug
  let page: Page | null = null;

  // Do resource things here
  if (slugs && slugs[0] == "resource") {
    try {
      const resourceData = await client.fetch(
        groq`*[_type == "resourceItem" && slug.current == $slug]{title,content,slug,coverImage,description,layout,points,downloadContent,openResource,formSubmitMessage,pdfFile,formEmbbed,contentImage,thankYouForm->{formURL,formTitle},downloadForm->{formURL,formTitle},category->{name, _id}}[0]`,
        { slug: slugs[1] }
      );

      page = await client.fetch("*[_id == $refId][0]", {
        refId: resourceData?.layout?._ref,
      });
      if (!page) {
        throw new Error("Not found");
      }
      const pageSections = page.sections.map((section) => {
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
        groq`*[_type == "post" && slug.current == $slug]{timetoRead,title,content,slug,showCTAButton,ctaButton,coverImage,excerpt,date,layout,category->{name, _id},author->{name,_id,picture}}[0]`,
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

  // Need to add check if page is null redirect to 404 page

  const navbarData = await client.fetch("*[_id == $refId][0]", {
    refId: page?.navbar?._ref,
  });

  const footerData = await client.fetch("*[_id == $refId][0]", {
    refId: page?.footerSection?._ref,
  });

  const metaData = {
    title:
      page.pageName ||
      page.sections.find((el) => el.sectionName == section.blogPost)?.blogData
        ?.title ||
      page.sections.find((el) => el.sectionName == section.resourceItem)
        ?.resourceData?.title ||
      "Sazinga",
    description:
      page.pageDescription ||
      page.sections.find((el) => el.sectionName == section.blogPost)?.blogData
        ?.excerpt ||
      page.sections.find((el) => el.sectionName == section.resourceItem)
        ?.resourceData?.excerpt ||
      "",
    // url:"https://optimus.tech/" + (slugs ? slugs.join("/") : "") || process.env.NEXT_PUBLIC_MY_DOMAIN || "https://localhost:3000",
    slug: slugs ? "/" + slugs.join("/") : "/",
  };
  return {
    props: {
      preview,
      previewToken,
      page,
      navbarData,
      footerData,
      metaData,
    },
    revalidate: 10,
  };
};

export default function Page({
  page,
  preview,
  previewToken,
  navbarData,
  footerData,
  metaData,
}: {
  page: Page;
  footerData: SanityDocument;
  navbarData: SanityDocument;
  preview: boolean;
  previewToken?: string;
  categories?: string[] | null;
  metaData: any;
}) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <SEO
          title={metaData?.title || "Optimus"}
          description={metaData?.description || "Optimus"}
          slug={metaData?.slug}
        />
        <Loader />
        {/* <AmpPage /> */}
      </>
    );
  }
  if (preview && previewToken) {
    return (
      <PreviewProvider previewToken={previewToken}>
        <SEO
          title={metaData.title}
          description={metaData.description}
          url={metaData.url}
          slug={metaData.slug}
        />
        <p className="text-center w-screen bg-red-600 text-p15">
          This is preview mode.{"   "}
          <a
            href="/api/exit-preview"
            className="pl-3 !text-white font-semibold underline"
          >
            Exit preview
          </a>
        </p>
        {navbarData && <Navbar data={navbarData} />}
        {page && <GetPage data={page?.sections} />}
        {footerData && <Footer data={footerData} />}
      </PreviewProvider>
    );
  }

  return (
    <>
      <SEO
        title={metaData.title}
        description={metaData.description}
        url={metaData.url}
        slug={metaData.slug}
      />
      {navbarData && <Navbar data={navbarData} />}
      {page && <GetPage data={page?.sections} />}
      {footerData && <Footer data={footerData} />}
    </>
  );
}
