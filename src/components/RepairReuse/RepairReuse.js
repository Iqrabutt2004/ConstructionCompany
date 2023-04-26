import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonReuse from "../../components/button/button";
import "./RepairReuse.css";

const RepairReuse = ({
  title,
  description,
  button1Text,
  button1BgColor,
  button2Text,
  button2BgColor,
  className,
}) => {
  return (
    <div className="float-repair">
      <div className="card service-bgClr width-set">
        <div className="padding-set ">
          <div className="text-color ">
            <h3 className="pt-4">{title}</h3>
            <div className="line-style-4"></div>
            <p className="pt-4 pb-3">{description}</p>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>Lectus erat consectetur </li>
                  <li>Eu sapien eget </li>
                  <li>Rhoncus consectetur</li>
                  <li>Proin cursus </li>
                  <li> Dolor a mollis consectetur</li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul>
                  <li> Risus dolor fermentum</li>
                  <li> Massa a commodo </li>
                  <li>Elit dui sit amet risus</li>
                  <li> Maecenas ornare </li>
                  <li> Nisl a tortor ultrices</li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul>
                  <li> Bibendum nulla fermentum </li>
                  <li> Metus quis sodales </li>
                  <li> Tristique augue mauris</li>
                  <li> Molestie augue non </li>
                  <li> Feugiat ligula neque</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>

        <Row className="width-set-none pb-5">
          <Col lg={6} className="padding-none">
            <div className="repair-clr-1 d-flex justify-content-center">
              <ButtonReuse
                className=" btn-after hvr-bob"
                text={button1Text}
                border="4px"
                borderColor="white"
                backgroundColor={button1BgColor}
                textColor="white"
                fontSize="14"
                fontWeight="500"
                width="180"
                height="42"
              />
            </div>
          </Col>
          <Col lg={6} className="padding-none">
            <div className="repair-clr-2 d-flex justify-content-center">
              <ButtonReuse
                className=" btn-after hvr-bob"
                text={button2Text}
                border="4px"
                borderColor="white"
                backgroundColor={button2BgColor}
                textColor="white"
                fontSize="14"
                fontWeight="500"
                width="180"
                height="42"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RepairReuse;
