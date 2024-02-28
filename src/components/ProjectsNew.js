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

export const ProjectsNew = () => {
  return (
    <section className="projectsNew">
      <Container>
        <div className="row">
          <h1 className="featured-head">Projects</h1>
        </div>
        <Row>
          <Col xs={6} sm={6} md={3} xl={3} className=" divImage">
            <div class="imageContainer">
              <img src={n20} className="img1NewProject" />
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} xl={3} className=" divImage">
            <div class="imageContainer">
              <img src={n22} className="img1NewProject" />
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} xl={3} className=" divImage">
            <div class="imageContainer">
              <img src={n29} className="img1NewProject" />
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} xl={3} className=" divImage">
            <div class="imageContainer">
              <img src={n25} className="img1NewProject" />
            </div>
          </Col>

          <Col xs={6} sm={6} md={3} xl={3} className=" divImage">
            <div class="imageContainer">
              <img src={n26} className="img1NewProject" />
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} xl={3} className=" divImage">
            <div class="imageContainer">
              <img src={n27} className="img1NewProject" />
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} xl={3} className=" divImage">
            <div class="imageContainer">
              <img src={n28} className="img1NewProject" />
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} xl={3} className=" divImage">
            <div class="imageContainer">
              <img src={n25} className="img1NewProject" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
