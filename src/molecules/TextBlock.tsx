import getURL from "@/utility/getURL";
import { PortableText } from "@portabletext/react";
import { useEffect, useRef } from "react";

export type Block = {
  markDefs: any[];
  children: {
    _type: string;
    marks: any[];
    text: string;
    _key: string;
  }[];
  _type: string;
  style: "h1" | "h2" | "h3" | "h4" | "p";
  _key: string;
  alt: string
  asset: { _ref: string, _type: string };
  caption: string
};

const position = {
  center: "items-center text-center mx-auto",
  left: "items-left text-left mr-auto",
  right: "items-right text-right ml-auto",
};

type TextBlockProps = {
  horizontalAlign?: keyof typeof position;
  verticalAlign?: string;
  data:
  | {
    content: Block[];
    textPosition: keyof typeof position;
  }
  | undefined;
  subComponent: boolean;
};

export default function TextBlock({
  data,
  subComponent,
  horizontalAlign,
  verticalAlign,
}: TextBlockProps) {
  const textArea = useRef(null);
  useEffect(() => {
    if (textArea.current) {
      const textDiv = textArea.current as unknown as HTMLDivElement;
      const allP = textDiv.querySelectorAll("p");
      allP.forEach((p) => {
        if (p.innerHTML === "") {
          p.style.marginTop = "10px";
          p.style.marginBottom = "10px";
        }
      });
    }
  }, [textArea]);
  const components = {
    types: {
      bullet: ({ children }: any) => (
        <li className="list-inside ml-24">{children}</li>
      ),
      listItem: ({ children }: any) => (
        <ul className="list-disc ml-24 bg-black">{children}</ul>
      ),
      image: (node: any) => {
        const imageUrl = getURL(node?.value.asset?._ref)?.url() || '';
        return <img src={imageUrl} alt={node?.alt || ''} />;
      }
    },
  };
  
  return (
    <section
      className={`${subComponent ? "" : "py-[45px] outerContainer"} ${position[horizontalAlign || "center"]
        }`}
    >
      {data && (
        <div
          ref={textArea}
          className={`portableTextContainer flex flex-col ${position[data?.textPosition]
            } max-w-[800px]`}
        >
          {data?.content && (
            <PortableText value={data?.content} components={components} />
          )}
        </div>
      )}
    </section>
  );
}
