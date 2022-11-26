import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <div className={styles.Services}>
      <Container>
        <h2 className={styles.About__Heading}>Our Services</h2>
        <Row>
          <Col lg={3} className={styles.ImageHolder}>
            <Image
              src={"/Our Services/1.png"}
              width={247}
              height={496}
              alt="service1"
            />
            <span className={styles.About__Span}>Branding</span>
          </Col>

          <Col lg={3} className={styles.ImageHolder}>
            <Image
              src={"/Our Services/2.png"}
              width={247}
              height={496}
              alt="service1"
            />
            <span className={styles.About__Span}>Printing</span>
          </Col>

          <Col lg={3} className={styles.ImageHolder}>
            <Image
              src={"/Our Services/3.png"}
              width={247}
              height={496}
              alt="service1"
            />
            <span className={styles.About__Span}>Digital Marketing</span>
          </Col>

          <Col lg={3} className={styles.ImageHolder}>
            <Image
              src={"/Our Services/4.png"}
              width={247}
              height={496}
              alt="service1"
            />
            <span className={styles.About__Span}>Web & App</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
