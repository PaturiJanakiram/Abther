import React from "react";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import founderImage from "../../images/team/founder.webp";

const TeamCard = ({ founder }) => {
  return (
    <div className="founder-card">

      <div className="founder-image">

        <img
          src={founderImage}
          alt={founder.name}
        />

      </div>

      <div className="founder-content">

        <span className="leader-tag">
          Founder & CEO
        </span>

        <h3>{founder.name}</h3>

        <h5>{founder.role}</h5>

        {founder.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <div className="credential-grid">

          {founder.credentials.map((item, index) => (

            <div
              key={index}
              className="credential-card"
            >

              {index === 0 && <GraduationCap size={20} />}
              {index === 1 && <Briefcase size={20} />}
              {index >= 2 && <Award size={20} />}

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default TeamCard;
