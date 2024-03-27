interface PositionHZ {
  center: string;
  left: string;
  right: string;
}

interface PositionVT {
  top: string;
  center: string;
  bottom: string;
}

const positionHZ: PositionHZ = {
  center: "items-center text-center mx-auto",
  left: "items-left text-left mr-auto",
  right: "items-right text-right ml-auto",
};

const positionVT: PositionVT = {
  top: "mb-auto",
  center: "my-auto",
  bottom: "mt-auto",
};

type HeadingProps = {
  preTitle?: string;
  title?: string;
  headingType?: "h1" | "h2";
  description?: string;
  horizontalAlign: "center" | "left" | "right";
  verticalAlign: "top" | "center" | "bottom";
  textPosition: "center" | "left" | "right";
};
export default function Heading({
  data,
  subComponent,
}: {
  data: HeadingProps;
  subComponent?: boolean;
}) {
  const TitleElement = data?.headingType || "h1";
  return (
    <section className={subComponent ? "" : "py-[45px] outerContainer"}>
      {data && (
        <div
          className={`flex flex-col ${positionHZ[data?.horizontalAlign]}
          ${positionVT[data?.verticalAlign]} 
          gap-[16px] w-fit`} // Fix 16px
        >
          {data?.preTitle && (
            <h4 className={`font-semibold ${positionHZ[data?.textPosition]}`}>
              {data?.preTitle}
            </h4>
          )}
          {data?.title && (
            <TitleElement
              className={`${positionHZ[data?.textPosition]} max-w-[800px]`}
            >
              {data?.title}
            </TitleElement>
          )}
          {data?.description && (
            <p
              className={`break-words text-lg max-w-[600px] ${
                positionHZ[data?.textPosition]
              }`}
            >
              {data?.description}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
