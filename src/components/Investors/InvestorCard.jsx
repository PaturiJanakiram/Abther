import React from "react";

const InvestorCard = ({
  theme,
  label,
  value,
  description,
}) => {
  return (
    <div className={`investor-card ${theme}`}>

      <span className="investor-label">
        {label}
      </span>

      <h3>{value}</h3>

      <p>{description}</p>

    </div>
  );
};

export default InvestorCard;
