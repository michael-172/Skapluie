import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Services.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Services = () => {
  const [largeScreen, setLargeScreen] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 1400) {
      setLargeScreen(true);
    } else {
      setLargeScreen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    window.innerWidth > 1400 ? setLargeScreen(true) : setLargeScreen(false);
  }, [handleResize]);

  return (
    <div className={styles.Services} id="Services">
      <h2 className={styles.About__Heading}>Our Services</h2>
      {largeScreen ? (
        <div className={`${largeScreen ? "container" : "container-fluid"}`}>
          <Row>
            <Col className={styles.ImageHolder}>
              <Image
                src={"/Our Services/1.png"}
                width={247}
                height={496}
                alt="service1"
              />
              <span className={styles.About__Span}>Branding</span>
            </Col>

            <Col className={styles.ImageHolder}>
              <Image
                src={"/Our Services/2.png"}
                width={247}
                height={496}
                alt="service1"
              />
              <span className={styles.About__Span}>Printing</span>
            </Col>

            <Col className={styles.ImageHolder}>
              <Image
                src={"/Our Services/3.png"}
                width={247}
                height={496}
                alt="service1"
              />
              <span className={styles.About__Span}>Digital Marketing</span>
            </Col>

            <Col className={styles.ImageHolder}>
              <Image
                src={"/Our Services/4.png"}
                width={247}
                height={496}
                alt="service1"
              />
              <span className={styles.About__Span}>Web & App</span>
            </Col>

            <Col className={styles.ImageHolder}>
              <Image
                src={"/Our Services/2.png"}
                width={247}
                height={496}
                alt="service1"
              />
              <span className={styles.About__Span}>Web & App</span>
            </Col>
          </Row>
        </div>
      ) : (
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-fluid"
          dotListClass=""
          draggable
          focusOnSelect={false}
          itemClass=""
          keyBoardControl={true}
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 100,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={true}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Image
            src={"/Our Services/Frame 7191.png"}
            width={259}
            height={270}
            alt="service1"
          />

          <Image
            src={"/Our Services/Frame 7191.png"}
            width={259}
            height={270}
            alt="service1"
          />

          <Image
            src={"/Our Services/Frame 7191.png"}
            width={259}
            height={270}
            alt="service1"
          />

          <Image
            src={"/Our Services/Frame 7191.png"}
            width={259}
            height={270}
            alt="service1"
          />

          <Image
            src={"/Our Services/Frame 7191.png"}
            width={259}
            height={270}
            alt="service1"
          />
        </Carousel>
      )}
    </div>
  );
};

export default Services;
