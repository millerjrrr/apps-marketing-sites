import { getSiteContent, getSiteKey } from "../../getSiteContent";
import BadgeContainer from "../BadgeContainer";
import RPhone from "../RPhone";

const OpenBanner = () => {
  const siteKey = getSiteKey();

  const { title, subTitle, tagLine } = getSiteContent().home.openingBanner;

  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="inner-container opening-banner overflow-x-hidden md:overflow-x-visible">
        <div className="inline-block flex w-full animate-pulseScale flex-col items-center justify-center text-center">
          <img className="app-icon" src={`app-specific/${siteKey}/icon.png`} />
          <h1 className="italic">{title}</h1>
          <p className="pb-4 font-bold">{subTitle}</p>
          <p className="pb-1 font-bold md:text-xl">{tagLine}</p>
          <BadgeContainer />
        </div>
        <div className="flex items-center justify-center overflow-x-hidden md:flex-row md:overflow-x-visible">
          <div className="absolute z-0 h-[100px] w-[100px] rounded-full bg-[var(--tertiary)] opacity-100 blur-[120px] md:h-[600px] md:w-[600px] md:opacity-20"></div>
          <RPhone name="iPhone" />
        </div>
      </div>
    </div>
  );
};

export default OpenBanner;
