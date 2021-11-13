import React, { useState, useEffect } from "react";
import AboutComp from "../components/About/AboutComp";
import Skills from "../components/MySkills/Skills";
import Page from "../components/Page/Page"
import Services from "../components/Services/Services";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { motion } from "framer-motion"


const About = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  },[]);
  const override = css`
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
  `;
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
      style={{transition:"all 1s ease"}}
    >


      {loading ? (
        <ClipLoader
          css={override}
          size={100}
          color={"#123abc"}
          loading={loading}
        />
      ) : (
        <Page>
          <AboutComp />
          <Skills />
          <Services />
        </Page>
      )}
    </motion.div>
  );
};

export default About;
