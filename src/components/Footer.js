import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5 animate__animated animate__fadeInUp">

      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <span className="h5 mb-0">PortoDims</span>
            </div>
            <p className="mb-1">Email: dimasthaqif10@email.com</p>
            <p>Tamanan, Kecamatan Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta, Indonesia</p>
          </Col>

          <Col md={2} className="mb-3">
            <h6 className="text-uppercase fw-bold mb-3">Skills</h6>
            <ul className="list-unstyled text-light">
              <li className="mb-2">UI/UX Designer</li>
              <li className="mb-2">Web Development</li>
            </ul>
          </Col>

          <Col md={2} className="mb-3">
            <h6 className="text-uppercase fw-bold mb-3">Links</h6>
            <ul className="list-unstyled text-light">
              <li className="mb-2 link-hover"><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li className="mb-2 link-hover"><a href="#skills" className="text-light text-decoration-none">Skills</a></li>
              <li className="mb-2 link-hover"><a href="#projects" className="text-light text-decoration-none">Projects</a></li>
              <li className="mb-2 link-hover"><a href="#connect" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="text-uppercase fw-bold mb-3">Lokasi</h6>
            <div className="ratio ratio-4x3">
            <iframe
  title="Google Map Kost D3"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7551638871415!2d110.3845391!3d-7.8349115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a570b1f03ff0f%3A0xd3f4a4cccc1cdacf!2sKost%20D3!5e0!3m2!1sen!2sid!4v1713184333052!5m2!1sen!2sid"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row className="align-items-center">
          <Col sm={6}>
            <p className="mb-0 text-muted">© 2025 Dimas. All rights reserved.</p>
          </Col>
          <Col sm={6} className="text-sm-end">
            <div className="social-icon d-flex justify-content-sm-end gap-3">
              <a href="https://www.linkedin.com/in/dimasthaqifattaulah/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/dimas.attaulah"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/dimasthaqiff_/"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Tambahan CSS langsung */}
      <style jsx>{`
        .skill-link,
        .link-hover a {
          transition: all 0.3s ease;
        }

        .skill-link:hover,
        .link-hover a:hover {
          color: #00aaff;
          transform: translateX(5px);
          font-weight: 600;
        }
      `}</style>
    </footer>
  );
};
