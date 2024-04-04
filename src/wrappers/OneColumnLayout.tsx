import React from "react";
import { colors } from "@/utility/constants";
import { alignItem } from "@/utility/helperFunction";

type OneColumnLayoutProps = {
  sectionId?: string;
  subComponent: boolean;
  containerClassName?: string;
  background?: string;
  content?: JSX.Element;
  position?: string;
  onlySingleItem?: boolean;
};

export default function OneColumnLayout({
  sectionId,
  subComponent,
  containerClassName,
  content,
  position,
  onlySingleItem,
  background = "transparent",
}: OneColumnLayoutProps) {
  return (
    <section
      id={sectionId}
      className={`${
        subComponent
          ? onlySingleItem
            ? undefined
            : "py-[15px]"
          : "outerContainer py-[45px]"
      }`}
      style={{
        margin:"30px",
    borderRadius: "10px",
        backgroundColor: colors[background?.oneColumnLayout?.bannerBackground as keyof typeof colors],
        color: colors[background?.oneColumnLayout?.textColor as keyof typeof colors],

      }}
    >
      <div
        className={`flex ${alignItem(
          position
        )} w-full bg-${background} ${containerClassName}`}
      >
        {content}
      </div>
    </section>
  );
}
