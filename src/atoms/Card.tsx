import ButtonLayout, { ButtonLayoutProps } from "@/molecules/ButtonLayout";
import Image from "next/image";
import React from "react";

type CardProps = {
  containerClassName?: string;
  iconDirection?: "left" | "top";
  icon?: string;
  title: string;
  description: string;
  shadow?: boolean;
  widthFull?: boolean;
  button:ButtonLayoutProps
};
function Card({
  containerClassName,
  iconDirection = "left",
  icon,
  title,
  description,
  shadow,
  widthFull,
  button
}: CardProps) {
  console.log(description,'description------------')
  return (
    <div
      className={`flex ${
        iconDirection === "top" ? "flex-col" : "flex-row items-start"
      } gap-5  ${containerClassName} ${shadow ? "shadow-lg p-[24px] items-center transition ease-in-out delay-150 duration-300 h-96 mb-5" : null}`}
    >
      {icon && (
        <Image
          className={widthFull ? "w-full" : undefined}
          src={icon as string}
          width={42}
          height={42}
          alt="Icon"
        />
      )}

      <div className={`flex flex-col gap-[10px]`}>
        {shadow ? (
                   <h6 className="font-semibold text-p17">{title}</h6>

        ) : (
          <h6 className="font-semibold text-p17">
          {<span className="text-blue-700">{title?.split(" ")[0]}</span>}{" "}
          {title?.split(" ").slice(1).join(" ")}
        </h6>
        )}
        { shadow ? (
        <p >{description}</p>
        ):(<p>{description}</p>) 
        }
        <div>
        <ButtonLayout
              data={{
                button: button,
                horizontalAlign: "right",
              }}
            />
            </div>
      </div>
    </div>
  );
}

export default Card;
