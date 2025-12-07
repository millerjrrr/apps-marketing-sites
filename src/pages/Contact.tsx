import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex w-full flex-1 items-center justify-center p-5 py-20">
      <div className="inner-container flex-col items-center rounded-[30px] bg-[var(--secondary)] shadow-[0_0_10px_0_rgba(255,255,255,0.9)]">
        <h1 className="p-10">Contact</h1>
        <div className="flex flex-col items-center pb-10 lg:flex-row">
          <img
            src={`images/jacob-profile.jpg`}
            alt="Your Name"
            className="profile-image ml-5"
          />
          <div className="mt-5 flex flex-col rounded-[30px] border-[3px] border-[var(--contrast)] p-5 pl-5 lg:ml-5">
            <p className="md-text-left text-center">
              <strong>Hi, I'm Jacob,</strong> professional poker player since
              2018, amateur software developer and the creator of Griddier.
            </p>
            <div className="h-2" />
            <p className="md-text-left text-center">
              Griddier is a simple but powerful app that has allowed me and now
              others to memorize complex preflop grids. Perfectly!
            </p>
          </div>
          <div className="flex flex-col p-5">
            <div className="personal-detail">
              <MdEmail className="mr-2 text-lg text-[var(--contrast-c)]" />
              <p>jacob@griddier.com</p>
            </div>
            <div className="personal-detail">
              <FaLinkedin className="mr-2 text-lg text-[var(--contrast-c)]" />
              <a
                href="https://www.linkedin.com/in/jacobmiller93/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div className="personal-detail">
              <FaGithub className="mr-2 text-lg text-[var(--contrast-c)]" />
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
