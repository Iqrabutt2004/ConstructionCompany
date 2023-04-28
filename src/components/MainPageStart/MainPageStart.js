import React from 'react'
import "./MainPageStart.css";
import MainPagePic from "../../assets/images/MainPageImg.png";
import HeaderReuse from '../../components/HeaderReuse/HeaderReuse';
import ConstructionReuse from "../../components/ConstructionReuse/ConstructionReuse";
import MainOne from "../../assets/images/Main-1.svg";
import MainTwo from "../../assets/images/Main-2.svg";
import MainThree from "../../assets/images/Main-3.svg";
const MainPageStart = () => {
  return (
    <div>
      <div className="MainStartFlex">
        <div className="p-0 MainStartFlex-1">
          <div
            className="main-container"
            style={{ backgroundImage: `url(${MainPagePic})` }}
          >
            <div className="reuseFlex  p-0">
              <HeaderReuse
                title={<>Construction</>}
                subtitle={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    quis egestas <br /> pellentesque libero dolor in diam
                    consequat ut. Mi nibh amet viverra <br /> id aliquet neque
                    odio.
                  </>
                }
                buttonText="VIEW OUR WORK"
                buttonProps={{
                  text: "GET A FREE QUOTE",
                  border: "0px",
                  borderColor: "#FFB400",
                  backgroundColor: "#FFB400",
                  textColor: "white",
                  fontSize: "14",
                  fontWeight: "600",
                  width: "180",
                  height: "42",
                }}
                className="custom-class-2"
              />
            </div>
          </div>
        </div>
        <div className="clr-main p-0 MainStartFlex-2">
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
    </div>
  );
};

export default MainPageStart
