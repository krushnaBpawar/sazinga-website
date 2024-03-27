import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import getURL from "@/utility/getURL";

export default function ImageSlider({ data }: { data: any }) {
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
        <div className="relative w-full overflow-hidden py-[45px]">
            <Carousel
                responsive={responsive}
                autoPlay
                infinite
                autoPlaySpeed={2500}
                pauseOnHover={false}
                showDots={false}
                arrows={true}
                swipeable
                //className="mt-1 md:mt-4 h-52 md:h-[520px]"
                centerMode={windowWidth > 1919 ? true : false}
                className="z-0"
            >
                {data &&
                    data?.map((image: any, index: number) => {
                        const imageUrl = getURL(image.asset?._ref);
                        if (!imageUrl) return null;
                        return (
                            <div key={index} className="flex flex-col items-center justify-center">
                                {imageUrl && (
                                    <div className="relative w-full h-full transition-transform duration-500 transform">
                                        <div className="text-center">
                                            <div className=" w-full h-[370px] object-contain md:h-[470px] overflow-hidden inline-block max-w-full">
                                                <Image layout="fill" objectFit="contain" alt="Image" src={imageUrl.url()} className=" w-full h-full object-contain max-w-full" />
                                            </div>
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