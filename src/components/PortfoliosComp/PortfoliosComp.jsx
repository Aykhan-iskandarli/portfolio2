import React, { useState, useEffect } from "react";
import {
  reactjs,
  webPortfolio,
  nodejs,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import PortfolioList from "./PortfolioList";
import "./portfolios.scss";
import { motion } from "framer-motion"


const PortfoliosComp = () => {
  const [selected, setSelected] = useState("reactjs");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "reactjs",
      title: "React app",
    },
    {
      id: "nodejs",
      title: "Node js",
    },
    {
      id: "web",
      title: "Web App",
    },
 
    {
      id: "design",
      title: "Design App",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "reactjs":
        setData(reactjs);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "nodejs":
        setData(nodejs);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(reactjs);
    }
  }, [selected]);

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className="portfolio" id="portfolio">
      <ul className="portfolio_menu">
        {list.map((item) => (
          <PortfolioList
  
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="portfolio-item">
        {data.map((d) => (
          <a href={d.link}>
            <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
            
            className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default PortfoliosComp;
