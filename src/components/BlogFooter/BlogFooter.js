import React from "react";
import ContactFooter from "../ReusableComponent/ContactFooter/ContactFooter";
import ButtonReuse from "../ReusableComponent/button/button";
import "./BlogFooter.css";

function BlogFooter() {
  return (
    <>
      <div className="blog-footer-flex">
        <div className="blog-footer-flex-one">
            <div className="pt-5">
              <h3 className="newsletter-text">Join Our Newsletter</h3>
              <div className="footer-bottom-line"></div>
            </div>
            <form className="py-5 d-flex flex-column">
              <input
                className="blog-footer-name-field"
                type="text"
                placeholder="Name"
              />
              <input
                className="blog-footer-name-field"
                type="text"
                placeholder="Email"
              />
              <input
                className="blog-footer-name-field"
                type="text"
                placeholder="Email"
              />
              <div className="d-flex justify-content-end">
                <ButtonReuse
                  text="SUBSCRIBE NOW"
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
        <div className="blog-footer-flex-two">
          <ContactFooter />
        </div>
      </div>
    </>
  );
}

export default BlogFooter;
