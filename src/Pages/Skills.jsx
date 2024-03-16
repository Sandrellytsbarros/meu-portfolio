import React, { useState, useEffect } from 'react';
import SkillsService from '../Services/SkillsService';

export default function Skills() {

  const [skills, setSkills] = useState();

  useEffect(() => {
    SkillsService
      .get(process.env.PUBLIC_URL + "/data/skills.json")
      .then((response) => setSkills(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <section className="skills--section" id="skills">
      <div className="portfolio--container">
        <p className="section--title">Habilidades</p>
        <h2 className="skills--section--heading">Minha Experiência</h2>
      </div>
      <div className="skills--section--container">
        {skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={process.env.PUBLIC_URL + item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
