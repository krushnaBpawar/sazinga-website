import { colors } from "@/utility/constants";

export default function LineBreak({
  subComponent,
  data,
}: {
  subComponent: boolean;
  data: any;
}) {
  return (
    <section
      style={
        data && {
          marginBottom: `${data?.marginBottom}px`,
          marginTop: `${data?.marginTop}px`,
          backgroundColor: colors[data?.lineColor as keyof typeof colors],
        }
      }
      className={`h-[1px] ${subComponent ? "w-full" : "mx-[108px]"}`}
    ></section>
  );
}
