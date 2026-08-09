import BulletPoint from "../components/BulletPoint";
import { getSiteContent } from "../getSiteContent";

const PolicyPage: React.FC<{
  type: "termsAndConditions" | "privacyPolicy";
}> = ({ type }) => {
  const { description, bullets } = getSiteContent()[type];

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <div className="header-filler" />
      <div className="inner-container">
        <div className="t-and-c">
          <h1 className="text-left">
            {type === "termsAndConditions"
              ? "Terms and Conditions"
              : "Privacy Policy"}
          </h1>
          <p className="pb-5 pl-2 md:pl-10">Effective Date: July 1, 2026</p>
          <p className="py-4">{description}</p>
          <div className="t-and-c-scroll-wrapper">
            <div className="t-and-c-scroll">
              {bullets.map((bullet, _index) => (
                <BulletPoint
                  index={_index + 1}
                  title={bullet.title}
                  description={bullet.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
