import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import html from "../assets/img/htmll.png";
import css from "../assets/img/csss.png";
import js from "../assets/img/js.png";
import db from "../assets/img/db.webp";
import react from "../assets/img/react.png";
import nest from "../assets/img/nestt.png";
import next from "../assets/img/next.png";
import mui from "../assets/img/muii.png";
import bs from "../assets/img/bs.png";
import firebase from "../assets/img/firebase.png";
import node from "../assets/img/node.png";
import redux from "../assets/img/redux.png";
import ts from "../assets/img/ts.png";
import pm from "../assets/img/pm.png";
import gql from "../assets/img/gql.png";
import android from "../assets/img/android.png";
import ant from "../assets/img/ant.png";
import git from "../assets/img/git.png";
import api from "../assets/img/apii.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 6,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a web developer, I specialize in creating visually appealing
                and responsive websites, leveraging modern web frameworks and
                technologies. My expertise extends to both front-end and
                back-end development, enabling me to build robust and scalable
                web applications. With a keen focus on security and performance
                optimization, I deliver projects that provide an exceptional
                user experience.
              </p>
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <div className="item">
                    <img
                      src={html}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                      className="icon"
                    />
                    <h5>HTML </h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <div className="item">
                    <img
                      className="icon"
                      src={css}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>CSS </h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <div className="item">
                    <img
                      className="icon"
                      src={js}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Javascript </h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={react}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>React js </h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={bs}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 30,
                      }}
                    />
                    <h5>Bootstrap </h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={mui}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 30,
                      }}
                    />
                    <h5>Material UI </h5>
                  </div>
                </div>

                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={db}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>MongoDB </h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={ant}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Ant Design </h5>
                  </div>{" "}
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={redux}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Redux </h5>
                  </div>{" "}
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={gql}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>GraphQL </h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={ts}
                      alt="Image"
                      style={{
                        width: "25%",
                        height: "25%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Typescript </h5>
                  </div>{" "}
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={nest}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Nest js </h5>
                  </div>{" "}
                </div>

                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={git}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Github </h5>
                  </div>{" "}
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={next}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Next js </h5>
                  </div>{" "}
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={pm}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Postman </h5>
                  </div>{" "}
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={android}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Android </h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={node}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Node js </h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={firebase}
                      alt="Image"
                      style={{
                        width: "22%",
                        height: "22%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h5>Firebase </h5>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
