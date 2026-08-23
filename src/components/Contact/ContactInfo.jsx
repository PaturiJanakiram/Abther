import React from "react";
const ContactInfo = ({ icon, title, value }) => { 

  return (
    <div className="contact-card">
      <div className="contact-icon">
        {icon}
      </div>
      <div className="contact-info"><h3>{title} <br/><p>{value}</p></h3></div> 
    </div>
  );
};

export default ContactInfo;
