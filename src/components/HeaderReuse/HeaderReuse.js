import React, { useEffect } from "react";
import "./HeaderReuse.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonReuse from "../../components/button/button";
const HeaderReuse = ({
  title,
  subtitle,
  className,
}) => {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
    });
    window.addEventListener("scroll", AOS.refresh);
    return () => {
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);

  return (
    <div className={className}>
      {/* <div className="line-style-about"></div> */}
      <div className="text-container-2">
        <h1 className="heading-reuse" data-aos="fade-up">
          {title}
        </h1>
        <p className="py-3 heading-reuse-text" data-aos="fade-up">
          {subtitle}
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
          width="200"
          height="42"
        />
      </div>
    </div>
  );
};

export default HeaderReuse;
