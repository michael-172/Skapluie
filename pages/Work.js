import React from "react";
import styles from "../styles/Work.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
import { Container } from "react-bootstrap";

const Work = () => {
  return (
    <div className={styles.Work}>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className={`mb-3 ${styles.TabsWrapper}`}
      >
        <Tab eventKey="profile" title="Profile">
          <Container>
            <div className={styles.ImagesWrapper}>
              <div className={styles.image}>
                <img src={"/Work/1 (1).png"} alt={"test-img"} />
              </div>
              <div className={styles.image}>
                <img src={"/Work/1 (2).png"} alt={"test-img"} />
              </div>
              <div className={styles.image}>
                <img src={"/Work/1 (3).png"} alt={"test-img"} />
              </div>
              <div className={styles.image}>
                <img src={"/Work/1 (4).png"} alt={"test-img"} />
              </div>
              <div className={styles.image}>
                <img src={"/Work/1 (5).png"} alt={"test-img"} />
              </div>
              <div className={styles.image}>
                <img src={"/Work/1 (6).png"} alt={"test-img"} />
              </div>
              <div className={styles.image}>
                <img src={"/Work/1 (6).png"} alt={"test-img"} />
              </div>
              <div className={styles.image}>
                <img src={"/Work/1 (7).png"} alt={"test-img"} />
              </div>
            </div>
          </Container>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <h2>Tab 3</h2>
        </Tab>
        <Tab eventKey="test2" title="Profile">
          <h2>Tab 2</h2>
        </Tab>
        <Tab eventKey="test3" title="Contact">
          <h2>Tab 3</h2>
        </Tab>
        <Tab eventKey="test4" title="Home">
          <h2>Tab 1</h2>
        </Tab>
        <Tab eventKey="test5" title="Contact">
          <h2>Tab 3</h2>
        </Tab>
        <Tab eventKey="test6" title="Contact">
          <h2>Tab 2</h2>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Work;
