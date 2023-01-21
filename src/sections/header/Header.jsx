import './header.css'
import HeaderImage from '../../assets/bashpicture.jpg'
import data from './data'

function Header() {
  return (
    <header className="container header__container">
      <div>
        <img src={HeaderImage} class="Header__Profile" alt="headerimage" />
      </div>
      <h3>Hello,I'm Bashir Aremu</h3>
      <p>welcome to my portfolio</p>
      <div className="header__cta">
        <a href="portfolio" class="btn primary">
          My work
        </a>
        <a href="#contact" class="btn light">
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

export default Header
