import React from "react";
import styles from "../styles/Work.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Pagination from "../Components/Pagination";

const Work = () => {
  const imagesArray = [
    "/Work/1 (1).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (1).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (1).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
  ];
  return (
    <div className={styles.Work}>
      <Container>
        <Tabs
          defaultActiveKey="All"
          transition={false}
          id="noanim-tab-example"
          className={`mb-3 ${styles.TabsWrapper} container`}
        >
          <Tab eventKey="All" title="All">
            <Container>
              <Pagination items={imagesArray} itemsPerPage={10} />
            </Container>
          </Tab>

          <Tab eventKey="Branding" title="Branding">
            <Container>
              <Pagination items={imagesArray} itemsPerPage={10} />
            </Container>
          </Tab>

          <Tab eventKey="Printing" title="Printing">
            <Container>
              <Pagination items={imagesArray} itemsPerPage={10} />
            </Container>
          </Tab>

          <Tab eventKey="Digital Marketing" title="Marketing">
            <Container>
              <Pagination items={imagesArray} itemsPerPage={10} />
            </Container>
          </Tab>

          <Tab eventKey="Photosessions" title="Photosessions">
            <Container>
              <Pagination items={imagesArray} itemsPerPage={10} />
            </Container>
          </Tab>

          <Tab eventKey="Web&App" title="Web&App">
            <Container>
              <Pagination items={imagesArray} itemsPerPage={10} />
            </Container>
          </Tab>

          <Tab eventKey="profile" title="Profile">
            <Container>
              <Pagination items={imagesArray} itemsPerPage={10} />
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Work;
