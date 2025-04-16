import { useEffect, useState, useRef } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // tetap muncul animasi saat di scroll ulang
    });
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 767, min: 0 }, items: 1 }
  };

  const SkillMeter = ({ title, value }) => {
    const [progress, setProgress] = useState(0);
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        { threshold: 0.5 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);

    useEffect(() => {
      if (!isVisible) return;
      let start = 0;
      const duration = 1000;
      const increment = value / (duration / 20);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(timer);
        }
        setProgress(Math.round(start));
      }, 20);
      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <div
        ref={ref}
        data-aos="zoom-in"
        className="item d-flex flex-column align-items-center p-3"
      >
        <div style={{ width: 150, height: 150 }}>
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              pathColor: "#00aaff",
              trailColor: "#444",
              textColor: "#fff",
              textSize: "18px",
              pathTransitionDuration: 0.5
            })}
          />
        </div>
        <h5 className="mt-3 text-white">{title}</h5>
      </div>
    );
  };

  return (
    <section className="skill text-white" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx text-center" data-aos="fade-up">
              <h2>Skills</h2>
              <p className="text-justify" data-aos="fade-up" data-aos-delay="300">
                Saya adalah seorang UI/UX Designer dan Web Developer dengan pengalaman 1+ tahun yang berfokus pada pembuatan antarmuka yang intuitif dan pengalaman pengguna yang optimal dengan pendekatan desain yang human-centered dan kemampuan teknis dalam pengembangan web, saya mampu mengubah ide menjadi produk digital yang fungsional dan menarik.
              </p>
              <div className="d-flex justify-content-center mt-4">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={false}
                  className="skill-slider w-100"
                  containerClass="carousel-container"
                  itemClass="d-flex justify-content-center"
                >
                  <SkillMeter title="UI/UX Design" value={95} />
                  <SkillMeter title="Web Development" value={80} />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
