import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import movixThumbnail from "../assets/img/movix_TN.jpeg";
import bankThumbnail from "../assets/img/bank_TNN.png";
import graph from "../assets/img/graph.png";
import realstate from "../assets/img/realstate1.jpeg";
import redStore from "../assets/img/redStore1.jpeg";
import weatherApp from "../assets/img/weatherApp.png";
import ecom from "../assets/img/ecom.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "MOVIX",
      description:
        "A user-friendly movie app frontend that enables quick and easy search and playback of movie trailers.",
      imgUrl: movixThumbnail,
      url: "https://movie-raiting-app.vercel.app/",
    },
    {
      title: "HOO BANK",
      description: "The next generation payment application.",
      imgUrl: bankThumbnail,
      url: "https://bank-app-hoo.vercel.app/",
    },
    {
      title: "CHART ANALYTICS APP",
      description:
        "Visualize and analyze data effortlessly with Charts Analytics.",
      imgUrl: graph,
      url: "https://charts-analytics-app.vercel.app/",
    },
    {
      title: "REAL STATE",
      description:
        "Discover your dream home with the ultimate real estate app.",
      imgUrl: realstate,
      url: "https://real-estate-web.pages.dev/",
    },
    {
      title: "RED STORE",
      description:
        "Experience a seamless shopping journey with the vibrant Red Store app.",
      imgUrl: redStore,
      url: "https://red-store-website.web.app/",
    },
    {
      title: "WEATHER APP",
      description:
        "Stay informed about the weather with the intuitive Weather app.",
      imgUrl: weatherApp,
      url: "https://weather-application-ochre.vercel.app/",
    },
    {
      title: "MY BAGS",
      description: "Shop chic bags effortlessly with the My Bags Store app.",
      imgUrl: ecom,
      url: "https://my-bags-ecommerce.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are a few past design projects I've worked on.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item style={{width : '50%'}}>
                      <Nav.Link  eventKey="first">Web Apps</Nav.Link>
                    </Nav.Item>
                  
                    <Nav.Item style={{width : '50%'}}>
                      <Nav.Link eventKey="third">Mobile Apps</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
