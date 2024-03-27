import Image from "next/image";
import Marquee from "react-fast-marquee";

import { colors } from "@/utility/constants";
import getURL from "@/utility/getURL";

export default function BrandList({ data }: { data: any }) {
  const height = data?.brandlistHeight;

  return (
    data && (
      <div className={`h-[${data?.brandlistHeight}]`}>
        <Marquee
          gradientWidth={40}
          gradient={true}
          gradientColor={colors[data?.backgroundColor as keyof typeof colors]}
          speed={60}
          loop={0}
          autoFill
        >
          {data?.brandLogos.map((item: any) => {
            const imageUrl = getURL(item.asset?._ref);
            if (!imageUrl) return undefined;
            return (
              <Image
                className="px-6 object-cover"
                key={item._key}
                width={height}
                height={height}
                alt="Image"
                layout="responsive"
                src={imageUrl.url()}
              />
            );
          })}
        </Marquee>
      </div>
    )
  );
}
