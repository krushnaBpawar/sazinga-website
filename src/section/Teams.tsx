import Image from "next/image";

import getURL from "@/utility/getURL";

export default function Teams({ data }: { data: any }) {
  return (
    <div className="outerContainer grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] py-[45px] items-center">
      {data?.teamMembers.map((member: any, index: number) => {
        return (
          <div
            className="w-fit flex flex-col gap-[10px]"
            key={`${index}-member`}
          >
            <div className="">
              <Image
                width={400}
                height={400}
                alt="Image"
                src={getURL(member.image?.asset?._ref)?.url() ?? ""}
                className=""
              />
            </div>
            <div className="">
              <div className="flex justify-between items-center">
                <span className="text-[20px] font-semibold">{member.name}</span>
                <span className="flex gap-2">
                  {member.socialLinks.map((link: any, index: number) => {
                    return (
                      <a key={`${index}-link`} href={link.link}>
                        <Image
                          width={24}
                          height={24}
                          alt="Image"
                          src={getURL(link.icon?.asset?._ref)?.url() ?? ""}
                          className=""
                        />
                      </a>
                    );
                  })}
                </span>
              </div>
              <div className="text-p17">{member.designation}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
