import React from "react";

const ValueCard = ({ number, title, description }) => {
  return (
    <div className="value-card">

      <div className="value-number">
        {number}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
};

export default ValueCard;
