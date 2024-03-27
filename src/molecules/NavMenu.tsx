import { useRouter } from "next/router";
import { useState } from "react";

import DialogBox from "@/atoms/DialogBox";
import NavMenuItem from "@/atoms/NavMenuItem";

export default function NavMenu({ menuItems }: { menuItems: string[] }) {
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);
  const router = useRouter();
  return (
    <div className="hidden lg:flex items-center justify-center gap-3">
      {menuItems &&
        menuItems.map((menuOption: any, index: number) => (
          <div
            key={`${index}+${menuOption.title}`}
            className="relative group"
            onMouseEnter={() => {
              if (menuOption.showdialog) {
                setHoveredMenuItem(menuOption.title);
              } else {
                setHoveredMenuItem(null);
              }
            }}
            onClick={() => {
              if (menuOption.link && !menuOption.showdialog) {
                router.push(menuOption.link);
              }
            }}
          >
            <NavMenuItem label={menuOption.title} />
            <DialogBox
              menuOption={menuOption}
              hoveredMenuItem={hoveredMenuItem}
              setHoveredMenuItem={setHoveredMenuItem}
            />
          </div>
        ))}
    </div>
  );
}
