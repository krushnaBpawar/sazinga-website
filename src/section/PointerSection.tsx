import Pointer from "@/atoms/Pointer";
import getURL from "@/utility/getURL";
import { useRouter } from 'next/router';

function PointerSection({
  data,
  subComponent,
  containerClassName,
}: {
  data: any;
  subComponent: boolean;
  containerClassName?: string;
}) {
  const column = Number(data?.column);
  const router = useRouter();
  const isIGamingPath = router.asPath.includes('/i-gaming');
  return (
    <>
      {column && (
        <section
          style={{
            paddingTop: data?.paddingTop ? "45px" : "0px",
          }}
          className={subComponent ? "py-[15px]" : "outerContainer py-[45px]"}
        >
          <div className="hidden lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 lg:grid-cols-6 lg:grid-cols-8"></div>
          <div
            className={`grid grid-flow-row grid-cols-1 ${
              column !== 1 ? "sm:grid-cols-2" : ""
            } ${
              column && (isIGamingPath ? `lg:grid-cols-${column} gap-[60px] md:gap-4 lg:gap-8 xl:gap-8` : `lg:grid-cols-${column} gap-[60px] md:gap-8 lg:gap-12 xl:gap-16`)
            } ${containerClassName}`}
          >
            {data &&
              data?.listOfpointers.map((pointer: any) => {
                const imageUrl = getURL(pointer.icon?.asset?._ref);
                return (
                  <Pointer
                    shadow={data?.shadow}
                    containerClassName="mx-0 sm:mx-auto lg:mx-0"
                    icon={imageUrl ? imageUrl.url() : undefined}
                    iconDirection={pointer.position}
                    key={pointer._key}
                    title={pointer.title}
                    widthFull={data?.fullWidthIcon}
                    description={pointer.description}
                  />
                );
              })}
          </div>
        </section>
      )}
    </>
  );
}

export default PointerSection;
