import GetSection from "@/wrappers/GetSection";

export default function FlipCardLayout({ data }: { data: any }) {
  return (
    <div className="scrolling-sections-wrapper">
      {data?.flipCards &&
        data?.flipCards.map((section: any, index: number) => {
          return (
            <div className="fullscreen-wrapper">
              <GetSection
                subComponent={true}
                key={`${index}-section`}
                section={section}
              />
            </div>
          );
        })}
    </div>
  );
}
