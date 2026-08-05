import React from "react";
import { Users } from "lucide-react";

const AdvisorCard = ({ name, role }) => {
  return (
    <div className="advisor-card">

      <div className="advisor-icon">
        <Users size={34} />
      </div>

      <h3>{name}</h3>

      <p>{role}</p>

    </div>
  );
};

export default AdvisorCard;
