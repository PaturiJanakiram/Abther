import React from "react";

const CultureCard = ({ icon, title, description }) => {
  return (
    <div className="culture-card">
      <div className="culture-icon">
        <span>{icon}</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default CultureCard;
