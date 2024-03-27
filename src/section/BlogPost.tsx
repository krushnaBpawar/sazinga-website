import Image from "next/image";
import React from "react";

import Button from "@/atoms/Button";
import LineBreak from "@/molecules/LineBreak";
import TextBlock from "@/molecules/TextBlock";
import getURL from "@/utility/getURL";
import { formatDateWithYear } from "@/utility/helperFunction";

import Heading from "./Heading";

export default function BlogPost({ blogData }: { blogData: any }) {
  return (
    <div>
      <section className="outerContainer py-[60px]">
        <div className="flex w-full gap-[24px] bg-primary flex-col lg:flex-row min-h-[300px]">
          <div className={`w-full lg:w-7/12`}>
            <LeftContent blogData={blogData} />
          </div>
          <div className={`w-full lg:w-5/12`}>
            <RightContent
              url={getURL(blogData?.coverImage?.asset?._ref)?.url()}
            />
          </div>
        </div>
      </section>

      <LineBreak
        data={{
          marginBottom: 0,
          marginTop: 0,
          lineColor: "Alt",
        }}
        subComponent={false}
      />
      <div className="w-full lg:w-3/4 mx-auto">
        <TextBlock
          subComponent={false}
          data={{
            content: blogData.content,
            textPosition: "left",
          }}
        />
      </div>
      {blogData?.showCTAButton && (
        <div className="w-full lg:w-3/4 mx-auto">
          <div className="outerContainer">
            <Button
              icon={blogData?.ctaButton.displayIcon && blogData?.ctaButton.icon}
              arrow={blogData?.ctaButton.arrow}
              label={blogData?.ctaButton.label}
              type={blogData?.ctaButton.type}
              link={blogData?.ctaButton.link}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const LeftContent = ({ blogData }: { blogData: any }) => {
  return (
    <div className="flex flex-col gap-4 blog-title">
      <Heading
        subComponent
        data={{
          horizontalAlign: "left",
          verticalAlign: "top",
          preTitle: blogData.category?.name,
          headingType: "h1",
          textPosition: "left",
          description: blogData.excerpt,
          title: blogData.title,
        }}
      />
      <div className="flex gap-4">
        <Image
          width={60}
          height={60}
          alt="hello"
          src={getURL(blogData.author.picture.asset._ref)?.url() ?? ""}
          className="rounded-full object-cover !h-[60px] !w-[60px]"
        />

        <div className="flex flex-col gap-0">
          <h5 className="font-semibold text-p17">{blogData.author.name}</h5>
          <p className="text-p17 font-normal">
            {formatDateWithYear(blogData.date)}
          </p>
        </div>
      </div>
    </div>
  );
};

const RightContent = ({ url }: { url: any }) => {
  if (!url) return <></>;
  return (
    <>
      <Image
        width={300}
        height={300}
        alt="Blog Image"
        src={url}
        className="w-full"
      />
    </>
  );
};
