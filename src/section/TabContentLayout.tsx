
import Image from "next/image";
import { useState, useRef } from "react";
import { LeftContent } from "@/section/LeftContent";
import RightContent from "@/section/RightContent";
import { colors } from "@/utility/constants";
import getURL from "@/utility/getURL";
import TwoColumnLayout from "@/wrappers/TwoColumnLayout";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";

export default function TabContentLayout({ data }: { data: any }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="outerContainer pb-[45px] relative"> 
      <div className="flex overflow-x-scroll scroll-container mt-0 whitespace-nowrap justify-start gap-[36px] md:gap-[38px] lg:gap-[60px]" ref={containerRef}>
        {data &&
          data?.tabComponentItems.map((item: any, index: number) => (
            <div
              key={`${index}-tabItems`}
              className={`flex tabular relative items-center gap-[5px] cursor-pointer hover-primary font-medium min-w-fit pb-1 ${data?.tabComponentItems[selectedTab].tabName === item.tabName ? "text-blue-700 border-blue-700 fill-blue-700" : "text-secondary"
                }`}
              onClick={() => {
                setSelectedTab(index);
              }}
            >
              <Image
                src={getURL(item.tabIcon?.asset?._ref)?.url() ?? ""}
                width={20}
                height={20}
                alt="tabIcon"
                className={data?.tabComponentItems[selectedTab].tabName === item.tabName ? "blue-image" : "blue-image-hover"}
              />
              <div className="text-[15px] sm:text-[17px]">{item.tabName}</div>
            </div>
          ))}
      </div>
      <div className="left-0 z-10 absolute top-0  flex md:hidden items-center opacity-50  bg-[#020617] rounded-full p-1 pb-1" onClick={scrollLeft}><TfiAngleLeft className="text-white " /></div>
      <div className="right-0 z-10 absolute top-0 flex md:hidden items-center opacity-50  bg-[#020617] rounded-full p-1 pb-1" onClick={scrollRight}><TfiAngleRight className="text-white" /></div>
      <div
        className="p-[30px] lg:pt-[46px] lg:pl-[46px] lg:pr-0 lg:pb-0 mt-[30px]"
        style={{
          backgroundColor: colors[data?.tabBackground as keyof typeof colors],
        }}
      >
        <TwoColumnLayout
          containerClassName={"justify-between"}
          subComponent={true}
          isReverse={false}
          showLeftSection={true}
          showRightSection={true}
          leftContent={<LeftContent data={data?.tabComponentItems[selectedTab].leftSection.leftSectionItems} />}
          rightContent={<RightContent isReverse={false} data={data?.tabComponentItems[selectedTab].rightSection.rightSectionItems} />}
        />
      </div>
    </div>
  );
}