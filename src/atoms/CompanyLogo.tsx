import Image from "next/image";
import { useRouter } from "next/router";

export default function CompanyLogo({ url }: { url: string | undefined }) {
  const router = useRouter();
  if (!url) return undefined;
  return (
    <Image
      className="cursor-pointer"
      onClick={() => {
        router.push("/");
      }}
      width={150}
      height={70}
      alt="Optimus"
      src={url}
    />
  );
}
