import React from 'react'
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Location from "../../assets/images/location.svg";
import Phone from "../../assets/images/phone.svg";
import Mail from "../../assets/images/mail.svg";
import ButtonReuse from "../button/button";
import "./BlogFooter.css";

function BlogFooter() {
  return (
    <div className="parent-flex">
      <div className="footer-flex-1 footer-clr ">
        <div className="max-width-footer">
          <p className="newsletter-text">Join Our Newsletter</p>
          <div className="line-footer"> </div>
          <form className="py-5">
            <div className="inputBlog-flex ">
              <input className="text-field-3" type="text" placeholder="Name" />
              <input
                className="text-field-3"
                type="text"
                placeholder="Surname"
              />
              <input className="text-field-3" type="text" placeholder="Email" />
            </div>
            <div className="d-flex justify-content-end ">
              <ButtonReuse
                text="SUBSCRIBE NOW"
                border="4px"
                borderColor="white"
                backgroundColor="#FFB400"
                textColor="white"
                fontSize="14"
                fontWeight="600"
                padding="2px 12.6rem"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="footer-flex-2">
        <div className="upper-clr py-4">
          <div className="d-flex justify-content-center">
            <img className="cursor-icon social-icons " src={Facebook} alt="" />
            <img className="cursor-icon social-icons " src={Twitter} alt="" />
            <img className="cursor-icon" src={Linkedin} alt="" />
          </div>
        </div>
        <div className="d-flex flex-column Footer-details">
          <div className="pt-4">
            <img src={Location} alt="" />
            <span className="footer-call">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="pt-4">
            <img src={Phone} alt="" />
            <span className="footer-call">+00 123 456 78</span>
          </div>
          <div className="pt-4">
            <img src={Mail} alt="" />
            <span className="footer-call">constractioninc@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogFooter