import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogMain from "../../assets/images/BlogHeadImg.png";
import AvatarOne from "../../assets/images/avatar-1.svg";
import AvatarTwo from "../../assets/images/avatar-2.svg";
import AvatarThree from "../../assets/images/avatar-3.svg";
import AvatarFour from "../../assets/images/avatar-4.svg";
import AvatarFive from "../../assets/images/avatar-5.svg";
import AvatarSix from "../../assets/images/avatar-6.svg";
import Cards from "../ReusableComponent/cards/cards";
import "./blogHeader.css";

const BlogHeader = () => {
  return (
    <>
      <div
        className="blog-container"
        style={{ backgroundImage: `url(${BlogMain})` }}
      >
        <div className="blog-banner-design">
          <h1 className="blog-banner-heading" data-aos="fade-up">
            News
          </h1>
        </div>
      </div>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg={3}>
              <Cards
                imageSrc={AvatarOne}
                title="Nunc Volutpat Venenatis"
                date="May 9, 2014"
                category="Category"
                description="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi."
              />
              <Cards
                imageSrc={AvatarFour}
                title="Nunc Volutpat Venenatis"
                date="May 9, 2014"
                category="Category"
                description="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Maecenas urna sapien, dignissim a augue vitae, porttitor luctus urna. Morbi scelerisque semper congue. "
              />
            </Col>
            <Col lg={3}>
              <Cards
                imageSrc={AvatarTwo}
                title="Vestibulum Nisl Felis"
                date="May 9, 2014"
                category="Category"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
              />
              <Cards
                imageSrc={AvatarFive}
                title="Donec Sit Amet Nibh"
                date="May 9, 2014"
                category="Category"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.   "
              />
            </Col>
            <Col lg={3}>
              <Cards
                imageSrc={AvatarThree}
                title="Proin Eu Augue Efficitur"
                date="May 9, 2014"
                category="Category"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.  "
              />
              <Cards
                imageSrc={AvatarSix}
                title="Maecenas Fringilla Augue"
                date="May 9, 2014"
                category="Category"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.Donec quis felis imperdiet, vestibulum est ut, pulvinar dolor.   "
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogHeader;
