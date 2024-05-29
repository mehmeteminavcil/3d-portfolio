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
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo leo odio, eget consectetur tellus ullamcorper et. Nam non dictum neque. Etiam quis nulla pellentesque, ultrices arcu quis, facilisis ex."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text=" Etiam quis nulla pellentesque, ultrices arcu quis, facilisis ex."
      link="/projects"
      btnText="Learn more"
    />
  ),
  4: (
    <InfoBox
      text="Nam non dictum neque. "
      link="/contact"
      btnText="Learn more"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
