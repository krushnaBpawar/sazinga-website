import { useEffect } from "react";

export default function HeroVideo({ data }: { data: any }) {
  useEffect(() => {
    try {
      const video2 = document.getElementById("video2") as HTMLVideoElement;
      if (video2) {
        video2.play();
      }
    } catch (err) {
      console.log("error", err);
    }
  });
  return (
    <div className="lg-outercontainer">
      <video id="video1" autoPlay muted={true} loop={true} controls={false} playsInline className="w-full h-full object-cover rounded">
        <source src={data?.videoUrlDesktop} />
      </video>
      <video id="video2" autoPlay muted={true} loop={true} controls={false} playsInline className="w-full h-full object-cover rounded">
        <source src={data?.videoUrlMobile} />
      </video>
    </div>
  );
}
