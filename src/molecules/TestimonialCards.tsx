import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";

import Stars from "@/atoms/Stars";
import ImageLayout from "@/molecules/ImageLayout";
import { Block } from "@/molecules/TextBlock";
export default function TestimonialCards({
  data,
  subComponent,
}: {
  data: any;
  subComponent: boolean;
}) {
  const responsive = {
    extraLargeDesktop: {
      breakpoint: { max: 4000, min: 3001 },
      items: 2,
      partialVisibilityGutter: 100,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1920 },
      items: 2,
      partialVisibilityGutter: 100,
    },
    desktop: {
      breakpoint: { max: 1919, min: 1200 },
      items: 2,
      partialVisibilityGutter: 100,
    },
    tablet: {
      breakpoint: { max: 1199, min: 768 },
      partialVisibilityGutter: 80,
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      partialVisibilityGutter: 40,
      items: 1,
    },
  };
  if (data?.showAllCards) {
    return (
      <div className="relative">
        <div className="absolute w-[99vw] -left-[37.5px] md:-left-[42.5px] lg:-left-[116.6px] xl:-left-[111.5px] top-[450px] h-[100%] bg-white -z-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          {data &&
            data?.testimonialCards.map((item: any, index: number) => {
              return (
                <div
                  key={item._key}
                  className={`mx-3 cursor-grab bg-${
                    data?.cardBackground ?? "white"
                  } shadow-lg p-[24px] rounded-md flex flex-col gap-[24px] justify-between z-0`}
                >
                  <div className="">
                    <Stars numberOfStars={item.stars} />
                  </div>
                  <div className="">
                    {item.testimonialContent &&
                      item.testimonialContent.map((item: Block) => {
                        const Element = item.style;
                        return (
                          <Element key={item._key}>
                            {item.children[0].text}
                          </Element>
                        );
                      })}
                  </div>
                  <div className="flex items-center gap-[15px] mt-[40px]">
                    <div className="w-16">
                      <ImageLayout data={item.testimonialImage} />
                    </div>
                    <div className="flex flex-col justify-between h-full">
                      <h4 className="font-bold md:text-[20px]">
                        {item.testimonialName}
                      </h4>
                      <span className="text-[18px]">
                        {item.testimonialDesignation}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen ml-[-35px] md:ml-[-50px] lg:ml-[-120px]">
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={2000}
        showDots={false}
        arrows={false}
        swipeable={true}
        // centerMode
        partialVisible
        className="mt-1 md:mt-4"
      >
        {data &&
          data?.testimonialCards.map((item: any, index: number) => {
            return (
              <div
                key={item._key}
                className={`mx-5 cursor-grab bg-${
                  data?.cardBackground ?? "white"
                } shadow-lg p-[24px] rounded-md flex flex-col gap-[24px] justify-between`}
              >
                <div className="">
                  <Stars numberOfStars={item.stars} />
                </div>
                <div className="">
                  {item.testimonialContent &&
                    item.testimonialContent.map((item: Block) => {
                      const Element = item.style;
                      return (
                        <Element key={item._key}>
                          {item.children[0].text}
                        </Element>
                      );
                    })}
                </div>
                <div className="flex items-center gap-[15px] mt-[40px]">
                  <div className="w-16">
                    <ImageLayout data={item.testimonialImage} />
                  </div>
                  <div className="flex flex-col justify-between h-full">
                    <span className="font-bold text-[18px] md:text-[20px]">
                      {item.testimonialName}
                    </span>
                    <span className="text-[16px] md:text-[18px]">
                      {item.testimonialDesignation}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}
