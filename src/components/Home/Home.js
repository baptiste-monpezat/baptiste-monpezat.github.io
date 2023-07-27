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
        I'm captivated by the power of data science to unlock hidden patterns and insights.<br />
        It's a tool that transforms raw data into meaningful information, fueling informed decisions and innovative solutions.
      </CardText>
    </Card>

    <Card>
      <CardIcon><FontAwesomeIcon icon="baseball-ball" /></CardIcon>
      <CardTitle>Sport Analytics</CardTitle>
      <CardText>
        As a tennis enthusiast, I find the application of data science in sports thrilling.<br />
        It's a game-changer, enhancing performance, strategy, and understanding of the game.
      </CardText>
    </Card>

    <Card>
      <CardIcon><FontAwesomeIcon icon="code" /></CardIcon>
      <CardTitle>Programming</CardTitle>
      <CardText>
        The art of coding is like a creative puzzle to me.<br />
        It's the backbone of all digital solutions, enabling us to build, innovate, and explore the limitless world of technology.
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
          <p className="adjust">Senior Data Scientist</p>

          <div className="home__CTA">
            <Button className="cta" as="a" href="#">Download Resume</Button>

            <div className="home__social">
              <IconLink label="github" icon={["fab", "github"]} href="//github.com/baptiste-monpezat" />
              <IconLink label="twitter" icon={["fab", "twitter"]} href="//twitter.com/Mnpzat" />
              <IconLink label="medium" icon={["fab", "medium"]} href="//medium.com/@baptiste.monpezat" />
              <IconLink label="linkedin" icon={["fab", "linkedin"]} href="//fr.linkedin.com/in/baptiste-monpezat-898074129" />
              <IconLink label="kaggle" icon={["fab", "kaggle"]} href="//www.kaggle.com/baptistemonpezat" />
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