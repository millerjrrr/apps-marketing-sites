import { FaMinus, FaPlus } from "react-icons/fa";
import siteContent from "../../assets/siteContent";
import { useState } from "react";

interface FaqType {
  q: `${string}?`;
  a: string;
}

const FAQItem: React.FC<FaqType> = ({ q, a }) => {
  const [open, toggle] = useState(false);

  const Icon = open ? FaMinus : FaPlus;

  return (
    <div className="flex flex-col p-1">
      <div
        className="flex flex-row items-start hover:scale-105 hover:text-CONTRASTB"
        onClick={() => toggle(!open)}
      >
        {<Icon size={24} className="m-[2px] text-WHITE" />}
        <div className="flex flex-1">
          <h4>{q}</h4>
        </div>
      </div>
      <p className={`pl-6 text-left ${open ? "footer-block" : "hidden"}`}>
        {a}
      </p>
    </div>
  );
};

export default function FAQs() {
  const { FAQ } = siteContent.home;

  return (
    <div className="flex:col flex w-full justify-center bg-SECONDARY py-10">
      <div className="inner-container justify-left flex flex-col">
        <h2 className="pb-3 lg:text-left">FAQs</h2>
        {FAQ.map((faq: FaqType) => (
          <FAQItem q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  );
}
