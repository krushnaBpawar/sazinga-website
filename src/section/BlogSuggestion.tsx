import React, { useEffect, useState } from "react";

import { getClient } from "@/lib/getClient";
import { BlogCard } from "@/molecules/BlogCard";
import ButtonLayout, { ButtonLayoutProps } from "@/molecules/ButtonLayout";
import getURL from "@/utility/getURL";

type BlogSuggestionProps = {
  preTitle?: string;
  title?: string;
  excerpt?: string;
  buttonSectionData?: ButtonLayoutProps;
  categoryRef?: string;
};

export default function BlogSuggestion({
  preTitle,
  title,
  excerpt,
  buttonSectionData,
  categoryRef,
}: BlogSuggestionProps) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const client = getClient();
      const data = await client.fetch(
        `*[_type == "post" && category._ref == $categoryRef][0..2]{timetoRead,title,slug,coverImage,excerpt,date,category->{name}}`,
        {
          categoryRef,
        }
      );

      const refactoredBlogs = data?.map((blog: any) => {
        return {
          timeToRead: blog.timetoRead,
          title: blog.title,
          link: "/blog/" + blog.slug.current,
          excerpt: blog.excerpt,
          imageUrl: getURL(blog?.coverImage?.asset?._ref)?.url(),
          category: blog.category.name,
          date: blog.date,
        };
      });

      setBlogs(refactoredBlogs);
    })();
  }, []);

  if (!categoryRef) return;

  return (
    <section className="outerContainer py-[45px]">
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <div className={`flex flex-col items-left text-left gap-[10px]`}>
          <h5 className="text-p15 font-medium">{preTitle}</h5>
          {title && <h2 className="mb-0">{title}</h2>}
          {excerpt && (
            <p className="font-normal text-p17 text-[#2D2F31]">{excerpt}</p>
          )}
        </div>
        <div className="">
          {buttonSectionData?.data?.button && (
            <ButtonLayout
              data={{
                button: buttonSectionData.data?.button,
                horizontalAlign: "right",
              }}
            />
          )}
        </div>
      </div>

      <div className="flex justify-between gap-y-6 mt-12 flex-wrap items-start">
        {blogs?.map((blogData: any) => (
          <BlogCard
            key={blogData.link}
            link={blogData.link}
            imageUrl={blogData.imageUrl}
            title={blogData.title}
            excerpt={blogData.excerpt}
            category={blogData?.category}
            timeToRead={blogData.timeToRead}
            date={blogData.date}
          />
        ))}
      </div>
    </section>
  );
}
