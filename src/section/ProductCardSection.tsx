import Productcard from "@/atoms/ProductCard";
import getURL from "@/utility/getURL";

function ProductCardSection({ data, subComponent, containerClassName }: { data: any; subComponent: boolean; containerClassName?: string }) {
  const column = Number(data?.column);
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
            className={`grid grid-flow-row grid-cols-1 ${column !== 1 ? "sm:grid-cols-2" : ""} ${
              column && `lg:grid-cols-${column}`
            } gap-[60px] sm:gap-8 lg:gap-12 xl:gap-16 ${containerClassName}`}
          >
            {data &&
              data?.listOfProductCards.map((productCard: any) => {
                const imageUrl = getURL(productCard.image?.asset?._ref);
                return (
                  <Productcard
                    shadow={data?.shadow}
                    containerClassName="mx-0 sm:mx-auto lg:mx-0"
                    image={imageUrl ? imageUrl.url() : undefined}
                    textDirection={productCard.textPosition}
                    ctaButton={productCard.ctaButton}
                    showCTAButton={productCard.showCTAButton}
                    key={productCard._key}
                    title={productCard.title}
                    widthFull={data?.fullWidthImage}
                    description={productCard.description}
                  />
                );
              })}
          </div>
        </section>
      )}
    </>
  );
}

export default ProductCardSection;
