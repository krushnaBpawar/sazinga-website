import { GetStaticProps } from "next";
import Link from "next/link";

import { getClient } from "@/lib/getClient";
import PreviewProvider from "@/lib/PreviewProvider";
import Footer from "@/section/Footer";
import Navbar from "@/section/Navbar";
import GetPage from "@/wrappers/GetPage";

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = context.draftMode || false;
  const previewToken = preview ? process.env.SANITY_READ_TOKEN : ``;
  const client = getClient(previewToken);

  const data = await client.fetch(`*[_type == "error"][0]`);

  const navRefId = data?.navbar?._ref;
  let navbarData;
  if (navRefId === undefined) {
    navbarData = await getClient().fetch(`*[_type == "navbar"][0]`);
  } else {
    navbarData = await getClient().fetch("*[_id == $refId][0]", {
      refId: navRefId,
    });
  }

  const footerRefId = data?.footerSection?._ref;
  let footerData;
  if (footerRefId === undefined) {
    footerData = await getClient().fetch(`*[_type == "footer"][0]`);
  } else {
    footerData = await getClient().fetch("*[_id == $refId][0]", {
      refId: footerRefId,
    });
  }

  return {
    props: {
      preview,
      previewToken,
      data,
      navbarData,
      footerData,
    },
    revalidate: 10,
  };
};

export default function NotFoundPage({
  data,
  preview,
  previewToken,
  navbarData,
  footerData,
}: {
  data: any;
  navbarData: any;
  footerData: any;
  preview: boolean;
  previewToken?: string;
}) {
  if (preview && previewToken) {
    return (
      <PreviewProvider previewToken={previewToken}>
        <p>This is preview mode</p>
        <GetPage data={data?.sections} />

        <div className="prose prose-lg px-4 prose-blue clear-both py-16 mx-auto">
          <Link href="/api/exit-preview">Exit preview</Link>
        </div>
      </PreviewProvider>
    );
  }
  return (
    <>
      {navbarData && <Navbar data={navbarData} />}
      {data && <GetPage data={data?.sections} />}
      {footerData && <Footer data={footerData} />}
    </>
  );
}
