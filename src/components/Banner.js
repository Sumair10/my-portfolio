import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/contact-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { usePDF } from "react-to-pdf";

export const Banner = () => {
  const handleDownload = () => {
    const fileUrl = "/SumairVerse_resume.pdf"; // Assuming the file is in the public folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "SumairVerse_resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Hello, my name is ",
    "const Sumair = ( name , passion ) =>",
  ];
  const period = 1000;

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
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                // className={
                //   isVisible ? "animate__animated animate__fadeIn" : ""
                // }
                >
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Hello, my name is ","const Sumair = ( name , passion ) =>" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                  <h1 class="sumairverse">Sumairverse</h1>
                  <h1 class="iDo">
                    I design and build meaningful experiences.
                  </h1>
                  {/* <h1>
                    {`Hi! I'm Sumair`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer","Mobile App Developer", "Web Designer"  ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1> */}
                  <p class="desc" style={{ fontSize: "15px" }}>
                    As a seasoned Web and Mobile App Developer, I seamlessly
                    blend technical expertise with creative vision to craft
                    user-centric designs and innovative solutions that redefine
                    the digital experience.
                  </p>
                  <button className="downloadResume" onClick={handleDownload}>
                    Download Resume{" "}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-bar-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"
                      />
                    </svg> */}
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div class="image">
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
