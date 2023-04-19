import React, { useEffect } from "react";
import "./HeaderReuse.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderReuse = ({
  title,
  subtitle,
  buttonText,
  buttonProps,
  className,
}) => {
  const {
    text,
    border,
    borderColor,
    backgroundColor,
    textColor,
    fontSize,
    fontWeight,
    width,
    height,
  } = buttonProps;

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
      <div className="line-style-about"></div>
      <div className="text-container-2">
        <h1 className="text-white" data-aos="fade-up">
          {title}
        </h1>
        <p className="py-3 text-white" data-aos="fade-up">
          {subtitle}
        </p>
        <button
          style={{
            border: border,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            color: textColor,
            fontSize: fontSize + "px",
            fontWeight: fontWeight,
            width: width + "px",
            height: height + "px",
          }}
          data-aos="bounce"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeaderReuse;
