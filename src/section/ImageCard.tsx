import Image from "next/image";
import { useRouter } from "next/router";

import getURL from "@/utility/getURL";

export default function ImageCard({ data, subComponent }: { data: any; subComponent: boolean }) {
  const router = useRouter();
  return (
    <div
      className={`flex gap-[24px] ${subComponent ? "py-[15px]" : "py-[30px]"} ${
        data?.layout === "row" ? "flex-col md:flex-row" : "flex-col"
      } md:flex-wrap justify-between`}
    >
      {data &&
        data?.thumbnail?.map((item: any, index: number) => {
          const imageUrl = getURL(item.picture.asset._ref);
          if (!imageUrl) return undefined;
          return (
            <div
              key={`${index}-image-card`}
              className={`image-card-wrapper flex flex-col gap-[9px] md:w-[47%] lg:w-[30%] ${item?.link ? "cursor-pointer" : null} ${
                item?.textPosition == "center" ? "items-center" : item.textPosition == "right" ? "items-end" : "items-start"
              }`}
              onClick={item?.link ? () => router.push(item.link) : undefined}
            >
              <div className="w-full overflow-hidden rounded-md">
                <Image width={400} height={400} layout="responsive" alt={item.picture.alt} src={imageUrl.url()} className="mx-auto" />
              </div>
              <h4 className="font-semibold">{item.caption}</h4>
            </div>
          );
        })}
    </div>
  );
}
