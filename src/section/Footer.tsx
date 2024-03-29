import Image from "next/image";
import React from "react";

import CompanyLogo from "@/atoms/CompanyLogo";
import getURL from "@/utility/getURL";

export default function Footer({ data }: { data: any }) {
  const leftSection = data?.primaryFooter?.leftSection;
  const rightSection = data?.primaryFooter?.rightSection;
  const addressList = data?.primaryFooter?.addressList;
  const secondaryFooter = data?.secondaryFooter;
  return (
    <>
      {data && (
        <div id="footer" className="bg-black text-alt z-20 relative w-[100%]">
          {data?.showPrimaryFooter && (
            <div className="outerContainer flex flex-col md:flex-row flex-wrap items-start justify-between mx-auto pb-16 pt-[90px]">
              <div className="flex flex-col w-full lg:w-[45%] xl:w-[30%]">
                <CompanyLogo url={getURL(leftSection.logo.asset._ref)?.url()} />
                <p className="text-p16 w-[75%] mt-4 text-400">{leftSection.description}</p>
                <a href={`mailto:${leftSection.email}`} className="text-p16 mt-4 text-400">
                  {leftSection.email}
                </a>
                {/* <p className="text-p16 mt-4 text-400">{leftSection.phone}</p> */}
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap sm:justify-between xl:justify-evenly w-full lg:w-[55%] xl:w-5/12 gap-6 mt-6 lg:mt-0">
                {rightSection.map((item: any) => {
                  return (
                    <div key={item._key} className="flex flex-col font-medium gap-1">
                      <h6 className="text-p17 mb-2">{item.title}</h6>
                      {item.sectionItems.map((element: any) => {
                        return (
                          <a key={element._key} href={element.link} className="text-p16">
                            {element.title}
                          </a>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-1 w-full xl:w-[25%] font-medium mt-9 xl:mt-0">
                <h6 className="text-p17 mb-2">{addressList.title}</h6>
                <ul className="addressList list-none p-0">
                  {addressList.addresses.map((element: any) => {
                    return (
                      <li key={element._key} className="flex items-start gap-2 mb-3 ">
                        <Image src="/map-marker.svg" width={16} height={16} alt="Location" className="h-4 w-4 mt-[5px]" />
                        <p className="text-[14px]">{element.addressDetails}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
          {data?.showSecondaryFooter && (
            <div className="border-t-2 border-[#293056]">
              <div className="outerContainer flex flex-col md:flex-row justify-between md:items-center py-5 gap-4 h-full mx-auto">
                <div className="flex flex-col md:flex-row md:items-center gap-6 text-p16">
                  <p>{secondaryFooter.copyright}</p>
                  {secondaryFooter.links.map((item: any) => {
                    return (
                      <a key={item._key} href={item.link} className="text-p16" target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4">
                  {secondaryFooter.socialLinks.map((item: any) => {
                    const imageUrl = getURL(item.icon.asset._ref);
                    if (!imageUrl) return undefined;
                    return (
                      <a key={item._key} href={item.link} className="text-p16" target="_blank" rel="noreferrer">
                        <Image width={25} height={25} alt={item.title} src={imageUrl.url()} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

           {/* LinkedIn Insight Tag script */}
           <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                _linkedin_partner_id = "5999777";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              `,
            }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(l) {
                  if (!l) {
                    window.lintrk = function(a,b) { window.lintrk.q.push([a,b]) };
                    window.lintrk.q=[];
                  }
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";
                  b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);
                })(window.lintrk);
              `,
            }}
          ></script>
          {/* End LinkedIn Insight Tag script */}

          {/* LinkedIn Insight Tag noscript */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src="https://px.ads.linkedin.com/collect/?pid=5999777&fmt=gif"
            />
          </noscript>
        </div>
      )}
    </>
  );
}
