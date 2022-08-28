import React from "react";

import "./portfolio.css";
import CommingSoon from "../../assets/comming.webp";

const data = [
  {
    id: 1,
    image: CommingSoon,
    title: "Rick & Morty - API",
    github: "https://github.com/Cassst/-API-_Rick_and_Morty",
    demo: "test1",
  },
  {
    id: 2,
    image: CommingSoon,
    title: "Cibersecurity SPA",
    github: "https://github.com/Cassst/-REACT--cibersecurity-spa",
    demo: "test1",
  },
  {
    id: 3,
    image: CommingSoon,
    title: "Futuros Proyectos - Visita mi GitHub",
    github: "https://github.com/Cassst",
    demo: "https://github.com/Cassst",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis proyectos recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
