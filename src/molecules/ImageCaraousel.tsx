import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

import getURL from "@/utility/getURL";

export default function ImageCaraousel({ data }: { data: any }) {
  const responsive = {
    extraLargeDesktop: {
      breakpoint: { max: 4000, min: 3001 },
      partialVisibilityGutter: 100,
      items: 1,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1920 },
      partialVisibilityGutter: 100,
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1919, min: 1200 },
      partialVisibilityGutter: 100,
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1199, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function updateWidths() {
      setWindowWidth(window.innerWidth);
    }
    updateWidths();

    window.addEventListener("resize", updateWidths);

    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  return (
    <div className="relative w-screen overflow-hidden py-[45px]">
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={2000}
        pauseOnHover={false}
        showDots={false}
        arrows={false}
        swipeable
        className="mt-1 md:mt-4 h-52 md:h-[520px]"
        centerMode={windowWidth > 768 ? true : false}
      >
        {data &&
          data?.map((image: any, index: number) => {
            const imageUrl = getURL(image.asset?._ref);
            if (!imageUrl) return null;
            return (
              <div key={index} className="mx-2">
                {imageUrl && (
                  <div
                    className={
                      "relative w-full object-contain draggable-false h-96 md:h-[470px]  transition-transform duration-500 transform"
                    }
                  >
                    <Image
                      layout="fill"
                      alt="Image"
                      src={imageUrl.url()}
                      className="draggable-false cursor-grab object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}
