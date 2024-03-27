import Image from "next/image";

import getURL from "@/utility/getURL";

export default function NormalImage({ data }: { data: any }) {
  const imageUrl = getURL(data?.asset._ref);
  return (
    <div className="w-[70%] mx-auto">
      {imageUrl && (
        <Image
          width={1024}
          height={600}
          alt="Image"
          layout="responsive"
          src={imageUrl.url()}
          className="rounded-[6px] px-[24px] sm:px-[32px] lg:px-[108px] py-[30px]"
        />
      )}
    </div>
  );
}
