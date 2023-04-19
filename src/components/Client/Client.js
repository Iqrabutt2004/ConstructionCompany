import React from "react";
import { Container } from "react-bootstrap";
import Clients from "../../assets/images/Clients.svg";
import ClientCard from "../../components/ClientCard/ClientCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Client() {
  return (
    <section className="py-4 service-bgClr">
      <Container>
        <div className="text-center pb-5">
          <h3>Client Testimonials</h3>
          <div className="line-style-5"></div>
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={false}
          swipeable={true}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          responsive={[
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          <div className="d-flex">
            <ClientCard />
            <ClientCard />
            <ClientCard />
          </div>
        </Carousel>
        <div className="py-5 d-flex justify-content-center">
          <img className="img-fluid " src={Clients} alt="" />
        </div>
      </Container>
    </section>
  );
}

export default Client;
