import { style } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import { HomeRepairServiceRounded } from "@mui/icons-material";

const App_Navbar = () => {
  const userouter = useRouter();
  let router = userouter.asPath;
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  console.log(scrolled);

  const AboutscrollFunc = () => {
    if (router === "/") {
      window.scroll({
        top: 800,
        left: 0,
        behavior: "smooth",
      });
    } else {
      userouter.push("/");
      setTimeout(() => {
        window.scroll({
          top: 800,
          left: 0,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  const ServicesscrollFunc = () => {
    if (router === "/") {
      window.scroll({
        top: 1100,
        left: 0,
        behavior: "smooth",
      });
    } else {
      userouter.push("/");
      setTimeout(() => {
        window.scroll({
          top: 1100,
          left: 0,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  const scrollTop = () => {
    if (router === "/") {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      userouter.push("/");
      setTimeout(() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 300);
    }
  };
  const ClientsScroll = () => {
    if (router === "/") {
      window.scroll({
        top: 1900,
        left: 0,
        behavior: "smooth",
      });
    } else {
      userouter.push("/");
      setTimeout(() => {
        window.scroll({
          top: 1900,
          left: 0,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const links = document.querySelectorAll(".navbarLinks a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        links.forEach((el) => {
          el.classList.remove("active");
        });
        e.target.classList.add("active");
      });
    });
  });
  // Get the navbar

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`${styles.Navbar} ${
            scrolled === true ? "scrolled" : ""
          } navbar-expand-lg`}
        >
          <Container>
            <Link href={"/"}>
              <Navbar.Brand href="#">
                <Image
                  src={"/Main_Logo.png"}
                  width={201}
                  height={90}
                  alt="logo"
                  className={styles.NavbarBrand}
                />
              </Navbar.Brand>
            </Link>
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
                  className="navbarLinks justify-content-end flex-grow-1 pe-3 gap-4"
                  style={{ position: "relative" }}
                >
                  <Nav.Link
                    onClick={() => {
                      scrollTop();
                    }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link"
                    onClick={() => {
                      AboutscrollFunc();
                    }}
                  >
                    About us
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link"
                    onClick={() => {
                      ServicesscrollFunc();
                    }}
                  >
                    Services
                  </Nav.Link>

                  <Nav.Link
                    className="nav-link"
                    onClick={() => {
                      ClientsScroll();
                    }}
                  >
                    Our Clients
                  </Nav.Link>

                  <Link href="/Work">
                    <Nav.Item
                      className={`nav-link ${
                        router === "/Work" ? "active" : ""
                      }`}
                    >
                      Our Work
                    </Nav.Item>
                  </Link>

                  <Link href="/Contact">
                    <Nav.Item
                      className={`nav-link ${
                        router === "/Contact" ? "active" : ""
                      }`}
                    >
                      Contact Us
                    </Nav.Item>
                  </Link>
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
