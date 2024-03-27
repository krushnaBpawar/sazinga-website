import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

import getURL from "@/utility/getURL";

export default function NewImageCaraousel({ data }: { data: any }) {
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
        <div className="relative overflow-hidden">
            <Carousel
                responsive={responsive}
                autoPlay
                infinite
                autoPlaySpeed={10000}
                pauseOnHover={false}
                showDots={false}
                arrows={true}
                swipeable
                //   className=" md:mt-4 h-40 md:h-[520px]"
                centerMode={windowWidth > 1919 ? true : false}
                className="z-0"
            >
                {data &&
                    data?.listOfpointers?.map((item: any, index: number) => {
                        const imageUrl = getURL(item.icon?.asset?._ref);
                        if (!imageUrl) return null;
                        return (
                            <div key={index} className="md:mx-[40px] flex flex-col items-center justify-center px-[30px]">
                                {imageUrl && (
                                    <div className="relative w-full h-96 md:h-[360px] transition-transform duration-500 transform">
                                        <div className="text-center leading-7 md:text-[25px] mt-5 italic ">{item?.title}</div>
                                        <div className="text-center">
                                            <div className="relative my-2 md:my-4 w-12 h-12 md:w-24 md:h-24 rounded-full overflow-hidden inline-block">
                                                <Image layout="fill" objectFit="cover" alt="Image" src={imageUrl.url()} />
                                            </div>
                                        </div>
                                        <div className="text-center text-2xl text-4xl">
                                            {item.description.split('\n').map((line: any, index: any) => (
                                                <div key={index} className={index === 0 ? 'font-bold' : 'font-normal'}>
                                                    {line}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
            </Carousel>
        </div>
    );
}
