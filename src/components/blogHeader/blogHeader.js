import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./blogHeader.css";
import BlogMain from "../../assets/images/BlogHeadImg.png";
import AvatarOne from "../../assets/images/avatar-1.svg";
import AvatarTwo from "../../assets/images/avatar-2.svg";
import AvatarThree from "../../assets/images/avatar-3.svg";
import AvatarFour from "../../assets/images/avatar-4.svg";
import AvatarFive from "../../assets/images/avatar-5.svg";
import AvatarSix from "../../assets/images/avatar-6.svg";
import Cards from "../cards/cards";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogHeader = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        className="blog-container"
        style={{ backgroundImage: `url(${BlogMain})` }}
      >
        <h1 className="heading-reuse news-style" data-aos="fade-up">
          News
        </h1>
      </div>
      <Container className="py-5">
        <Row className="d-flex justify-content-evenly">
          <Col lg={3} style={{ width: "27%" }}>
            <Cards
              imageSrc={AvatarOne}
              title="Nunc Volutpat Venenatis"
              date="May 9, 2014"
              category="Category"
              description="Nulla a odio sed magna congue condimentum. Pellentesque
        convallis enim nec libero vulputate, et rhoncus urna placerat.
        Phasellus mattis, diam vel vehicula facilisis, erat leo
        dapibus augue, at mollis tellus ex non nisi."
            />
          </Col>
          <Col lg={3} style={{ width: "27%" }}>
            <Cards
              imageSrc={AvatarTwo}
              title="Vestibulum Nisl Felis"
              date="May 9, 2014"
              category="Category"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. "
            />
          </Col>
          <Col lg={3} style={{ width: "27%" }}>
            <Cards
              imageSrc={AvatarThree}
              title="Proin Eu Augue Efficitur"
              date="May 9, 2014"
              category="Category"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.  "
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-evenly">
          <Col lg={4} style={{ width: "27%" }}>
            <Cards
              imageSrc={AvatarFour}
              title="Nunc Volutpat Venenatis"
              date="May 9, 2014"
              category="Category"
              description="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Maecenas urna sapien, dignissim a augue vitae, porttitor luctus urna. Morbi scelerisque semper congue. "
            />
          </Col>
          <Col lg={4} style={{ width: "27%" }}>
            <Cards
              imageSrc={AvatarFive}
              title="Donec Sit Amet Nibh"
              date="May 9, 2014"
              category="Category"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.   "
            />
          </Col>
          <Col lg={4} style={{ width: "27%" }}>
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
    </div>
  );
};

export default BlogHeader;
