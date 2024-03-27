import { useState } from "react";
import { LeftContent } from "@/section/LeftContent";
import { colors } from "@/utility/constants";
import OneColumnLayout from "@/wrappers/OneColumnLayout";

export default function VerticalTabContentLayout({ data }: { data: any }) {

    const [selectedTab, setSelectedTab] = useState(0);
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const handleAccordionClick = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };
    return (
        <div>
            <div className="hidden md:block">
                <div className="outerContainer flex flex-col md:flex-row">
                    <div className="flex flex-col  justify-start gap-[36px] md:gap-[38px] lg:gap-[20px]">
                        {data &&
                            data?.tabComponentItems.map((item: any, index: number) => (
                                <div
                                    key={`${index}-tabItems`}
                                    className={`flex tabular items-center  cursor-pointer  font-medium min-w-fit pb-1 ${data?.tabComponentItems[selectedTab].tabName === item.tabName ? " border-blue-700 bg-[#B8F5E6] h-16 fill-blue-700" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setSelectedTab(index);
                                    }}
                                >
                                    <div className="text-[17px] sm:text-[17px] ml-4">{item.tabName}</div>
                                </div>
                            ))}
                    </div>
                    <div
                        className="px-[30px] "
                        style={{
                            backgroundColor: colors[data?.tabBackground as keyof typeof colors],
                        }}
                    >
                        <OneColumnLayout
                            subComponent={true}
                            content={<LeftContent data={data?.tabComponentItems[selectedTab].oneColumnSection?.leftSectionItems}
                            />}
                        />
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                {data &&
                    data?.tabComponentItems.map((item: any, index: number) => (
                        <div key={`accordion-${index}`} className="relative mb-3">
                            <h6 className="mb-0">
                                <div
                                    className={`relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500 pb-3 ${openAccordion === index ? " border-blue-700 bg-[#B8F5E6] h-16 fill-blue-700" : "text-secondary"
                                        }`}
                                    onClick={() => handleAccordionClick(index)}
                                >
                                    <span>{item.tabName}</span>
                                    <i className={`absolute right-0 pt-1 text-xs fa ${openAccordion === index ? 'fa-minus' : 'fa-plus'} group-open:opacity-100`}></i>
                                </div>
                            </h6>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === index ? 'h-auto' : 'h-0'}`}
                            >
                                <div className="p-4 text-sm leading-normal text-blue-gray-500/80"

                                    style={{
                                        backgroundColor: colors[data?.tabBackground as keyof typeof colors],
                                    }}>
                                    <OneColumnLayout
                                        subComponent={true}
                                        content={<LeftContent data={item.oneColumnSection?.leftSectionItems} />}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
