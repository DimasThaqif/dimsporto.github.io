import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, aosAnimation, aosDelay }) => {
  return (
    <Col
      size={12}
      sm={6}
      md={4}
      className="d-flex justify-content-center mb-4"
      data-aos={aosAnimation}
      data-aos-delay={aosDelay}
    >
      <div className="project-card-wrapper hover-effect">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
          </div>
        </a>
        <div className="proj-description">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};
