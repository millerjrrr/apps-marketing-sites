import siteContent from "../../assets/siteContent";
import { urls } from "../../assets/urls";
import RPhone from "../RPhone";

const OpenBanner = () => {
  const { title, subTitle, tagLine } = siteContent.home.openingBanner;

  return (
    <div className="w-full flex flex-1 justify-center items-center">
      <div className="inner-container opening-banner">
        <div className="animate-pulseScale inline-block block flex justify-center">
          <img className="app-icon" src="app-icon.png" />
          <h1 className="">{title}</h1>
          <p className=" pb-4 font-bold">{subTitle}</p>
          <p className=" pb-1 font-bold md:text-xl ">{tagLine}</p>
          <div className="badge-container">
            <a
              href={urls.appStore}
              className="app-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/app-store.svg" className="badge" />
            </a>
            <a
              href={urls.playStore}
              className="app-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/play-store.svg" className="badge" />
            </a>
          </div>
        </div>
        <RPhone name="iPhone" />
      </div>
    </div>
  );
};

export default OpenBanner;
