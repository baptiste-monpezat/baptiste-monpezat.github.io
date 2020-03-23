import React from "react";

import SkewBg from '#common/SkewBg';
import PageHeader from '#common/PageHeader';
import Flex from "#common/Flex";

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';


const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="avatar.jpg" />
        </div>
        <p>
          Hi I'm Baptiste,<br />
          <br/>
          I am a French Data scientist who love to create and share projects.<br/> Passionate about statistics and programming,
          I thrive on using those skills to understand and solve problems. <br/>
          Data Science, most specifically Artificial Intelligence, is a field where things are moving very quickly. That's why, 
          I believe it's important to keep up to date with breakthroughs, and share projects with this great community.<br/>
          <br/>
          I am looking forward to read your feedbacks.<br/>

          Please feel free to contact me if you have any questions. 


          
          <br />
        </p>
      </AboutInfo>

    </AboutWrapper>
  )
}

export default About;