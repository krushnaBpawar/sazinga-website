import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import Button from "@/atoms/Button";

type ProductCardProps = {
  containerClassName?: string;
  textDirection?: "left" | "right" | "center";
  image?: string;
  title: string;
  description: any;
  ctaButton: any;
  shadow?: boolean;
  widthFull?: boolean;
  showCTAButton: boolean;
};

const components = {
  types: {
    bullet: ({ children }: any) => <li className="list-inside ml-24">{children}</li>,
    listItem: ({ children }: any) => <ul className="list-disc ml-24 bg-black">{children}</ul>,
  },
};

function Productcard({ containerClassName, textDirection = "left", image, title, description, shadow, widthFull, ctaButton, showCTAButton }: ProductCardProps) {
  return (
    <div className={`flex flex-col gap-5 ${containerClassName} ${shadow ? "shadow-lg px-12 py-8 bg-white " : null}`}>
      {image && <Image className={widthFull ? "w-full" : undefined} src={image as string} width={42} height={42} alt="image" />}

      <div className={`flex flex-col gap-[10px] ${textDirection === "left" ? "text-left" : textDirection === "right" ? "text-right" : "text-center"}`}>
        <h3>{title}</h3>
        <PortableText value={description} components={components} />
        {showCTAButton && (
          <div className="buttonWrapper mt-6">
            <Button
              icon={ctaButton.displayIcon && ctaButton.icon}
              arrow={ctaButton.arrow}
              label={ctaButton.label}
              type={ctaButton.type}
              link={ctaButton.link}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Productcard;
