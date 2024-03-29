import { useRouter } from "next/router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Button from "@/atoms/Button";
import CompanyLogo from "@/atoms/CompanyLogo";
import HamburgerMenu from "@/atoms/hamburgerMenu";
import NavMenu from "@/molecules/NavMenu";
import getURL from "@/utility/getURL";

export default function Navbar({ data }: { data: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<number | undefined>(
    undefined
  );
  const router = useRouter();
// const url='https://optimus.tech/events/mpe-2024'
  return (
    <>
    {/* <h4 className="text-lg bg-gradient-to-r from-[#55b2da] to-[#106ca1] py-4 text-center text-white ">Optimus Fintech at MPE. 
    <a href={url} className="underline ml-2">Learn more.</a></h4> */}
      <nav className="border-b-2 border-alt sticky top-0 z-[99] bg-custom-blue">
        <div className="outerContainer flex flex-row justify-between items-center py-[10px] ">
          <div className="flex gap-10 items-center">
            <CompanyLogo url={getURL(data?.logo?.asset._ref)?.url()} />
          </div>
          <div className="hidden lg:flex gap-10">
            <NavMenu menuItems={data?.menuOptions} />
            {data?.primaryButton?.label && (
              <Button
                icon={
                  data?.primaryButton.displayIcon && data?.primaryButton.icon
                }
                arrow={data?.primaryButton.arrow}
                label={data?.primaryButton.label}
                type={data?.primaryButton.type}
                link={data?.primaryButton.link}
              />
            )}
            {data?.secondaryButton?.label && (
              <Button
                icon={
                  data?.secondaryButton.displayIcon &&
                  data?.secondaryButton.icon
                }
                arrow={data?.secondaryButton.arrow}
                label={data?.secondaryButton.label}
                type={data?.secondaryButton.type}
                link={data?.secondaryButton.link}
              />
            )}
          </div>
          <div
            className="flex flex-col lg:hidden"
            onClick={() => {
              setIsModalOpen((prev) => !prev);
            }}
          >
            <GiHamburgerMenu size={24} />
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <HamburgerMenu
          data={data}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
