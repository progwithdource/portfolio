import "./about.css";
import AboutImage from "../../assets/adex.jpeg";
import CV from "../../assets/Idowu Adeoluwa CV 2023.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
function About() {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="aboutImage" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            My name is Idowu Adeoluwa Olamide, a web developer and IT
            professional from Nigeria with a background in computer science and
            a Master's in Data and Information Science. I specialize in creating
            seamless, data-driven web solutions that prioritize user experience,
            accessibility, and functionality. Over the years, I’ve built a
            foundation in IT and digital transformation, handling roles like
            Digital Transformation Manager at Slum and Rural Health Initiative,
            where I designed and managed online platforms and enhanced online
            presence strategies. I’m proficient in digital tools, including
            Google Digital Marketing, Python programming, and have a strong
            understanding of networking essentials. I’m passionate about
            crafting dynamic, intuitive web experiences and am constantly
            expanding my skills to stay ahead in front-end development and
            design systems. Enough about me! Check out my resume below{" "}
          </p>
          <a href={CV} download className="btn primary">
            Download Cv{HiDownload}{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
