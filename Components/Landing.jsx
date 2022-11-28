import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Landing.module.scss";
import landingImg from "../public/landing.png";
const Landing = () => {
  const [isSmallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth < 1200) {
        setSmallScreen(window.innerWidth);
        console.log(isSmallScreen);
      } else {
        setSmallScreen(window.innerWidth);
      }
    };
  });
  return (
    <div className={styles.Landing}>
      <div
        className={`${
          isSmallScreen === true ? `container-fluid` : "container"
        }`}
        style={{ height: "100%" }}
      >
        <Row style={{ height: "100%" }}>
          <Col
            md={6}
            sm={6}
            xs={6}
            className={styles.Text}
            style={{ height: "100%" }}
          >
            <Image
              src={"/Landing_Text_Back.png"}
              width={400}
              height={400}
              alt={"text-background"}
              className={styles.TextBackground}
            />
            <h2 className={styles.Text_Heading}>start your business growth</h2>

            <div className={styles.Button_Container}>
              <button className={styles.Text_Button}>Contact Us</button>
            </div>
          </Col>
          <Col
            md={6}
            sm={6}
            xs={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              src={landingImg}
              alt={"landing image"}
              style={{
                width: "calc(100% - 100px)",
                height: "auto",
                maxWidth: "100%",
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Landing;
