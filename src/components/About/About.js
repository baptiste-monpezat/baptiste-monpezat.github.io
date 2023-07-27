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
          Welcome to my blog!<br />
          <br />
          I'm a Senior Data Scientist at Goshaba, with a passion for tennis and a keen interest in applying data science to sports analytics.<br />
          This space is where I share my projects and learnings, aiming to make data science accessible and exciting. <br />
          Join me as we explore the fascinating intersection of data, sports, and learning. <br />
          <br /><br />
          Let's decode the world of data together!



          <br />
        </p>
      </AboutInfo>

    </AboutWrapper>
  )
}

export default About;