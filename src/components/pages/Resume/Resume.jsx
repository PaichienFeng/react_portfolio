import React from 'react';
import css from '../Resume/Resume.module.scss'

export default function About() {
  return (
    <div className={css.container}>
      <h1>Resume</h1>
     <h4>
      Download my <a target='_blank' className={css.resume} href="https://docs.google.com/document/d/1AUh3qcDqlsQumw33-8dht2cj-VtVc2nxf-z2u_hKjrM/edit">resume</a>
     </h4>
     <h2>Front-end Proficiencies</h2>

     <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>RESPONSIVE DESIGN</li>
      <li>REACT</li>
      <li>BOOTSTRAP</li>
      <li>MATERIAL UI</li>
     </ul>

     <h2>Back-end Proficiencies</h2>

     <ul>
      <li>APIS</li>
      <li>NODE</li>
      <li>EXPRESS</li>
      <li>MYSQL, SEQUELIZE</li>
      <li>MONGODB, MONGOOSE</li>
      <li>REST</li>
      <li>GRAPHQL</li>
     </ul>
    </div>
  );
}
