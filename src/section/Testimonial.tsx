import { colors } from "@/utility/constants";
import GetSection from "@/wrappers/GetSection";

export default function TestimonialSection({
  data,
  subComponent,
}: {
  data: any;
  subComponent: boolean;
}) {
  return (
    <section
      style={{
        backgroundColor:
          colors[data?.testimonialBackground as keyof typeof colors],
      }}
      className={`${subComponent ? "py-[15px] md:pt-[90px]" : "outerContainer py-[90px]"}`}
    >
      <div className={`flex flex-col gap-[45px]`}>
        {data?.testimonialItems &&
          data?.testimonialItems.map((section: any, index: number) => {
            return (
              <GetSection
                subComponent={true}
                key={`${index}-section`}
                section={section}
              />
            );
          })}
      </div>
    </section>
  );
}
