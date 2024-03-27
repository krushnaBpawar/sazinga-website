import GetSection from "@/wrappers/GetSection";

export function LeftContent({ data }: { data: any }) {
  return (
    <div className="flex flex-col">
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
