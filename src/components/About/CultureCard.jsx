import React from "react";

const CultureCard = ({ icon, title, description }) => {
  return (
    <div className="culture-card">      
        <img src={icon} alt="" /> 
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  );
};

export default CultureCard;
