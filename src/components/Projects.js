import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Binco.jpg";
import projImg2 from "../assets/img/pegawai.jpg";
import projImg3 from "../assets/img/konektra.jpg";
import projImg4 from "../assets/img/Bengkel.png";
import projImg5 from "../assets/img/Diggity.png";
import projImg6 from "../assets/img/Manajemen.png";
import projImg7 from "../assets/img/solar.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // agar tetap animasi saat scroll
    });
  }, []);

  const projects = [
    {
      title: "Company Profile",
      description: "PT Binco Ran Nusantara",
      imgUrl: projImg1,
    },
    {
      title: "Employee Attendence App",
      description: "Self Project",
      imgUrl: projImg2,
    },
    {
      title: "Deaf and Speech Impaired App",
      description: "Bangkit Academy",
      imgUrl: projImg3,
    },
    {
      title: "Workshop Ticket Retrieval App",
      description: "Bengkel Bowo",
      imgUrl: projImg4,
    },
    {
      title: "Company Profile dan E-learning",
      description: "Diggity",
      imgUrl: projImg5,
    },
    {
      title: "Management App",
      description: "DianMandiri Group",
      imgUrl: projImg6,
    },
    {
      title: "Solar Repo",
      description: "Pt. Bina Lintas Usaha Ekonomi",
      imgUrl: projImg7,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              aosAnimation="fade-up"
                              aosDelay={index * 100}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
