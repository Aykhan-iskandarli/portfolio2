import React,{useEffect,useState} from "react";
import Title from "../components/Title/Title";
import Page from "../components/Page/Page";
import ContactItem from "../components/ContactComp/ContactItem";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { motion } from "framer-motion"


const Contact = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

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
    exit={{opacity:0}}>
          {loading ? (
        <ClipLoader
          css={override}
          size={100}
          color={"#123abc"}
          loading={loading}
        />
      ) : (
      <Page>
        <Title>Contact</Title>
        <ContactItem />
      </Page>
        )}
    </motion.div>
     
  );
};

export default Contact;
