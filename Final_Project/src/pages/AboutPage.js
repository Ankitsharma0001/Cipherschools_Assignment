import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>Hello, my name is Ankit Sharma. I'm a Web Developer.</p>
        <br />
        <p>
          I want to create such websites which are helpfull <br /> for many.
        </p>
        <br />
        <p>
          My latest project that I have worked on is a Departmental Store Management System, an
          <br /> laravel project created using Bootstrap and PHP.
          <br />
          Click<a href='https://github.com/Ankitsharma0001/departmental' target='_blank' rel='noopener noreferrer'>
            here.
          </a>
        </p>
        <br />
      </Content>
    </div>
  );
}

export default AboutPage;
