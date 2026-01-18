import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { getSiteContent } from "../../getSiteContent";

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
        className="flex flex-row items-start text-[var(--contrast-c)] hover:scale-105 hover:pl-6 hover:text-[var(--contrast)]"
        onClick={() => toggle(!open)}
      >
        {<Icon size={24} className="m-[2px]" />}
        <div className="flex flex-1">
          <h4 style={{ color: "inherit" }}>{q}</h4>
        </div>
      </div>
      <p className={`pl-6 text-left ${open ? "footer-block" : "hidden"} `}>
        {a}
      </p>
    </div>
  );
};

export default function FAQs() {
  const { FAQ } = getSiteContent().home;

  return (
    <div className="flex:col flex w-full justify-center bg-[color-mix(in_srgb,var(--secondary)_60%,transparent)] bg-opacity-50 py-10">
      <div className="inner-container justify-left flex flex-col">
        <h2 className="pb-3 lg:text-left">FAQs</h2>
        {FAQ.map((faq: FaqType) => (
          <FAQItem q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  );
}
