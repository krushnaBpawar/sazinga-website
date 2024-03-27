import Image from "next/image";

import getURL from "@/utility/getURL";

export default function BulletPoints({ data }: { data: any }) {
  return (
    <div className="mt-[30px] flex flex-col gap-[12px]">
      {data &&
        data?.map((item: any) => {
          return (
            <div key={item._key} className="flex gap-[10px] items-center">
              <div className="">
                <Image
                  src={getURL(item.bulletIcon?.asset?._ref)?.url() ?? ""}
                  width={20}
                  height={20}
                  alt="tabIcon"
                  className="min-w-[20px] min-h-[20px]"
                />
              </div>
              <div className="text-[12px] md:text-p15">{item.bulletText}</div>
            </div>
          );
        })}
    </div>
  );
}
