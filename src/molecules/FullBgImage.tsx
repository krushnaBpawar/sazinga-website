import Image from "next/image";

import getURL from "@/utility/getURL";

export default function FullBgImage({ data }: { data: any }) {
    const imageUrl = getURL(data?.asset._ref);
    return (
        <div >
            {imageUrl && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${imageUrl.url()}')`,
                        paddingTop: data?.paddingTop ? "60px" : "0px",
                        width: '100%',
                        height: '100%',
                    }}
                ></div>
            )}
        </div>
    );
}
