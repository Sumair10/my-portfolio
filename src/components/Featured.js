import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import new1 from "../assets/projects/new1.png";
import new2 from "../assets/projects/new2.png";
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
              <h1>FormOle</h1>
              <h5>Coaching Application</h5>
              <p class="desc" style={{ fontSize: "15px" }}>
                AI for athletes who celebrate proper form.
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
                  <img src={new1} className="img1" />
                  <img src={new2} className="img2" />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </Container>
    </section>
  );
};
