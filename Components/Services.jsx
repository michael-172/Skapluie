import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Services.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../ReduxToolkit/ServicesSlice";
import Link from "next/link";

const Services = () => {
  const servicesFromApi = useSelector((state) => state.service.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);
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
            {servicesFromApi &&
              servicesFromApi.map((service, idx) => (
                <Link
                  href={`/Services/${service.id}`}
                  className={styles.ImageHolder}
                >
                  <Col key={idx}>
                    <div className={styles.ImageHolder__WithHover}>
                      <Image
                        src={service.image}
                        width={247}
                        height={496}
                        alt={service.service_name}
                        className={styles.ServiceImage}
                      />
                      <div>{service.service_name}</div>
                    </div>
                    <span className={styles.About__Span}>
                      {service.service_name}
                    </span>
                  </Col>
                </Link>
              ))}
          </Row>
        </div>
      ) : (
        <>
          {servicesFromApi && (
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
              {servicesFromApi.map((ser) => (
                <Image
                  src={ser.image}
                  width={259}
                  height={270}
                  alt="service1"
                />
              ))}
            </Carousel>
          )}
        </>
      )}
    </div>
  );
};

export default Services;
