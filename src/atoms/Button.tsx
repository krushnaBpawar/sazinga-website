import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import getURL from "@/utility/getURL";
import * as ga from '../lib/ga'

export type ButtonProps = {
  label: string;
  link?: string;
  arrow?: boolean;
  type: "solid" | "text";
  handleClick?: any;
  icon?:
    | boolean
    | {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      };
};
export default function Button({
  label,
  link,
  arrow,
  type,
  handleClick,
  icon,
}: ButtonProps) {
  let imageUrl;
  if (icon) {
    imageUrl = getURL((icon as any).asset._ref);
  }

  const googletag = () => {
    ga.event({
      action: "link",
      params : {
        link
      }
    })
  }

  if (link) {
    return (
      <Link href={link} onClick={googletag}>
        <button id="purchase"
          className={
            "w-fit " + (type === "solid" ? "btn-solid-primary" : "px-2")
          }
        >
          {icon && imageUrl && (
            <span>
              <Image width={20} height={20} alt="Image" src={imageUrl.url()} />
            </span>
          )}
          {label}
          {arrow && (
            <span className={type === "text" ? "arrow-rotate" : ""}>
              <BsArrowRight />
            </span>
          )}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={handleClick}
        className={"w-fit " + (type === "solid" ? "btn-solid-primary" : "px-2")}
      >
        {label}
        {arrow && (
          <span className={type === "text" ? "arrow-rotate" : ""}>
            <BsArrowRight />
          </span>
        )}
      </button>
    );
  }
}
