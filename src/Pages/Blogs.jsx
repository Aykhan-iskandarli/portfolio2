import React from "react";
import Title from "../components/Title/Title";
import Page from "../components/Page/Page"

import BlogComp from "../components/BlogComp/BlogComp";
import { motion } from "framer-motion"

const Blogs = () => {



  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    style={{transition:"all 1s ease"}}
    >

      <Page>
      <Title> Recents Blogs</Title>
      <BlogComp/>
      </Page>
     
    </motion.div>
  );
};

export default Blogs;
