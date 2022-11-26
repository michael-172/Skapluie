import { style } from "@mui/system";
import Image from "next/image";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Navbar.module.scss";

const App_Navbar = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`${styles.Navbar} navbar-expand-lg`}
        >
          <Container>
            <Navbar.Brand href="#">
              <Image
                src={"/Main_Logo.png"}
                width={201}
                height={90}
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className={styles.NavbarMobileMenu}
            >
              <Image
                src={"/BurgerIcon.png"}
                width={30}
                height={21}
                alt="mobileMenuIcon"
              />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3 gap-3"
                  style={{ position: "relative", bottom: "-15px" }}
                >
                  <Nav.Item className={`nav-link active`}>Home</Nav.Item>
                  <Nav.Item className={`nav-link`}>About us</Nav.Item>
                  <Nav.Item className={`nav-link`}>Services</Nav.Item>
                  <Nav.Item className={`nav-link`}>Our Clients</Nav.Item>
                  <Nav.Item className={`nav-link`}>Our Work</Nav.Item>
                  <Nav.Item className={`nav-link`}>Contact Us</Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default App_Navbar;
