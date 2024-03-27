import { PortableText } from "@portabletext/react";
import InnerHTML from "dangerously-set-html-content";
import { useEffect, useState } from "react";

import { getClient } from "@/lib/getClient";

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

export default function FormEmbbed({
  data: formData,
  horizontalAlign,
}: {
  data: any;
  horizontalAlign?: keyof typeof position;
}) {
  const [html, setHtml] = useState("");
  const [title, setTitle] = useState([]);

  const position = {
    center: "items-center text-center mx-auto",
    left: "items-left text-left mr-auto",
    right: "items-right text-right ml-auto",
  };
  useEffect(() => {
    (async () => {
      const client = getClient();
      if (!formData?._ref) return;
      const data = await client.fetch("*[_id == $refId][0]", {
        refId: formData?._ref,
      });
      setTitle(data.formTitle);
      setHtml(data.formURL);
    })();
  }, [formData]);
  return (
    <section
      id="formContainer"
      className={`${position[horizontalAlign || "center"]}`}
    >
      <div className="text-left my-4 mx-2">
        <PortableText value={title} components={components} />
      </div>
      {html !== "" && <InnerHTML html={html} />}
    </section>
  );
}
