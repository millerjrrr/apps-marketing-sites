import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { getSiteContent } from "../getSiteContent";

const Contact = () => {
  const { email, description } = getSiteContent().contact;

  return (
    <div className="flex w-full flex-1 items-center justify-center p-5 py-20">
      <div
        className="inner-container flex-col items-center rounded-[30px] bg-[color-mix(in_srgb,var(--secondary)_60%,transparent)]"
        style={{ boxShadow: "0 0 10px 0 var(--contrast-c)" }}
      >
        <h1 className="p-10">Contact</h1>
        <div className="flex flex-col items-center pb-10 lg:flex-row">
          <img
            src={`images/jacob-profile.jpg`}
            alt="Your Name"
            className="profile-image ml-5"
          />
          <div className="mt-5 flex flex-col rounded-[30px] border-[3px] border-[var(--contrast)] bg-[color-mix(in_srgb,var(--primary)_60%,transparent)] p-5 pl-5 lg:ml-5">
            <p className="whitespace-pre-line text-center">{description}</p>
          </div>
          <div className="flex flex-col p-5">
            <div className="personal-detail">
              <MdEmail className="mr-2 text-lg text-[var(--contrast-c)]" />
              <p className="whitespace-nowrap">{email}</p>
            </div>
            <div className="personal-detail app-link">
              <FaLinkedin className="mr-2 text-lg text-inherit" />
              <a
                href="https://www.linkedin.com/in/jacobmiller93/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div className="personal-detail app-link">
              <FaGithub className="mr-2 text-lg text-inherit" />
              <a href="https://github.com/millerjrrr" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
