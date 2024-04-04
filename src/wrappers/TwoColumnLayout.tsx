import React from "react";

import { colors } from "@/utility/constants";

type TwoColumnLayoutProps = {
  sectionId?: string | undefined;
  subComponent: boolean;
  containerClassName?: string;
  leftContent?: JSX.Element;
  rightContent?: JSX.Element;
  isReverse?: boolean;
  background?: string;
  showLeftSection?: boolean;
  showRightSection?: boolean;
  onlySingleItem?: boolean;
  textbackground:string;
};
export default function TwoColumnLayout({
  subComponent,
  sectionId,
  containerClassName,
  showLeftSection,
  showRightSection,
  leftContent,
  rightContent,
  isReverse = false,
  background = "transparent",
  onlySingleItem,
  textbackground
}: TwoColumnLayoutProps) {

  return (
    <section
      id={sectionId}
      className={
        subComponent
          ? onlySingleItem
            ? undefined
            : "pb-[60px]"
          : "outerContainer-one py-[45px]"
      }
    >
      <div
        style={{
          borderRadius: "10px",
          padding:"20px",
          backgroundColor: colors[background as keyof typeof colors],
          color: colors[textbackground as keyof typeof colors],
        }}
        className={`twoColumnLayout flex w-full gap-6 md:gap-[104px] ${
          isReverse
            ? "flex-col-reverse lg:flex-row-reverse "
            : "flex-col lg:flex-row"
        } ${containerClassName}`}
      >
        {showLeftSection && (
          <div className={`w-full lg:w-6/12`}>{leftContent}</div>
        )}
        {showRightSection && (
          <div className={`w-full lg:w-6/12`}>{rightContent}</div>
        )}
      </div>
    </section>
  );
}
