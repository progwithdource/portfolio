import "./about.css";
import AboutImage from "../../assets/first.jpeg";
import CV from "../../assets/BASHIR AREMU.pdf";
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
            my name is Bashir Aremu from Lagos,Nigeria.I'm a web developer
            presently focused on front-end development with a Bachelor's degree
            in computer Science.I have a background in Banking as i worked in
            that sector for some years,"Banker?" yh totally unrelated,the same
            way bank's personel value customer service and satisfaction is the
            same way i implement webdevelopment on user's
            experience,designSystems,accesibility &functionality,when am not
            coding I watch and analyse football.Enough About me!Check out my
            resume below{" "}
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
