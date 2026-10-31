import React from "react";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import founderImage from "../../images/team/founder.JPG";

const TeamCard = ({ founder }) => {
  return (
    <div>
    <div className="founder-card">
      <div className="founder-image">      
        <img
          src={founderImage}
          alt={founder.name}
        />
        <div className="founder-image-content">
          <h3>{founder.name}</h3>
          <h5>{founder.role}</h5>
        </div>
      </div>

      <div className="founder-content">

        <span className="leader-tag">
          About the founder
        </span>       

        {founder.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <div className="credential-grid">

          {founder.credentials.map((item, index) => (

            <div  key={index}       className="credential-card" >

              {index === 0 && <GraduationCap size={20} />}
              {index === 1 && <Briefcase size={20} />}
              {index >= 2 && <Award size={20} />}
              <span>{item}</span>

            </div>

          ))}

        </div>
      </div>     
      </div>
      <div class="cofounder-grid">
        <div class="cof-card">
          <div class="cof-photo cof-a">SD</div>
          <div class="cof-body">
            <div class="cof-name">Sandhya Devi Sukala</div>
            <div class="cof-role">Co-Founder</div>
            <p>A founding pillar of AbTher, Sandhya brings the organisational backbone that turns deep science into a functioning company — anchoring operations, people, and partnerships. Her steady, execution-focused leadership keeps the team aligned and the mission moving from the lab bench toward real-world impact.</p>
          </div>
        </div>
        <div class="cof-card">
          <div class="cof-photo cof-b">VV</div>
          <div class="cof-body">
            <div class="cof-name">Vindhyavasini Singampalli</div>
            <div class="cof-role">Co-Founder</div>
            <p>Co-founder and strategic driving force, Vindhyavasini helps shape AbTher's direction and long-term vision. She champions the company's commitment to accessible, affordable healthcare — building the relationships and momentum needed to bring diagnostics and therapeutics to the communities that need them most.</p>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default TeamCard;
