import "./services.css";
import data from "./data";
import Card from "../../components/Card";

function Services() {
  return (
    <section id="services">
      <h2>Stack</h2>
      <p>These are presently what I do on a regular basis</p>
      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Services;
