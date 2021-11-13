import React,{ useEffect, useRef} from 'react';
import {init} from 'ityped'
import "./homeComp.scss";
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const HomeComp = () => {
  const textRef=useRef();
  useEffect(()=>{
      init(textRef.current,{
          showCursor : true,
          backDelay:1500,
          backSpeed:60,
          strings : ["Aykhan Iskandarli"]
      });
  },[])
  return (
    <>
      <div className="home">
        <div className="home-content">
          <div className="name">
            <h1>
              Hi, i am <span> </span>
              <span ref={textRef}></span>
            </h1>
          </div>
          <div className="desc">
            <h2 >Front-End Developer</h2>
              {/* <h2>Freelance </h2> */}
          </div>
          <div className="social-link">
            <ul>
                <li> <a href="https://www.facebook.com/Axiles1907/"><BsFacebook className="fb"/></a> </li>
                <li> <a href="https://www.instagram.com/ayxan_robot/"><BsInstagram className="in"/></a></li>
                <li> <a href="https://www.linkedin.com/in/aykhan-iskandarli-7190a911b/"><BsLinkedin className="li"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComp;
