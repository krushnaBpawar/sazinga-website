import Button, { ButtonProps } from "@/atoms/Button";



export type ButtonLayoutProps = {
  data: {
    button: {
      showprimarybutton: boolean;
      showsecondarybutton: boolean;
      primaryButton: ButtonProps;
      secondaryButton: ButtonProps;
      buttonLayout: string;
    };
    horizontalAlign: string;
    verticalAlign?: string;
  };
};

export default function ButtonLayout({ data }: ButtonLayoutProps) {
  return (
    <>
      {data && (
        <div
          className={`flex gap-3 my-6 ${
            data?.button?.buttonLayout == "column"
              ? "flex-col"
              : "flex-col lg:flex-row"
          } ${
            data?.horizontalAlign == "center"
              ? "mx-auto"
              : data?.horizontalAlign == "right"
              ? "ml-auto"
              : "mr-auto"
          }`}
        >
          {data?.button?.showprimarybutton && (
            <Button
              arrow={data?.button.primaryButton.arrow}
              label={data?.button.primaryButton.label}
              type={data?.button.primaryButton.type}
              link={data?.button.primaryButton.link}
            />
          )}
          {data?.button?.showsecondarybutton && (
            <Button
              arrow={data?.button.secondaryButton.arrow}
              label={data?.button.secondaryButton.label}
              type={data?.button.secondaryButton.type}
              link={data?.button.secondaryButton.link}
            />
          )}
        </div>
      )}
    </>
  );
}
