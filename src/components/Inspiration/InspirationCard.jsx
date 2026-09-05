import React from "react";


const InspirationCard = ({ stories }) => {
  return (
    <div className="inspiration-card">
      <img
        className="inspiration-image"
        src={stories.photo}
        alt="inspire"
      />

      <div className="image-overlay"></div>

      <div className="inspiration-content">
        <h1>{stories.id}</h1>
        <h3>{stories.title}</h3>       
        <p>{stories.description}</p>
      </div>
    </div>
  );
};
export default InspirationCard;
