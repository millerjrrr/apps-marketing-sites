import { getSiteContent } from "../../getSiteContent";
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
      className={`m-5 flex h-[175px] flex-col items-start justify-center rounded-2xl bg-[color-mix(in_srgb,var(--primary)_60%,transparent)] p-5 text-left lg:h-[125px] ${
        inView
          ? `animate-flyInRight ${delays[delay]}`
          : "translate-x-[60px] opacity-0"
      } `}
      style={{ boxShadow: "0 0 10px 0 var(--contrast-c)" }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const InformationBanner = () => {
  const { introductionTitle, introductionText, titles, descriptions } =
    getSiteContent().home.informationBanner;

  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="absolute z-0 h-[20px] w-full rounded-full bg-[var(--contrast-c)] opacity-100 blur-[100px]"></div>
      <div className="inner-container flex-col overflow-x-hidden lg:flex-row lg:overflow-x-visible">
        <div className="order-1 flex items-center lg:order-2">
          <div>
            <div className="h-25 m-5 flex flex-1 flex-col items-start px-5 text-left">
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

        <div className="relative order-2 flex max-w-full justify-center overflow-x-hidden lg:order-1 lg:overflow-x-visible lg:px-[60px]">
          <div className="absolute z-0 h-[100px] w-[100px] rounded-full bg-[var(--contrast-c)] opacity-100 blur-[120px] lg:h-[600px] lg:w-[600px] lg:opacity-20"></div>
          <RPhone name="sPhone" scale={350} screenshots={["2"]} />
        </div>
      </div>
    </div>
  );
};

export default InformationBanner;
