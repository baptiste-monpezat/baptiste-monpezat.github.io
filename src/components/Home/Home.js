import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import svgRect from '#src/static/home_rect.svg'

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '#common/IconLink';
import PageHeader from '#common/PageHeader';
import Flex from "#common/Flex";
import Button from "#common/Button";

import { Card, CardIcon, CardText, CardTitle } from "#common/Card";

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon><FontAwesomeIcon icon="vial" /></CardIcon>
      <CardTitle>Data Science</CardTitle>
      <CardText>
      Turning a high volume of data into key insights and make them speak is what I do !
      </CardText>
    </Card>

    <Card>
      <CardIcon><FontAwesomeIcon icon="code" /></CardIcon>
      <CardTitle>Programming</CardTitle>
      <CardText>
      I love to solve problems with lines of code.
      Programming is a philosophy and the only limit is my imagination.
      </CardText>
    </Card>

    <Card>
      <CardIcon><FontAwesomeIcon icon="paint-brush" /></CardIcon>
      <CardTitle>Fun projects</CardTitle>
      <CardText>
      I enjoy making projects and sharing what I have learned with you. Practices make perfect.
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, i’m</p>
          <h1>Baptiste Monpezat</h1>
          <p className="adjust">Data Scientist</p>

          <div className="home__CTA">
            <Button className="cta" as="a" href="#">Download Resume</Button>

            <div className="home__social">
              <IconLink label="github" icon={["fab", "github"]} href="//github.com/baptiste-monpezat" />
              <IconLink label="twitter" icon={["fab", "twitter"]} href="//twitter.com/Mnpzat" />
              <IconLink label="medium" icon={["fab", "medium"]} href="//medium.com/@baptiste.monpezat" />
              <IconLink label="linkedin" icon={["fab", "linkedin"]} href="//fr.linkedin.com/in/baptiste-monpezat-898074129" />
              <IconLink label="linkedin" icon={["fab", "kaggle"]} href="//www.kaggle.com/baptistemonpezat" />             
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>

      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>Things I love <i className="fas fa-heart" /></PageHeader>
      <ThingsILove />

    </HomeWrapper>
  )
}

export default Home;