import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import n1 from "../assets/projects/n1.png";
import n2 from "../assets/projects/n2.png";
import n3 from "../assets/projects/n3.png";
import n13 from "../assets/projects/n13.png";
import n5 from "../assets/projects/n5.png";
import n9 from "../assets/projects/n9.png";
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

export const Featured = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Mobile App Developer", "Web Designer"];
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="featured">
      <Container>
        <div className="row">
          <h1 className="featured-head">Featured Projects</h1>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12  divDetail">
            <div className="innerDivDetail">
              <h1 class="iDo">FormOlé</h1>
              <a
                href="https://formole.net/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h5>
                  Coaching Application{" "}
                  <RiExternalLinkFill className="externalLink" />
                </h5>
              </a>
              <p class="desc" style={{ fontSize: "15px" }}>
                FormOle is a cutting-edge, AI-based app that helps you practice
                your form and technique in fundamental Soccer skills, such as a
                taking a Free Kick. It’s simple to use: you don't need sensors
                or any specialized recording equipment. Just your phone. Place
                the soccer-ball down and step back to set your phone at the
                recommended recording angle. Tap the big red button and take
                your shot!
              </p>
              <div className="detailIconDiv">
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaReact style={{ marginRight: "5px" }} /> REACTNATIVE
                    </p>
                  )}
                </TrackVisibility>

                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <IoLogoJavascript style={{ marginRight: "5px" }} />{" "}
                      JAVASCRIPT
                    </p>
                  )}
                </TrackVisibility>

                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaHtml5 style={{ marginRight: "5px" }} /> HTML5
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaCss3Alt style={{ marginRight: "5px" }} /> CSS3
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaNodeJs style={{ marginRight: "5px" }} /> NODEJS
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <DiMongodb style={{ marginRight: "5px" }} /> MONGODB
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaGithub style={{ marginRight: "5px" }} /> GITHUB
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <SiNestjs style={{ marginRight: "5px" }} /> NESTJS
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <BsAndroid2 style={{ marginRight: "5px" }} /> ANDROID
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaApple style={{ marginRight: "5px" }} /> IOS
                    </p>
                  )}
                </TrackVisibility>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 divImage">
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <img src={n5} className="img1" />
                  {/* <img src={n2} className="img2" /> */}
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
        <div className="row project2">
          <div className="col-md-6 col-sm-12 order-md-1  order-sm-2 divImage">
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <img src={n9} className="img1" />
                  {/* <img src={n2} className="img2" /> */}
                </div>
              )}
            </TrackVisibility>
          </div>
          <div className="col-md-6 col-sm-12 order-md-2 order-sm-1 divDetail">
            <div className="innerDivDetail">
              <h1 class="iDo">Minmini</h1>
              <a
                href="https://tezeract.ai/minmini/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h5>
                  Data Labeling Platform{" "}
                  <RiExternalLinkFill className="externalLink" />
                </h5>
              </a>
              <p class="desc" style={{ fontSize: "15px" }}>
                The app addresses the challenges faced by companies in labeling
                their massive amount of data and offering users a chance to
                enhance skills and earn income through a streamlined process
              </p>
              <div className="detailIconDiv">
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaReact style={{ marginRight: "5px" }} /> REACTNATIVE
                    </p>
                  )}
                </TrackVisibility>

                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <IoLogoJavascript style={{ marginRight: "5px" }} />{" "}
                      JAVASCRIPT
                    </p>
                  )}
                </TrackVisibility>

                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaHtml5 style={{ marginRight: "5px" }} /> HTML5
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaCss3Alt style={{ marginRight: "5px" }} /> CSS3
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaNodeJs style={{ marginRight: "5px" }} /> NODEJS
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <DiMongodb style={{ marginRight: "5px" }} /> MONGODB
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaGithub style={{ marginRight: "5px" }} /> GITHUB
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <SiNestjs style={{ marginRight: "5px" }} /> NESTJS
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <BsAndroid2 style={{ marginRight: "5px" }} /> ANDROID
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaApple style={{ marginRight: "5px" }} /> IOS
                    </p>
                  )}
                </TrackVisibility>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12  divDetail">
            <div className="innerDivDetail">
              <h1 class="iDo">MoviX</h1>
              <a
                href="https://movie-raiting-app.vercel.app"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h5>
                  Your Ultimate Movie Experience{" "}
                  <RiExternalLinkFill className="externalLink" />
                </h5>
              </a>
              <p class="desc" style={{ fontSize: "15px" }}>
                Discover a universe of cinematic wonders with our
                trailer-focused movie app. Dive into a collection where every
                click unveils captivating previews, offering a glimpse into the
                heart of each film. Welcome to a world where the excitement of
                cinema begins with every trailer.
              </p>
              <div className="detailIconDiv">
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaReact style={{ marginRight: "5px" }} /> REACT
                    </p>
                  )}
                </TrackVisibility>

                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <IoLogoJavascript style={{ marginRight: "5px" }} />{" "}
                      JAVASCRIPT
                    </p>
                  )}
                </TrackVisibility>

                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaHtml5 style={{ marginRight: "5px" }} /> HTML5
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaCss3Alt style={{ marginRight: "5px" }} /> CSS3
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaNodeJs style={{ marginRight: "5px" }} /> NODEJS
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <DiMongodb style={{ marginRight: "5px" }} /> MONGODB
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaGithub style={{ marginRight: "5px" }} /> GITHUB
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <SiNestjs style={{ marginRight: "5px" }} /> NESTJS
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <BsAndroid2 style={{ marginRight: "5px" }} /> ANDROID
                    </p>
                  )}
                </TrackVisibility>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <p
                      className={
                        isVisible ? "detailIconsVisible" : "detailIcons"
                      }
                    >
                      <FaApple style={{ marginRight: "5px" }} /> IOS
                    </p>
                  )}
                </TrackVisibility>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 divImage">
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <img src={n13} className="img2" />
                  {/* <img src={n2} className="img2" /> */}
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </Container>
    </section>
  );
};
