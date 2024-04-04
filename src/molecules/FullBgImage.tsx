import Image from "next/image";

import getURL from "@/utility/getURL";

export default function FullBgImage({ data }: { data: any }) {
    console.log(data, 'data--')
    const imageUrl = getURL(data?.asset._ref);
    return (
        // <div >
        //     {imageUrl && (
        //         <div
        //             className=" top-0 left-0 w-full h-full bg-cover bg-center z-0 object-contain"
        //             style={{
        //                 backgroundImage: `url('${imageUrl.url()}')`,
        //                 paddingTop: data?.paddingTop ? "60px" : "0px",
        //                 width: '100%',
        //                 height: '100%',
        //             }}
        //         ></div>
        //     )}
        // </div>
        <div className="relative">
            {imageUrl && (
                <Image
                    width={1824}
                    height={650}
                    alt="Image"
                    layout="responsive"
                    src={imageUrl.url()}
                    className=" px-8 xl:px-0"
                    style={{
                        paddingTop: data?.paddingTop ? "60px" : "0px",
                    }}
                />
            )}
            {/* Content placed here will appear on top of the background image */}
        </div>

    );
}
