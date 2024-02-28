import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { VscDebugBreakpointFunction } from "react-icons/vsc";

export const Experience = () => {
  const [moreLess, setMoreLess] = useState({
    one: true,
    two: true,
    three: true,
    four: true,
  });
  const handleSeeMore = (jobNumber) => {
    console.log(jobNumber);
    setMoreLess({
      ...moreLess,
      [jobNumber]: false,
    });
  };
  const handleSeeLess = (jobNumber) => {
    setMoreLess({
      ...moreLess,
      [jobNumber]: true,
    });
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
              functionality.{" "}
              <span
                className="seeMore"
                style={{ color: "lightgray", display: "inline" }}
                onClick={() => handleSeeMore("one")}
              >
                {moreLess.one && "more..."}
              </span>{" "}
              <br />{" "}
              <p className={moreLess.one ? "extraDetail" : ""}>
                {" "}
                • Implemented key backend features with .NET MVC, boosting
                system performance by 60% and seamlessly integrating with MySQL
                database, enhancing financial services functionalities.
                <br />
                • Actively participated in code reviews, offering constructive
                feedback and implementing optimizations to enhance the code
                quality, maintainability, and performance.
                <br />• Increased productivity by 20% through the application of
                active listening skills, fostering better collaboration and
                understanding among colleagues during project discussions and
                task execution.
                <span
                  className="seeMore"
                  style={{ color: "lightgray", display: "inline" }}
                  onClick={() => handleSeeLess("one")}
                >
                  {!moreLess.one && "less"}
                </span>
              </p>
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
              <span
                className="seeMore"
                style={{ color: "lightgray", display: "inline" }}
                onClick={() => handleSeeMore("two")}
              >
                {moreLess.two && "more..."}
              </span>{" "}
              <br />{" "}
              <p className={moreLess.two ? "extraDetail" : ""}>
                {" "}
                • Leveraged Node JS and MongoDB to streamline backend
                operations, ensuring efficient data management and processing,
                thus enhancing system performance.
                <br /> • Achieved a 50% increase in high-quality leads by
                implementing lead generation strategies and optimizing frontend
                components, while ensuring seamless integration for enhanced
                system responsiveness.
                <br /> • Led front-end team to a 40% performance boost through
                strategic leadership, fostering collaboration, and implementing
                efficient management practices.
                <span
                  className="seeMore"
                  style={{ color: "lightgray", display: "inline" }}
                  onClick={() => handleSeeLess("two")}
                >
                  {!moreLess.two && "less"}
                </span>
              </p>
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
              <span
                className="seeMore"
                style={{ color: "lightgray", display: "inline" }}
                onClick={() => handleSeeMore("three")}
              >
                {moreLess.three && "more..."}
              </span>{" "}
              <br />{" "}
              <p className={moreLess.three ? "extraDetail" : ""}>
                {" "}
                • Led dynamic leadership in creating intuitive React Native
                interfaces, integrating AI APIs for enhanced functionality.
                Introduced innovative features like background removal,
                fostering creativity.
                <br /> • Effectively utilized React JS, Node JS, and MongoDB to
                streamline backend operations, resulting in a 50% improvement in
                administrative efficiency and a 60% increase in system
                performance.
                <br /> • Managed a frontend team, ensuring effective
                collaboration, timely project delivery, and adherence to quality
                standards.
                <span
                  className="seeMore"
                  style={{ color: "lightgray", display: "inline" }}
                  onClick={() => handleSeeLess("three")}
                >
                  {!moreLess.three && "less"}
                </span>
              </p>
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
              <span
                className="seeMore"
                style={{ color: "lightgray", display: "inline" }}
                onClick={() => handleSeeMore("four")}
              >
                {moreLess.four && "more..."}
              </span>{" "}
              <br />{" "}
              <p className={moreLess.four ? "extraDetail" : ""}>
                • Keep abreast of the latest tech trends, infusing projects with
                design flair and ensuring seamless functionality across
                browsers, aiming to create immersive digital experiences that
                showcase technical skills and elevate online presence.
                <span
                  className="seeMore"
                  style={{ color: "lightgray", display: "inline" }}
                  onClick={() => handleSeeLess("four")}
                >
                  {!moreLess.four && "less"}
                </span>
              </p>
            </p>
            {/* <VscDebugBreakpointFunction /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
