import React from "react";
import MainPagePic from "../../assets/images/MainPageImg.png";
import ButtonReuse from "../ReusableComponent/button/button";
import ConstructionReuse from "../ReusableComponent/ConstructionReuse/ConstructionReuse";
import MainOne from "../../assets/images/Main-1.svg";
import MainTwo from "../../assets/images/Main-2.svg";
import MainThree from "../../assets/images/Main-3.svg";
import "./MainPageStart.css";

const MainPageStart = () => {
  return (
    <>
      <div className="main-banner-flex">
        <div className="p-0 main-banner-flex-one">
          <div
            className="main-container"
            style={{ backgroundImage: `url(${MainPagePic})` }}
          >
            <div className="main-banner-design">
              <h1 className="main-banner-heading" data-aos="fade-up">
                Construction
              </h1>
              <p className="main-banner-text" data-aos="fade-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                egestas <br /> pellentesque libero dolor in diam consequat ut.
                Mi nibh amet viverra id <br /> aliquet neque odio.
              </p>
              <ButtonReuse
                className="hvr-bob hvr-shutter-out-horizontal"
                text="VIEW OUR WORK"
                border="4px"
                borderColor="#FFB400"
                backgroundColor="#FFB400"
                textColor="#fff"
                fontSize="14"
                fontWeight="500"
                padding="8px 2.5rem"
              />
            </div>
          </div>
        </div>
        <div className="clr-main p-0 main-banner-flex-two">
          <div className="mx-3">
            <h4 className="text-services">Our Services</h4>
            <div className="py-3 px-3">
              <ConstructionReuse
                imageSrc={MainOne}
                title="Building Construction"
                subtitle={
                  <>
                    Lorem ipsum dolor sit
                    <br /> consectetur adipiscing elit.
                  </>
                }
                isFlex={true}
                titleTextColor="black"
                subtitleTextColor="white"
                className="custom-class-1"
              />
            </div>
            <div className="py-3 px-3">
              <ConstructionReuse
                imageSrc={MainTwo}
                title="Foundation Work"
                subtitle={
                  <>
                    Lorem ipsum dolor sit
                    <br /> consectetur adipiscing elit.
                  </>
                }
                isFlex={true}
                titleTextColor="black"
                subtitleTextColor="white"
                className="custom-class-1"
              />
            </div>
            <div className="py-3 px-3">
              <ConstructionReuse
                imageSrc={MainThree}
                title="Site Management"
                subtitle={
                  <>
                    Lorem ipsum dolor sit
                    <br /> consectetur adipiscing elit.
                  </>
                }
                isFlex={true}
                titleTextColor="black"
                subtitleTextColor="white"
                className="custom-class-1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPageStart;
