import React from "react";


const InspirationCard = ({ stories }) => {
  return (
    <div className="inspiration-card">
      <h3>{stories.id}</h3>
      <h1>{stories.title}</h1>
      <h4>{stories.type}</h4>
      <p> {stories.description}</p>
    </div>
  );
};
export default InspirationCard;
