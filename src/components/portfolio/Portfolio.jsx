import React from "react";

import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "test1",
    github: "test1",
    demo: "test1",
  },
  {
    id: 2,
    image: img1,
    title: "test1",
    github: "test1",
    demo: "test1",
  },
  {
    id: 3,
    image: img1,
    title: "test1",
    github: "test1",
    demo: "test1",
  },
  {
    id: 4,
    image: img1,
    title: "test1",
    github: "test1",
    demo: "test1",
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
