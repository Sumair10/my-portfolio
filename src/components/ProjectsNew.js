import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle, Windows } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

import n20 from "../assets/projects/n20.png";
import n22 from "../assets/projects/n22.png";
import n23 from "../assets/projects/n23.png";
import n25 from "../assets/projects/n25.png";
import n26 from "../assets/projects/n26.png";
import n27 from "../assets/projects/n27.png";
import n28 from "../assets/projects/n28.png";
import n29 from "../assets/projects/n29.png";
import n30 from "../assets/projects/n30.png";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaApple,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { BsAndroid2 } from "react-icons/bs";
import { RiExternalLinkFill } from "react-icons/ri";
import { MdOutlinePreview } from "react-icons/md";

export const ProjectsNew = () => {
  return (
    <section className="projectsNew">
      <Container>
        <div className="row">
          <h1 className="featured-head">Projects</h1>
        </div>
        <Row>
          <Col xs={6} sm={6} md={4} xl={4} className=" divImage">
            <Row>
              <h6>Car Rental</h6>
            </Row>
            <a
              href="https://car-rental-ten.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div class="imageContainer">
                <img src={n20} className="img1NewProject" />
              </div>
            </a>
            <div className="detailIconDiv">
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    style={{ textDecoration: "none" }}
                    href="https://car-rental-ten.vercel.app/"
                    target="_blank"
                  >
                    <FaGithub
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    GITHUB
                  </a>
                )}
              </TrackVisibility>
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    style={{ textDecoration: "none" }}
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    href="https://car-rental-ten.vercel.app/"
                    target="_blank"
                  >
                    <RiExternalLinkFill
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    PREVIEW
                  </a>
                )}
              </TrackVisibility>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} xl={4} className=" divImage">
            <Row>
              <h6>Gymate</h6>
            </Row>
            <a
              href="https://gymate-iota.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div class="imageContainer">
                <img src={n29} className="img1NewProject" />
              </div>
            </a>
            <div className="detailIconDiv">
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    style={{ textDecoration: "none" }}
                    href="https://gymate-iota.vercel.app/"
                    target="_blank"
                  >
                    <FaGithub
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    GITHUB
                  </a>
                )}
              </TrackVisibility>
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    style={{ textDecoration: "none" }}
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    href="https://car-rental-ten.vercel.app/"
                    target="_blank"
                  >
                    <RiExternalLinkFill
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    PREVIEW
                  </a>
                )}
              </TrackVisibility>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} xl={4} className=" divImage">
            <Row>
              <h6>Minimalist</h6>
            </Row>

            <a
              href="https://minimalist-e-commerce.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div class="imageContainer">
                <img src={n22} className="img1NewProject" />
              </div>
            </a>
            <div className="detailIconDiv">
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    style={{ textDecoration: "none" }}
                    href="https://minimalist-e-commerce.vercel.app/"
                    target="_blank"
                  >
                    <FaGithub
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    GITHUB
                  </a>
                )}
              </TrackVisibility>
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    style={{ textDecoration: "none" }}
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    href=""
                    target="_blank"
                  >
                    <RiExternalLinkFill
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    PREVIEW
                  </a>
                )}
              </TrackVisibility>
            </div>
          </Col>

          <Col xs={6} sm={6} md={4} xl={4} className=" divImage">
            <Row>
              <h6>My Bags</h6>
            </Row>

            <a
              href="https://my-bags-ecommerce.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div class="imageContainer">
                <img src={n26} className="img1NewProject" />
              </div>
            </a>
            <div className="detailIconDiv">
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    style={{ textDecoration: "none" }}
                    href="https://my-bags-ecommerce.vercel.app/"
                    target="_blank"
                  >
                    <FaGithub
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    GITHUB
                  </a>
                )}
              </TrackVisibility>
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    style={{ textDecoration: "none" }}
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    href="https://car-rental-ten.vercel.app/"
                    target="_blank"
                  >
                    <RiExternalLinkFill
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    PREVIEW
                  </a>
                )}
              </TrackVisibility>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} xl={4} className=" divImage">
            <Row>
              <h6>Hoo Bank</h6>
            </Row>

            <a
              href="https://bank-app-hoo.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div class="imageContainer">
                <img src={n25} className="img1NewProject" />
              </div>
            </a>
            <div className="detailIconDiv">
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    style={{ textDecoration: "none" }}
                    href="https://bank-app-hoo.vercel.app/"
                    target="_blank"
                  >
                    <FaGithub
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    GITHUB
                  </a>
                )}
              </TrackVisibility>
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    style={{ textDecoration: "none" }}
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    href="https://car-rental-ten.vercel.app/"
                    target="_blank"
                  >
                    <RiExternalLinkFill
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    PREVIEW
                  </a>
                )}
              </TrackVisibility>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} xl={4} className=" divImage">
            <Row>
              <h6>Red Store</h6>
            </Row>

            <a
              href="https://red-store-website.web.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div class="imageContainer">
                <img src={n27} className="img1NewProject" />
              </div>
            </a>
            <div className="detailIconDiv">
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    style={{ textDecoration: "none" }}
                    href="https://red-store-website.web.app/"
                    target="_blank"
                  >
                    <FaGithub
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    GITHUB
                  </a>
                )}
              </TrackVisibility>
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    style={{ textDecoration: "none" }}
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    href="https://car-rental-ten.vercel.app/"
                    target="_blank"
                  >
                    <RiExternalLinkFill
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    PREVIEW
                  </a>
                )}
              </TrackVisibility>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} xl={4} className=" divImage">
            <Row>
              <h6>Chart Analytics</h6>
            </Row>

            <a
              href="https://charts-analytics-app.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div class="imageContainer">
                <img src={n28} className="img1NewProject" />
              </div>
            </a>
            <div className="detailIconDiv">
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    style={{ textDecoration: "none" }}
                    href="https://charts-analytics-app.vercel.app/"
                    target="_blank"
                  >
                    <FaGithub
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    GITHUB
                  </a>
                )}
              </TrackVisibility>
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    style={{ textDecoration: "none" }}
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    href="https://car-rental-ten.vercel.app/"
                    target="_blank"
                  >
                    <RiExternalLinkFill
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    PREVIEW
                  </a>
                )}
              </TrackVisibility>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} xl={4} className=" divImage">
            <Row>
              <h6>REAL STATE</h6>
            </Row>

            <a
              href="https://real-estate-web.pages.dev/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div class="imageContainer">
                <img src={n30} className="img1NewProject" />
              </div>
            </a>
            <div className="detailIconDiv">
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    style={{ textDecoration: "none" }}
                    href="https://real-estate-web.pages.dev/"
                    target="_blank"
                  >
                    <FaGithub
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    GITHUB
                  </a>
                )}
              </TrackVisibility>
              <TrackVisibility>
                {({ isVisible }) => (
                  <a
                    style={{ textDecoration: "none" }}
                    className={isVisible ? "detailIconsVisible" : "detailIcons"}
                    href="https://car-rental-ten.vercel.app/"
                    target="_blank"
                  >
                    <RiExternalLinkFill
                      style={{ marginRight: "5px", fontSize: "15px" }}
                    />{" "}
                    PREVIEW
                  </a>
                )}
              </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
