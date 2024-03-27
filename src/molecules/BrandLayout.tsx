import Image from "next/image";

import getURL from "@/utility/getURL";

export default function BrandLayout({ data }: { data: any[] | undefined }) {
  return (
    <>
      {data && (
        <div className="flex gap-3 mt-4">
          {data?.map((item: any) => {
            const imageUrl = getURL(item?.asset?._ref);
            if (!imageUrl) return undefined;
            return (
              <div key={item._key} className="w-full sm:w-1/2 md:w-20">
                <Image
                  key={item._key}
                  width={80}
                  height={30}
                  alt="Image"
                  src={imageUrl.url()}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
