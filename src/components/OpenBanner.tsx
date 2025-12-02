import siteContent from "../assets/siteContent";
import RPhone from "./RPhone";

const OpenBanner = () => {
  const { title, subTitle, tagLine } = siteContent.home;

  return (
    <div className="opening-banner">
      <div className="animate-pulseScale inline-block block flex justify-center">
        <h1 className="">{title}</h1>
        <p className=" pb-4 font-bold">{subTitle}</p>
        <p className=" pb-1 font-bold md:text-xl ">{tagLine}</p>
        <div className="badge-container">
          <img src="images/app-store.svg" className="badge" />
          <img src="images/play-store.svg" className="badge" />
        </div>
      </div>
      <RPhone />
    </div>
  );
};

export default OpenBanner;
