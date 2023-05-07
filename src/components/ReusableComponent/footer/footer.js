import React from "react";
import ButtonReuse from "../button/button";
import ContactFooter from "../ContactFooter/ContactFooter";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="parent-flex">
        <div className="footer-flex-one">
          <div className="max-width-footer">
            <h3>Contact Us</h3>
            <div className="footer-bottom-line"></div>
            <form className="py-5">
              <div className="input-flex">
                <input
                  className="footer-name-field"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="footer-name-field"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="footer-message-field"
                type="text"
                placeholder="Message"
              />
              <div className="d-flex justify-content-end">
                <ButtonReuse
                  text="SEND MESSAGE"
                  border="4px"
                  borderColor="white"
                  backgroundColor="#FFB400"
                  textColor="white"
                  fontSize="14"
                  fontWeight="600"
                  padding="2px 1.5rem"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="footer-flex-two">
          <ContactFooter />
        </div>
      </div>
    </>
  );
}

export default Footer;
