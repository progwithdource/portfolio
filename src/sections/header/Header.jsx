import "./header.css";
import HeaderImage from "../../assets/adex.jpeg";
import data from "./data";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function Header() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="headerimage" />
        </div>
      </div>
      <h3 class="push-up typing">Hello, my name is Adeoluwa</h3>
      <p class="push-up" id="welcome">
        welcome to my portfolio
      </p>
      <div data-aos="fade-up" className="header__cta">
        <a href="#portfolio" class="btn primary push-up">
          My work
        </a>
        <a href="#contact" class="btn light push-up">
          Let's talk
        </a>
      </div>
      <div className="header__socials">
        {data.map((item) => (
          <a
            key="item.id"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
