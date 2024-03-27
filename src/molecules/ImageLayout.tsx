import Image from "next/image";

import getURL from "@/utility/getURL";

export default function ImageLayout({ data }: { data: any }) {
  const imageUrl = getURL(data?.asset?._ref);
  if (!imageUrl) return undefined;
  return (
    <>
      {imageUrl && (
        <div className="overflow-hidden rounded-lg">
          <Image
            width={520}
            height={450}
            alt="Image"
            src={imageUrl.url()}
            className=""
          />
        </div>
      )}
    </>
  );
}
