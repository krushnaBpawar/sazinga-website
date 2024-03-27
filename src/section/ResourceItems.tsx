import { PortableText } from "@portabletext/react";
import InnerHTML from "dangerously-set-html-content";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsArrowDown } from "react-icons/bs";

import ImageLayout from "@/molecules/ImageLayout";
import LineBreak from "@/molecules/LineBreak";
import TextBlock from "@/molecules/TextBlock";
import getURL from "@/utility/getURL";
import { getUrlFromId } from "@/utility/getUrlFromId";

import Heading from "./Heading";

export default function ResourceItems({ resourceData }: { resourceData: any }) {
  // const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const downloadSubmitButton = document.getElementById("formsubmit");
  //   if (downloadSubmitButton) {
  //     downloadSubmitButton.addEventListener("click", () => {
  //       setSubmitSuccess(true);
  //     });
  //   }
  //   return () => {
  //     if (downloadSubmitButton) {
  //       downloadSubmitButton.removeEventListener("click", () => {});
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   const form = document.getElementsByTagName("form")[0];
  // }, []);

  useEffect(() => {
    const currentURL = window.location.href;
    const updatedURL = `${currentURL}?success=true`;
    const returnURLInput = document.querySelector(
      'input[name="returnURL"]'
    ) as HTMLInputElement;
    if (returnURLInput) {
      returnURLInput.setAttribute("value", updatedURL);
    }
  }, []);

  useEffect(() => {
    if (router.query.success) {
      window.scrollTo(0, 0);
      const getPageDiv = document.getElementById("getPage") as HTMLDivElement;
      if (getPageDiv) {
        const sections = getPageDiv.querySelectorAll("#getPage > section");
        for (let i = 3; i < sections.length; i++) {
          sections[i].setAttribute("style", "display:none");
        }
      }
    }
  }, [router.query.success]);

  return (
    <>
      <section
        className={
          "outerContainer " +
          (resourceData.openResource ? "md:pt-[60px]" : "md:py-[60px]")
        }
      >
        <div className="flex w-full gap-[24px] bg-primary flex-col lg:flex-row min-h-[400px]">
          <div className={`w-full lg:w-6/12`}>
            <LeftContent
              downLoadFormData={{
                formID: resourceData.downloadForm?.formID,
                formURL: resourceData.downloadForm?.formURL,
                formTitle: resourceData.downloadForm?.formTitle,
              }}
              submitSuccess={router.query.success === "true"}
              resourceData={resourceData}
            />
          </div>

          <div className={`w-full lg:w-6/12`}>
            <RightContent
              url={getURL(resourceData.coverImage.asset._ref)?.url()}
              resourceData={resourceData}
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
      {!resourceData.openResource && router.query.success === "true" && (
        <>
          <section className="w-fit mx-auto my-10">
            <ZohoForm
              title={resourceData.thankYouForm?.formTitle}
              html={resourceData.thankYouForm?.formURL}
            />
          </section>
        </>
      )}

      <section
        style={{
          justifyContent:
            resourceData?.contentImage !== null ? "space-between" : "center",
        }}
        className="flex flex-col gap-8 lg:flex-row py-[90px] outerContainer"
      >
        <div>
          <TextBlock
            horizontalAlign="left"
            subComponent={true}
            data={{
              content: resourceData.content,
              textPosition: "left",
            }}
          />
        </div>
        {resourceData?.contentImage && (
          <div>
            <ImageLayout data={resourceData.contentImage} />
          </div>
        )}
      </section>
    </>
  );
}

const LeftContent = ({
  downLoadFormData,
  resourceData,
  submitSuccess,
}: {
  resourceData: any;
  downLoadFormData: any;
  submitSuccess: boolean;
}) => {

  const downloadFile =()=>{
    const url = getUrlFromId(resourceData.pdfFile.asset._ref);  
    fetch(url).then(function(t) {
      return t.blob().then((b) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.setAttribute("download", 'resource.pdf');
        a.click();
      });
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <Heading
        subComponent
        data={{
          horizontalAlign: "left",
          verticalAlign: "top",
          preTitle: submitSuccess
            ? resourceData?.formSubmitMessage
            : resourceData.category?.name,
          headingType: "h2",
          textPosition: "left",
          title: resourceData.title,
        }}
      />
      <TextBlock
        subComponent={true}
        horizontalAlign="left"
        data={{
          content: resourceData.description,
          textPosition: "left",
        }}
      />
      {(submitSuccess || resourceData?.openResource) &&
        resourceData.pdfFile && (
          <button className={"w-fit !pb-0 !px-0 hover:underline font-bold"} onClick={downloadFile}>
          Download Now
          <span className="text">
            <BsArrowDown />
          </span>
        </button>
        )}
      <>
        {downLoadFormData && !resourceData.openResource && !submitSuccess && (
          <div className="flex gap-4 mt-10">
            <ZohoForm
              title={downLoadFormData?.formTitle}
              html={downLoadFormData?.formURL}
            />
          </div>
        )}
      </>
    </div>
  );
};

const RightContent = ({
  url,
  resourceData,
}: {
  url: any;
  resourceData: any;
}) => {
  return (
    <Image
      width={300}
      height={300}
      alt="hello"
      src={url}
      className={"w-full " + (resourceData.openResource ? "pb-[60px]" : "")}
    />
  );
};
const components = {
  types: {
    bullet: ({ children }: any) => (
      <li className="list-inside ml-24">{children}</li>
    ),
    listItem: ({ children }: any) => (
      <ul className="list-disc ml-24 bg-black">{children}</ul>
    ),
  },
};

function ZohoForm({ html, title }: { html: string; title: any }) {
  return (
    <div id="formContainer">
      <div className="text-left my-4 mx-2">
        <PortableText value={title} components={components} />
      </div>
      <InnerHTML html={html} />
    </div>
  );
}
