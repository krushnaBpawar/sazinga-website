import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { dialogType } from "@/utility/constants";
import getURL from "@/utility/getURL";

export default function DialogBox({
  menuOption,
  hoveredMenuItem,
  setHoveredMenuItem,
}: {
  menuOption: any;
  hoveredMenuItem: string | null;
  setHoveredMenuItem: any;
}) {
  const router = useRouter();
  const [groupedItems, setGroupedItems] = useState<any[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHoveredMenuItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (
      menuOption.showdialog &&
      menuOption.title === hoveredMenuItem &&
      groupedItems.length === 0
    ) {
      for (
        let i = 0;
        i < menuOption.dialogBoxItems?.dialogMenu?.length;
        i += 5
      ) {
        setGroupedItems((prev) => [
          ...prev,
          menuOption.dialogBoxItems?.dialogMenu.slice(i, i + 5),
        ]);
      }
    }
  }, [hoveredMenuItem]);

  if (
    !menuOption.dialogBoxItems?.dialogMenu ||
    menuOption.dialogBoxItems?.dialogMenu?.length == 0
  ) {
    return;
  }

  return (
    <>
      {menuOption.showdialog && menuOption.title === hoveredMenuItem && (
        <div
          onMouseLeave={() => setHoveredMenuItem(null)}
          ref={dropdownRef}
          className="absolute whitespace-nowrap top-full mt-10 left-0 p-[24px] bg-white shadow-lg rounded-lg flex justify-center items-start gap-[24px]"
        >
          <div className=" flex flex-col gap-4">
            {menuOption?.dialogBoxItems?.dialogHeading && (
              <div className="text-p15 font-semibold">
                {menuOption.dialogBoxItems.dialogHeading}
              </div>
            )}

            <div className="flex gap-4 flex-col">
              {groupedItems.map((group, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-4">
                  {group.map((item: any, index: number) => (
                    <span
                      key={`${index}+${item.title}`}
                      onClick={() => {
                        router.push(item.link);
                      }}
                      className="text-p15 cursor-pointer hover-primary font-medium w-fit"
                    >
                      {item.title}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {menuOption.dialogBoxItems?.dialogType === dialogType.withImage && (
            <div className="">
              <div className="w-[200px] h-[124px] bg-alt">
                <Image
                  alt=""
                  src={
                    getURL(
                      menuOption.dialogBoxItems.imageLayout.image.asset._ref
                    )?.url() ?? ""
                  }
                  onClick={() => {
                    if (menuOption.link) {
                      router.push(menuOption.link);
                    }
                  }}
                  className="cursor-pointer"
                  width={200}
                  height={124}
                />
              </div>
              <div className="mt-[16px]">
                <div
                  className="text-p15 font-medium cursor-pointer"
                  onClick={() => {
                    if (menuOption.link) {
                      router.push(menuOption.link);
                    }
                  }}
                >
                  {menuOption.dialogBoxItems.imageLayout.heading}
                </div>
                <div className="text-[14px] whitespace-pre-wrap">
                  {menuOption.dialogBoxItems.imageLayout.description}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
