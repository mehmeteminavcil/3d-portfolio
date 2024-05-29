import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium text-center sm:text-xl">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="object-contain w-4 h-4" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="px-8 py-4 mx-5 text-center text-white sm:text-xl sm:leading-snug neo-brutalism-blue">
      Hi,I am <span className="font-semibold">Emin</span>
      <br />
      Junior Software Developer
    </h1>
  ),
  2: (
    <InfoBox
      text="About me section is the best way to introduce yourself to the world. Click here to learn more about me."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text=" Projects are the best way to showcase your skills and experience. Check out some of my projects here."
      link="/projects"
      btnText="Learn more"
    />
  ),
  4: (
    <InfoBox
      text="Contact me for any inquiries or collaborations. I am always open to new projects and opportunities."
      link="/contact"
      btnText="Contact me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
