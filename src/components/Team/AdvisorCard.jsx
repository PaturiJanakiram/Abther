import React from "react";

const AdvisorCard = ({ adv,name, role }) => {
  return (
    <div className="advisor-card">

      {/*<div className="advisor-icon">*/}
      {/*  <Users size={34} />*/}
      {/*</div>*/}
      <img src={adv} alt="advisors"/>
      <h3>{name}</h3>

      <p>{role}</p>

    </div>
  );
};

export default AdvisorCard;
