import React, { useState, useEffect } from 'react';
import HomeService from '../Services/HomeService';

export default function Home() {

  const [home, setHome] = useState();

  useEffect(() => {
    HomeService
      .get(process.env.PUBLIC_URL + "/data/home.json")
      .then((response) => setHome(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Olá, me chamo {home?.name}</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">{home?.role}</span>
            </h1>
            <p className="hero--section-description">
              {home?.subtitle}
            </p>
          </div>
        </div>
        <div className="hero--section--img">
          <img src={process.env.PUBLIC_URL + home?.imghome} alt="Hero Section" />
        </div>
      </section>
      <section id="about" className="about--section">
        <div className="about--section--img">
          <img src={process.env.PUBLIC_URL + home?.imgabout} alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Sobre</p>
            <h1 className="skills-section--heading">Sobre mim</h1>
            <p className="hero--section-description">
              {home?.description}
            </p>
          </div>
        </div>
      </section>
    </div>  
  );
}
