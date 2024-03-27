import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function HamburgerMenu({
  data,
  selectedMenu,
  setSelectedMenu,
  setIsModalOpen,
}: {
  data: any;
  selectedMenu: number | undefined;
  setSelectedMenu: React.Dispatch<React.SetStateAction<number | undefined>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  return (
    <div className="lg:hidden h-[93vh] w-full bg-white sticky top-[74px] z-[200]">
      {selectedMenu !== undefined && (
        <div
          onClick={() => {
            setSelectedMenu(undefined);
          }}
          className="w-full flex justify-start bg-blue py-2 px-3 items-center gap-2 cursor-pointer"
        >
          <span>
            <MdKeyboardArrowLeft size={23} />
          </span>
          <span
            className="font-medium text-p15"
            onClick={() => {
              if (data?.menuOptions[selectedMenu].link) {
                router.push(data?.menuOptions[selectedMenu].link);
              }
            }}
          >
            {data?.menuOptions[selectedMenu].title}
          </span>
        </div>
      )}
      <div className="px-[40px] py-[24px] flex flex-col justify-between h-full">
        {selectedMenu === undefined ? (
          <>
            <div className="flex flex-col gap-[8px]">
              {data?.menuOptions.map((menuOption: any, index: number) => (
                <div
                  key={`${index}+${menuOption.title}`}
                  className="flex justify-between cursor-pointer"
                  onClick={() => {
                    if (menuOption.showdialog) {
                      setSelectedMenu(index);
                    } else {
                      router.push(menuOption.link);
                      setIsModalOpen(false);
                    }
                  }}
                >
                  <span className="font-medium text-p15">
                    {menuOption.title}
                  </span>{" "}
                  {menuOption.showdialog && (
                    <span>
                      <MdOutlineKeyboardArrowRight />
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="font-semibold flex items-center gap-4 mb-5">
              Book A Demo <BsArrowRight />
            </div>
          </>
        ) : (
          <div className="">
            <div className="flex flex-col gap-[12px]">
              {data?.menuOptions[selectedMenu].dialogBoxItems.dialogMenu.map(
                (items: any) => {
                  return (
                    <div
                      key={items.title}
                      onClick={() => {
                        router.push(items.link);
                        setIsModalOpen(false);
                      }}
                      className="cursor-pointer hover-primary font-medium w-fit"
                    >
                      {items.title}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
