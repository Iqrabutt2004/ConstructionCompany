import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Plus from "../../assets/images/plus.svg";
import Minus from "../../assets/images/minus.svg";
import "./CardFaq.css";

function CardFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="card-faq">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header
            onClick={() => handleAccordionToggle(0)}
            className={activeIndex === 0 ? "active" : ""}
          >
            <div className="d-flex justify-content-between">
              <div className="py-3">
                <h6 className="card-title">
                  Donec rutrum congue leo eget malesuada?
                </h6>
              </div>
              <div className="d-flex">
                {activeIndex === 0 ? (
                  <img className="img-fluid minus" src={Minus} alt="" />
                ) : (
                  <img className="img-fluid plus" src={Plus} alt="" />
                )}
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body eventKey="0">
            <p className="card-text text-muted pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header
            onClick={() => handleAccordionToggle(1)}
            className={activeIndex === 1 ? "active" : ""}
          >
            <div className="d-flex justify-content-between">
              <div className="py-3">
                <h6 className="card-title">
                  Donec rutrum congue leo eget malesuada?
                </h6>
              </div>
              <div className="d-flex">
                {activeIndex === 0 ? (
                  <img className="img-fluid minus" src={Minus} alt="" />
                ) : (
                  <img className="img-fluid plus" src={Plus} alt="" />
                )}
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body eventKey="1">
            <p className="card-text text-muted pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header
            onClick={() => handleAccordionToggle(1)}
            className={activeIndex === 2 ? "active" : ""}
          >
            <div className="d-flex justify-content-between">
              <div className="py-3">
                <h6 className="card-title">
                  Donec rutrum congue leo eget malesuada?
                </h6>
              </div>
              <div className="d-flex">
                {activeIndex === 0 ? (
                  <img className="img-fluid minus" src={Minus} alt="" />
                ) : (
                  <img className="img-fluid plus" src={Plus} alt="" />
                )}
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body eventKey="3">
            <p className="card-text text-muted pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header
            onClick={() => handleAccordionToggle(1)}
            className={activeIndex === 3 ? "active" : ""}
          >
            <div className="d-flex justify-content-between">
              <div className="py-3">
                <h6 className="card-title">
                  Donec rutrum congue leo eget malesuada?
                </h6>
              </div>
              <div className="d-flex">
                {activeIndex === 0 ? (
                  <img className="img-fluid minus" src={Minus} alt="" />
                ) : (
                  <img className="img-fluid plus" src={Plus} alt="" />
                )}
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body eventKey="3">
            <p className="card-text text-muted pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header
            onClick={() => handleAccordionToggle(1)}
            className={activeIndex === 4 ? "active" : ""}
          >
            <div className="d-flex justify-content-between">
              <div className="py-3">
                <h6 className="card-title">
                  Donec rutrum congue leo eget malesuada?
                </h6>
              </div>
              <div className="d-flex">
                {activeIndex === 0 ? (
                  <img className="img-fluid minus" src={Minus} alt="" />
                ) : (
                  <img className="img-fluid plus" src={Plus} alt="" />
                )}
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body eventKey="4">
            <p className="card-text text-muted pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CardFaq;
