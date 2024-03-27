import Popup from "@/atoms/Popup";
import GetSection from "@/wrappers/GetSection";
import { useEffect, useState } from "react";

const POPUP_DISPLAYED_KEY = "popupDisplayed";

export default function GetPage({ data }: { data: any }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem(POPUP_DISPLAYED_KEY, "true");
  };

  useEffect(() => {
    const popupDisplayed = sessionStorage.getItem(POPUP_DISPLAYED_KEY);

    if (!popupDisplayed) {
      setShowPopup(true);
    }
  }, []);

  return (
    <div className="" id="getPage">
      {data &&
        data?.map((section: any, index: number) => {
          return (
            <div key={`${index}-section`}>
              {/* {showPopup && (
                <div>
                  <Popup show={showPopup} handleClose={handleClose} />
                </div>
              )} */}
              <GetSection
                subComponent={false}
                section={section}
              />
            </div>
          );
        })}
    </div>
  );
}
