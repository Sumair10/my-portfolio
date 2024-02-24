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
import jquery from "../assets/img/jquery1.webp";
import tw from "../assets/img/tw.png";
import mysql from "../assets/img/mysql.png";
import jira from "../assets/img/jira.png";
import ios from "../assets/img/ios.webp";
import py from "../assets/img/py.webp";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p style={{ fontSize: "15px" }}>
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
                    <h6>HTML </h6>
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
                    <h6>CSS </h6>
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
                    <h6>Javascript </h6>
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
                    <h6>React js </h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={jquery}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h6>JQuery </h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={tw}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 20,
                        marginTop: 30,
                      }}
                    />
                    <h6>Tailwind </h6>
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
                    <h6>Bootstrap </h6>
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
                    <h6>Material UI </h6>
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
                    <h6>MongoDB </h6>
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
                    <h6>Ant Design </h6>
                  </div>{" "}
                </div>

                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={mysql}
                      alt="Image"
                      style={{
                        width: "40%",
                        height: "40%",
                        marginBottom: 2,
                        marginTop: 10,
                      }}
                    />
                    <h6>MySQL </h6>
                  </div>
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
                    <h6>Redux </h6>
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
                    <h6>GraphQL </h6>
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
                    <h6>Typescript </h6>
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
                    <h6>Nest js </h6>
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
                    <h6>Github </h6>
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
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: 5,
                      }}
                    />
                    <h6>Next js </h6>
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
                    <h6>Postman </h6>
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
                    <h6>Android </h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={ios}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h6>IOS </h6>
                  </div>{" "}
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={py}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h6>Python </h6>
                  </div>{" "}
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  {" "}
                  <div className="item">
                    <img
                      className="icon"
                      src={jira}
                      alt="Image"
                      style={{
                        width: "30%",
                        height: "30%",
                        marginBottom: 10,
                        marginTop: 20,
                      }}
                    />
                    <h6>Jira </h6>
                  </div>{" "}
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
                    <h6>Node js </h6>
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
                    <h6>Firebase </h6>
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
