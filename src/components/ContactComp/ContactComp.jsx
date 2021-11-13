import React from "react";
import "./contact.scss";

const ContactComp = ({ icon, text1, text2, title }) => {
  return (
    <div className="ContactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-items">
          <h6>{title}</h6>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
