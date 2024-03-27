import { useEffect, useRef, useState } from "react";

export type DropdownOption = {
  displayLabel: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOption[];
  setSelectedOption: React.Dispatch<React.SetStateAction<any | null>>;
};

function Dropdown({ options, setSelectedOption }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          className="items-center gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="hidden max-[1024px]:block text-heading-secondary text-p15 font-semibold">
            Filter
          </p>
          <p className="block max-[1024px]:hidden text-heading-secondary text-p15 font-semibold">
            More
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#2F384C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <p
                key={index}
                className="block px-5 py-2 text-[16px] text-heading-secondary font-semibold hover:bg-gray-100 cursor-pointer"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setSelectedOption(option);
                }}
              >
                {option.displayLabel}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
