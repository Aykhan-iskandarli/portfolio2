import React from "react";
import "./skills.scss";
import Page from "../Page/Page";
import Title from "../Title/Title";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="skills">
      <Page>
        <Title>My Skills</Title>
        <div className="row my-skills mobile-skills ">
          <div className="col-6 ">
            <Skill skill={"Html"} progress={"90%"} width={"90%"} />
            <Skill skill={'Css'} progress={'80%'}   width={'80%'} />
            <Skill skill={"Javascript"} progress={"80%"} width={"80%"} />
            <Skill skill={"Bootstrap"} progress={"80%"} width={"80%"} />
            <Skill skill={"Jquery"} progress={"60%"} width={"60%"} />
            
          </div>
          <div className="col-6">
            <Skill skill={"React js"} progress={"70%"} width={"70%"} />
            <Skill skill={"Node js"} progress={"60%"} width={"60%"} />
            <Skill skill={"Express js"} progress={"70%"} width={"70%"} />
            <Skill skill={"MongoDb"} progress={"50%"} width={"50%"} />
            <Skill skill={"Web design"} progress={"80%"} width={"80%"} />
         
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Skills;
