import Image from "next/image";
import Link from "next/link";

import Button from "@/atoms/Button";
import { toTitleCase, truncateString } from "@/utility/helperFunction";

export type ResourceCardProps = {
  title: string;
  link: string;
  excerpt: string;
  imageUrl: string;
  category: string;
};
export function ResourceCard({
  title,
  link,
  excerpt,
  imageUrl,
  category,
}: ResourceCardProps) {
  return (
    <Link
      href={link}
      className="flex flex-col border-border-primary border rounded-md hover:shadow-lg transition-all duration-200 "
    >
      <div className="relative h-[400px] object-cover w-full rounded-t-md">
        <Image
          src={imageUrl}
          alt="Resource Card"
          fill={true}
          className="object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col p-6 gap-2 h-fit">
        <div className="flex gap-6 mt-2">
          <p className="text-blue-700 font-semibold text-p15">
            {toTitleCase(category ?? "")}
          </p>
        </div>
        <h4 className="break-words">{title}</h4>
        <div className="flex flex-col justify-between h-full ml-[-8px]">
          <Button arrow={true} label={"Read More"} type={"text"} link={link} />
        </div>
      </div>
    </Link>
  );
}
