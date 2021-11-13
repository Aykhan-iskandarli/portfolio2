import React from "react";
import Page from "../Page/Page";
import Title from "../Title/Title";
import Service from "./Service";
import game from "../../image/game-dev.svg"
import intelligence from "../../image/intelligence.svg"
import design from "../../image/design.svg"

const Services = () => {
  return (
    <div>
      <Page>
        <Title>Services</Title>
       <div className="d-flex">
        <Service image={design} title={'Web design'}  text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
            <Service image={intelligence} title={'Artificial Intelligence'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            <Service image={game} title={'Game Development'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
       </div>
      </Page>
    </div>
  );
};

export default Services;
