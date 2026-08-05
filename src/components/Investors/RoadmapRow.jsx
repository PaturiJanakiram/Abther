import React from "react";
import { ArrowRight } from "lucide-react";

const RoadmapRow = ({
  phase,
  year,
  color,
  title,
  description,
  funding,
}) => {
  return (
    <div className="roadmap-row">

      <div className={`phase-badge ${color}`}>
        <span>{phase}</span>
        <small>{year}</small>
      </div>

      <div className="roadmap-content">

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

      <div className="roadmap-funding">

        <span>{funding}</span>

        <ArrowRight size={18} />

      </div>

    </div>
  );
};

export default RoadmapRow;
