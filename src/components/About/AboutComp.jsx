import React,{useState} from "react";
import "./about.scss";
import profil from "../../image/profil/bg.png";
import Title from "../Title/Title";
import Button from "../Button/Button";
import jsPDF from 'jspdf';
import cv from "../../image/cv/cv.png"
import loading from "../../image/loading.gif"


const AboutComp = () => {
  const [disable, setDisable] = useState(false)
  const download =()=>{
    setDisable(true)
   setTimeout(()=>{
    setDisable(false)
   },1500)
    var doc =new jsPDF("landscape","px", "a4", "false")
    doc.addImage(cv,"PNG", 200, 20, 250, 400)
    doc.save("Front-End Developer.pdf")
}
  return (
    <>
      <div className="about">
      
          <Title className="about_title">About Me</Title>
          <div className="about-content ">
            <div className="about-img">
              <img src={profil} alt="" />
            </div>
            <div className="about-info">
              <div className="about-title">
                <h2>i am <span>Aykhan Iskandarli</span>  </h2>
              </div>
              <div className="about-desc">
                <p>
                
                </p>
              </div>
              <div className="about-full-name">
                <p>Full Name</p> : <span>Aykhan Iskandarli</span>
              </div>
              <div className="about-age">
                <p>Age</p> : <span>24</span>
              </div>
              <div className="about-nationally">
                <p>Nationally</p> : <span>Azerbaijan</span>
              </div>
              <div className="about-languages">
                <p>Languages</p> : <span>Azerbaijan, English</span>
              </div>
              <div className="about-address">
                <p>Address</p> : <span>Baki, Suraxani</span>
              </div>
             <div className="loading-btn">
           
                <Button className="btn-download" onClick={download} disabled={disable?true:false}> {disable&& <img src={loading} alt="" /> }Download Cv</Button>
             </div>
            </div>
          </div>
       
      </div>
    </>
  );
};

export default AboutComp;
