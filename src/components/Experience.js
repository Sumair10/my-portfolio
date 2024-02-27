import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { VscDebugBreakpointFunction } from "react-icons/vsc";

export const Experience = () => {
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
    <section className="experience">
      <Container>
        <div className="row">
          <h1 className="featured-head">Experience</h1>
        </div>
        <Row className="aligh-items-center">
          <Col>
            <h5 className="iDo1">Full Stack Developer</h5>
            <h6>Macrosoft </h6>
            <p
              style={{
                fontSize: "10px",
                margin: "-5px 0px 5px 0px",
                padding: "0px",
              }}
            >
              United States - Remote ( Nov 2022 – Dec 2023 )
            </p>
            <p class="desc">
              • Played a key role in migrating Stretto legacy website to a React
              web app, enhancing solutions for corporate restructuring and
              financial transactions, resulting in improved user experience and
              functionality. <br /> show more... • Implemented key backend
              features with .NET MVC, boosting system performance by 60% and
              seamlessly integrating with MySQL database, enhancing financial
              services functionalities.
              <br />
              • Actively participated in code reviews, offering constructive
              feedback and implementing optimizations to enhance the code
              quality, maintainability, and performance.
              <br />• Increased productivity by 20% through the application of
              active listening skills, fostering better collaboration and
              understanding among colleagues during project discussions and task
              execution.
            </p>
            {/* <VscDebugBreakpointFunction /> */}
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col>
            <h5 className="iDo1">Software Developer</h5>
            <h6>WeQuote Inc. </h6>
            <p
              style={{
                fontSize: "10px",
                margin: "-5px 0px 5px 0px",
                padding: "0px",
              }}
            >
              United States - Remote ( Feb 2023 – Oct 2023 )
            </p>
            <p class="desc">
              • Spearheaded front-end development and user interface maintenance
              for WeQuote's advertising solution, resulting in a 30% increase in
              engagement rates.
              <br /> • Leveraged Node JS and MongoDB to streamline backend
              operations, ensuring efficient data management and processing,
              thus enhancing system performance.
              <br /> • Achieved a 50% increase in high-quality leads by
              implementing lead generation strategies and optimizing frontend
              components, while ensuring seamless integration for enhanced
              system responsiveness.
              <br /> • Led front-end team to a 40% performance boost through
              strategic leadership, fostering collaboration, and implementing
              efficient management practices.
            </p>
            {/* <VscDebugBreakpointFunction /> */}
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col>
            <h5 className="iDo1">MERN Stack Developer</h5>
            <h6>Tezeract </h6>
            <p
              style={{
                fontSize: "10px",
                margin: "-5px 0px 5px 0px",
                padding: "0px",
              }}
            >
              Pakistan - ( Oct 2020 – Jan 2023 )
            </p>
            <p class="desc">
              • Excelled in implementing advanced OCR and file management
              systems, achieving a 70% increase in accuracy and precision, while
              consistently achieving optimal levels of personal performance and
              accomplishment.
              <br /> • Led dynamic leadership in creating intuitive React Native
              interfaces, integrating AI APIs for enhanced functionality.
              Introduced innovative features like background removal, fostering
              creativity.
              <br /> • Effectively utilized React JS, Node JS, and MongoDB to
              streamline backend operations, resulting in a 50% improvement in
              administrative efficiency and a 60% increase in system
              performance.
              <br /> • Managed a frontend team, ensuring effective
              collaboration, timely project delivery, and adherence to quality
              standards.
            </p>
            {/* <VscDebugBreakpointFunction /> */}
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col>
            <h5 className="iDo1">Frontend Developer</h5>
            <h6>Freelance </h6>
            <p
              style={{
                fontSize: "10px",
                margin: "-5px 0px 5px 0px",
                padding: "0px",
              }}
            >
              Pakistan - (Oct 2019 – Sep 2020 )
            </p>
            <p class="desc">
              • Specialize in crafting visually appealing and responsive web
              interfaces using HTML, CSS, and JavaScript to exceed client
              expectations.
              <br /> • Keep abreast of the latest tech trends, infusing projects
              with design flair and ensuring seamless functionality across
              browsers, aiming to create immersive digital experiences that
              showcase technical skills and elevate online presence.
            </p>
            {/* <VscDebugBreakpointFunction /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
