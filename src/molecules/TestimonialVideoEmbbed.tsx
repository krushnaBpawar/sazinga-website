import Image from "next/image";

import ImageLayout from "@/molecules/ImageLayout";
import { Block } from "@/molecules/TextBlock";
import getURL from "@/utility/getURL";

export default function TestimonialVideoEmbbed({ data, subComponent }: { data: any; subComponent: boolean }) {
  const imageUrl = getURL(data?.testimonialSideImage.asset?._ref);
  return (
    <>
      {data && (
        <div className={`flex flex-col md:flex-row ${data?.isImageLeft ? "md:flex-row-reverse" : ""} justify-between gap-[40px] py-[30px]`}>
          <div className="md:w-[70%]">
            {data?.textContent.testimonialContent &&
              data?.textContent.testimonialContent.map((item: Block) => {
                const Element = item.style;
                return (
                  <Element className="italic" key={item._key}>
                    {item.children[0].text}
                  </Element>
                );
              })}

            <div className="flex items-center gap-[15px] mt-[40px]">
              <div className="w-16">
                <ImageLayout data={data?.textContent.testimonialImage} />
              </div>
              <div className="flex flex-col justify-between h-full">
                <span className="font-bold text-[18px] lg:text-[20px]">{data?.textContent.testimonialName}</span>
                <span className="text-[16px] lg:text-[18px]">{data?.textContent.testimonialDesignation}</span>
              </div>
            </div>
          </div>

          <div className="md:w-[30%] md:min-w-[355px]">
            {imageUrl && (
              <div className=" rounded-lg overflow-hidden">
                <Image width={600} height={450} alt="Image" src={imageUrl.url()} className="xl:mx-auto" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
