import React from 'react';
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return(
    <div>
      <Hero title={props.title} />

      <Content>
        <p>Hi my name is Leo. I'm a Full-Stack engineer based in Berlin/Germany with experience in JavaScript, React, Ruby/Ruby On Rails, Node.js, Express.js, MongoDB.</p>

        <p>My goal is to never stop learning and improving myself. Currently, that means gaining more experience with the technologies above and more. <strong style={{color: "red"}}>I am currently looking for a full-time position in Berlin, contact me!</strong></p>

        <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

        <p>My full-stack project, MyOja, is an Interview Tracker for aimed at young professionals and students applying for many jobs simultaneously. You can check it out <a href="http://www.myoja.de/" target="_blank" rel="noopener noreferrer">here</a>. It is built with Ruby, Embedded Ruby, HTML/CSS, and JavaScript. However, I plan on rebuilding it using React in the coming months</p>

        <p>On my free time I love travelling, listening to music, taking cool pictures and playing sports.</p>
      </Content>
    </div>
  );
}

export default AboutPage;