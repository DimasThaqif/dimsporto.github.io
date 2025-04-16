import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="about-section text-white py-5 mb-5" id="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-12">
            <div className="about-bx text-center">
              <h2 className="mb-4" data-aos="zoom-in" data-aos-delay="100">About Me</h2>
              <p className=" text-justify" data-aos="fade-up" data-aos-delay="300">
              Saya adalah mahasiswa  Program Studi Informatika di Universitas Ahmad Dahlan. Saya memiliki pengalaman dalam UI 
Design dan UX Research. Saya sangat antusias dalam mengembangkan keterampilan di bidang Web Development dan UI/UX 
Design. Saya memiliki kemampuan komunikasi yang baik dan mampu bekerja secara kolaboratif maupun mandiri. Selain itu, 
saya juga terbiasa memecahkan masalah secara kreatif dan analitis. Saya senang mengeksplorasi ide-ide baru melalui proyek 
pribadi untuk memperdalam pemahaman saya di bidang ini. Dengan semangat belajar yang tinggi, saya berkomitmen untuk 
terus mengembangkan kemampuan saya dan tumbuh sebagai seorang profesional di bidang UI/UX.
              </p>

              <h2 className="my-5" data-aos="zoom-in-up" data-aos-delay="500">Education</h2>
              <div className="education-timeline">
                <div className="timeline-item mb-5 text-start" data-aos="fade-right" data-aos-delay="600">
                  <h4><strong>2021 - Sekarang</strong></h4>
                  <h5 className="mb-1">Universitas Ahmad Dahlan</h5>
                  <p className="mb-1">Informatika</p>
                  <p className="text-muted">Yogyakarta, Indonesia</p>
                </div>
                <div className="timeline-item text-start" data-aos="fade-right" data-aos-delay="800">
                  <h4><strong>2018 - 2021</strong></h4>
                  <h5 className="mb-1">SMA Negeri 1 Karimun</h5>
                  <p className="mb-1">IPA</p>
                  <p className="text-muted">Tanjung Balai Karimun, Kepulauan Riau</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
