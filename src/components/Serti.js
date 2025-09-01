import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Bangkit.png";
import projImg2 from "../assets/img/TBI.png";
import projImg3 from "../assets/img/Intermediate.png";
import projImg4 from "../assets/img/Jetpack.png";
import projImg5 from "../assets/img/diggitybaru.png";
import projImg6 from "../assets/img/Manajemen.png";
import projImg7 from "../assets/img/solar.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Serti = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // agar tetap animasi saat scroll
    });
  }, []);

  const projects = [
    {
    //   title: "Company Profile",
      description: "Bangkit Academy",
      imgUrl: projImg1,
    //   link: "https://docs.google.com/presentation/d/1OqlI_LPHiwV8RPvexBYxz6FBWv9dtHjJ2YqWPEHDmPM/edit?usp=sharing"
    },
    {
    //   title: "Employee Attendence App",
      description: "The British Institute",
      imgUrl: projImg2,
    //   link: "https://docs.google.com/presentation/d/1vaPH2t6QdaPOLfs_f_g-rvAojXYGiSTz2J9CAHNyAe8/edit?usp=sharing"
    },
    {
    //   title: "Deaf and Speech Impaired App",
      description: "Belajar Aplikasi Android Intermediate",
      imgUrl: projImg3,
      // link: "https://www.figma.com/proto/mhEqkLbxb0YR1KsQbDXhQd/KonekTra-Prototype?page-id=0%3A1&node-id=10-629&p=f&viewport=55%2C472%2C0.23&t=9nPuxdOgWnrwUgv0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A613"
    },
    {
      // title: "Workshop Ticket Retrieval App",
      description: "Belajar membuat aplikasi android jetpack compose",
      imgUrl: projImg4,
    //  link: "https://docs.google.com/presentation/d/1HTgpOMMlc5Udu1qfUQwkA6KzCFIp9zr5W65Zr3WB3aE/edit?usp=sharing"
    },
    // {
    //   title: "Company Profile dan E-learning",
    //   description: "Diggity",
    //   imgUrl: projImg5,
    //   link: "https://docs.google.com/presentation/d/1ZJfwuTPfcEZGqHL1QIq8B3gLmpdgUUj6_Evz4PRKzdw/edit?usp=sharing"
    // },
    // {
    //   title: "Management App",
    //   description: "DianMandiri Group",
    //   imgUrl: projImg6,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Certificate</h2>
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
