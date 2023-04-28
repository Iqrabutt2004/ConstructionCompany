import { useEffect } from "react";
import "../../assets/css/hover-min.css";
import "../../assets/css/hover.css";
import "./HomeMain.css";
import HomeMainImg from "../../assets/images/home-head.png";
import ButtonReuse from "../../components/button/button";
const HomeMain = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${HomeMainImg})` }}
    >
      <div className="">
        <div className="text-container">
          <div className="line-style-home"></div>
          <h1 data-aos="fade-up">Construction Inc</h1>
          <p className="py-3" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat
            <br /> consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
          <ButtonReuse
            className=" btn-after hvr-bob hvr-shutter-out-horizontal"
            text="VIEW OUR WORK"
            border="0px"
            borderColor="#FFB400"
            backgroundColor="#FFB400"
            textColor="white"
            fontSize="14"
            fontWeight="600"
            width="180"
            height="42"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
