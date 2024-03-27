import Image from "next/image";
import Link from "next/link";

import {
  formatDate,
  toTitleCase,
  truncateString,
} from "@/utility/helperFunction";
import * as ga from '../lib/ga'

export type BlogCardProps = {
  title: string;
  link: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  timeToRead: string;
  date: string;
};
export function BlogCard({
  title,
  link,
  excerpt,
  imageUrl,
  category,
  timeToRead,
  date,
}: BlogCardProps) {

  const googletag = () => {
    ga.event({
      action: "link",
      params : {
        link
      }
    })
  }
  return (
    <Link
      href={link} onClick={googletag}
      className="flex flex-col border-border-primary border rounded-md basis-full sm:basis-[48%] md:basis-[32%]  hover:shadow-lg transition-all duration-200"
    >
      <div className="relative h-56 object-cover w-full rounded-t-md">
        <Image src={imageUrl} alt="Blog" fill={true} className="object-cover" />
      </div>
      <div className="flex flex-col p-6 gap-2 h-fit">
        <h4 className="break-words">{truncateString(title ?? "", 50)}</h4>
        <div className="flex flex-col justify-between h-full">
          <p className="font-normal text-p15 leading-6 text-[#2D2F31] break-words">
            {truncateString(excerpt ?? "", 135)}
          </p>
          <div className="flex flex-wrap gap-2 mt-[20px] justify-between">
            <p className="text-blue-700 font-semibold text-[14px]">
              {toTitleCase(category ?? "")}
            </p>
            <p className="text-heading-secondary font-normal flex gap-1 text-[14px]">
              {formatDate(date ?? "")}
              <span className="hidden lg:block "> · {timeToRead}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
