import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import jsLogo from '../assets/img/JavaScript.png';
import reactLogo from '../assets/img/react.svg';
import kotlinLogo from '../assets/img/kotlin.png';
import tailwindLogo from '../assets/img/tailwind.png';
import htmlLogo from '../assets/img/html.png';
import cssLogo from '../assets/img/css.png';
import pythonLogo from '../assets/img/python.png';
import nodeLogo from '../assets/img/nodejs.png';
import vueLogo from '../assets/img/vue.png';

const ProgrammingSkills = () => {
  const skills = [
    { name: 'HTML', img: htmlLogo },
    { name: 'CSS', img: cssLogo },
    { name: 'JavaScript', img: jsLogo },
    { name: 'React JS', img: reactLogo },
    { name: 'Kotlin', img: kotlinLogo },
    { name: 'Tailwind', img: tailwindLogo },
    { name: 'Python', img: pythonLogo },
    { name: 'Node JS', img: nodeLogo },
    { name: 'Vue JS', img: vueLogo }
  ];

  return (
    <section id="programming-skills" style={{ backgroundColor: '#121212', padding: '60px 0' }}>
      <Container>
        <h2 className="mb-5 text-center text-light">Programming Skills</h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col xs={6} md={2} key={index} className="text-center mb-4">
              <img
                src={skill.img}
                alt={skill.name}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.2))'
                }}
              />
              <p className="mt-2 text-light">{skill.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProgrammingSkills;
