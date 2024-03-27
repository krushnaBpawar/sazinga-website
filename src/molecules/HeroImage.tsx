import Image from "next/image";

import getURL from "@/utility/getURL";

export default function HeroImage({ data }: { data: any }) {
  const imageUrl = getURL(data?.asset._ref);
  return (
    <div className="lg-outercontainerimg">
      {imageUrl && (
        <Image
          width={1824}
          height={650}
          alt="Image"
          layout="responsive"
          src={imageUrl.url()}
          className="rounded-[6px] py-[60px] px-8 xl:px-0"
          style={{
            paddingTop: data?.paddingTop ? "60px" : "0px",
          }}
        />
      )}
    </div>
  );
}
