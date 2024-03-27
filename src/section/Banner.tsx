import { colors } from "@/utility/constants";
import GetSection from "@/wrappers/GetSection";
import { useRouter } from 'next/router';

const getBackground = (bannerBackground: string) => {
  switch (bannerBackground) {
    case "green":
      return "bg-green";
    case "secondary":
      return "bg-secondary";
    case "blue":
      return "bg-blue";
    case "black":
      return "bg-black";
    default:
      return "bg-primary";
  }
};

type BannerProps = {
  data: {
    bannerMargin: boolean;
    bannerBackground: string;
    bannerItems: any[];
  };
};

export default function Banner({ data }: BannerProps) {
  const router = useRouter();
  const productPath = router.asPath === '/product' && data.bannerBackground === 'Blue';
  return (
    <section
      id="bannerItem"
      style={{
        // margin: `${data?.bannerMargin ? "80px 108px" : null}`,
        backgroundColor: colors[data?.bannerBackground as keyof typeof colors],
      }}
      className={`py-[45px] lg:py-[90px] my-[45px] ${
        data?.bannerMargin
          ? "mx-[24px] sm:mx-[32px] lg:mx-[108px] px-[24px] sm:px-[32px] lg:px-[90px] max-w-[1224px] 2xl:mx-auto"
          : ""
      }`}
    >
      <div
        className={`flex flex-col gap-[45px] ${
          data?.bannerMargin || productPath ? "" : "outerContainer"
        }`}
      >
        {data?.bannerItems &&
          data?.bannerItems.map((section: any, index: number) => {
            // return (
            //   <GetSection
            //     onlySingleItem={data?.bannerItems.length === 1}
            //     subComponent={true}
            //     key={`${index}-section`}
            //     section={section}
            //   />
            // );
            return (
              <div
                className={`${(data?.bannerMargin || productPath) && "md:col-span-1"}`}
              >
                <GetSection
                  onlySingleItem={data?.bannerItems.length === 1}
                  subComponent={true}
                  key={`${index}-section`}
                  section={section}
                />
              </div>
            )
          })}
      </div>
    </section>
  );
}