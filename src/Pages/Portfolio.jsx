import React, { useState, useEffect } from 'react';
import PortfolioService from '../Services/PortfolioService';

export default function Portfolio() {

  const [portfolio, setPortfolio] = useState();

  useEffect(() => {
    PortfolioService
      .get(process.env.PUBLIC_URL + "/data/portfolio.json")
      .then((response) => setPortfolio(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section className="portfolio--section" id="portfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Projetos Recentes</p>
          <h2 className="section--heading">Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github" role="link" onClick={() => openInNewTab("https://github.com/Sandrellytsbarros")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 33 33"
            >
            </svg>
            Github
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={process.env.PUBLIC_URL + item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
