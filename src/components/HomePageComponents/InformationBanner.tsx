import siteContent from "../../assets/siteContent";
import { useInView } from "../../hooks/useInView";
import RPhone from "../RPhone";

const BannerCard: React.FC<{
  title: string;
  description: string;
  delay?: number;
}> = ({ title, description, delay = 0 }) => {
  const delays = ["delay-100", "delay-200", "delay-300"];

  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`
        bg-PRIMARY shadow-[0_0_20px_0_rgba(255,255,255,0.9)]
        h-[175px] md:h-[125px]
        flex flex-col items-start justify-center
        m-5 p-5 text-left rounded-2xl
        ${
          inView
            ? `animate-flyInRight ${delays[delay]}`
            : "opacity-0 translate-x-[60px]"
        }
      `}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const InformationBanner = () => {
  const { introductionTitle, introductionText, titles, descriptions } =
    siteContent.home.informationBanner;

  return (
    <div className="bg-SECONDARY w-full flex flex-1 justify-center items-center">
      <div className="inner-container flex-col md:flex-row">
        <div className="flex items-center order-1 md:order-2">
          <div>
            <div className="h-25 flex flex-1 flex-col items-start m-5  px-5  text-left">
              <h3>INTRODUCTION</h3>
              <h2>{introductionTitle}</h2>
              <p>{introductionText}</p>
            </div>
            {[...Array(3)].map((_, index) => (
              <BannerCard
                key={index}
                title={titles[index]}
                description={descriptions[index]}
                delay={index}
              />
            ))}
          </div>
        </div>

        <div className="md:px-[60px] flex justify-center order-2 md:order-1">
          <RPhone name="sPhone" />
        </div>
      </div>
    </div>
  );
};

export default InformationBanner;
