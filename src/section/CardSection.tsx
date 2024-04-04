import Card from "@/atoms/Card";
import getURL from "@/utility/getURL";
import { useRouter } from 'next/router';

function CardSection({
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
  console.log(data,'section.data000000000o')
  return (
    <>
      {column && (
        <section
          style={{
            paddingTop: data?.paddingTop ? "45px" : "0px",
          }}
          // className={subComponent ? "py-[15px]" : "outerContainer py-[45px]"}
        >
          <div className="hidden lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 lg:grid-cols-6 lg:grid-cols-8"></div>
          <div
            className={`grid grid-flow-row grid-cols-1 ${
              column !== 1 ? "sm:grid-cols-2" : ""
            } ${
              column && (`lg:grid-cols-${column}`)
            } ${containerClassName}`}
          >
            {data &&
              data?.listOfpointers.map((pointer: any) => {
                const imageUrl = getURL(pointer.icon?.asset?._ref);
                console.log(pointer.button,'data000')
                return (
                  <Card
                    shadow={data?.shadow}
                    containerClassName="mx-0 sm:mx-auto lg:mx-0"
                    icon={imageUrl ? imageUrl.url() : undefined}
                    iconDirection={pointer.position}
                    key={pointer._key}
                    title={pointer.title}
                    widthFull={data?.fullWidthIcon}
                    description={pointer.description}
                    button={pointer.button}
                  />
                );
              })}
          </div>
        </section>
      )}
    </>
  );
}

export default CardSection;
