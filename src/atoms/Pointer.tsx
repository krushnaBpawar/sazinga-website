import Image from "next/image";
import React from "react";

type PointerProps = {
  containerClassName?: string;
  iconDirection?: "left" | "top";
  icon?: string;
  title: string;
  description: string;
  shadow?: boolean;
  widthFull?: boolean;
};
function Pointer({
  containerClassName,
  iconDirection = "left",
  icon,
  title,
  description,
  shadow,
  widthFull,
}: PointerProps) {
  return (
    <div
      className={`flex ${
        iconDirection === "top" ? "flex-col" : "flex-row items-start"
      } gap-5  ${containerClassName} ${shadow ? "shadow-lg p-[24px] items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" : null}`}
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
          <h6 className="font-semibold text-p17">
            {<span className="text-blue-700">{title?.split(" ")[0]}</span>}{" "}
            {title?.split(" ").slice(1).join(" ")}
          </h6>
        ) : (
          <h6 className="font-semibold text-p17">{title}</h6>
        )}
        { shadow ? (
        <p className="text-center">{description}</p>
        ):(<p>{description}</p>) }
      </div>
    </div>
  );
}

export default Pointer;
