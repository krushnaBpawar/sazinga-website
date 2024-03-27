import GetSection from "@/wrappers/GetSection";

export default function RightContent({
  data,
  isReverse,
}: {
  data: any;
  isReverse: boolean | undefined;
}) {
  return (
    <div
      className={`flex flex-col items-center ${
        isReverse ? "lg:items-start" : "lg:items-end"
      }`}
    >
      {data &&
        data?.map((item: any, index: number) => {
          return (
            <GetSection
              subComponent={true}
              key={`${index}-section`}
              section={item}
            />
          );
        })}
    </div>
  );
}
