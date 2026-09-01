import "./Team.css";
import TeamCard from "./TeamCard";
import AdvisorCard from "./AdvisorCard";
import { Microscope, Dna, BrainCircuit, Stethoscope, FileCheck, Handshake } from "lucide-react";
import Adv1 from "../../images/team/Adv1.PNG";
import Adv2 from "../../images/team/Adv2.png";
import Adv3 from "../../images/team/Adv3.png";
import Adv4 from "../../images/team/Adv4.png";
import Adv5 from "../../images/team/Adv5.png";
import Adv6 from "../../images/team/Adv6.png";
import Adv7 from "../../images/team/Adv7.png";
import Adv8 from "../../images/team/Adv8.png";
import Adv9 from "../../images/team/Adv9.jpeg";
import Adv10 from "../../images/team/Adv10.png";
import Adv11 from "../../images/team/Adv11.png";
import Adv12 from "../../images/team/Adv12.png";

const disciplines = [
  {
    name: "Molecular Diagnostics",
    icon: Microscope
  },
  {
    name: "Antibody Engineering",
    icon: Dna
  },
  {
    name: "AI & Software",
    icon: BrainCircuit
  },
  {
    name: "Clinical Research",
    icon: Stethoscope
  },
  {
    name: "IP & Regulatory",
    icon: FileCheck
  },
  {
    name: "Commercial & Partnerships",
    icon: Handshake
  }
];

const advisors = [
  {
    adv: Adv1,
    name: "Prof. D. Narasimha Rao",
    role:
      "Honorary Professor, Indian Institute of Science (IISc), Bangalore — molecular biology & biochemistry"
  },
  {
    adv: Adv2,
    name: "Dr. Madhusoodanan U. K.",
    role:
      "Sree Chitra Tirunal Institute for Medical Sciences & Technology (SCTIMST) — medical diagnostics research"
  },
  {
    adv: Adv3,
    name: "Dr. Ramarao",
    role:
      "Central University of Tamil Nadu (CUTN) — research sciences & co-investigator"
  },
  {
    adv: Adv4,
    name: "Dr. Manashjit Gogoi",
    role:
      "Department of Biomedical Engineering, North-Eastern Hill University (NEHU) — bionanotechnology, biosensors & magnetic nanoparticles"
  }
];

const advisors1 = [
  {
    adv: Adv5,
    name: "Dr. Karolina Can",
    role:
      "Clinical Development & Clinical Trials"
  },
  {
    adv: Adv6,
    name: "Dr. V. Ajay Narendra T",
    role:
      "Neurodiagnostics & Disease Strategy"
  },
  {
    adv: Adv7,
    name: "Dr. Krishna P",
    role:
      "Molecular Diagnostics & Clinical Chemistry"
  },
  {
    adv: Adv8,
    name: "Dr. Priya Raju",
    role:
      "IP & Regulatory Affairs"
  }
];

const advisors2 = [
  {
    adv: Adv9,
    name: "Mr. Vasu Dev G",
    role:
      "Business & Commercial Strategist — leads go-to-market strategy, commercial operations, partnerships, and revenue model design, translating AbTher's science into a scalable, sustainable business."
  },
  {
    adv: Adv10,
    name: "Ms. Santoshi Bhargavi B",
    role:
      "Business Development & Customer Engagement — drives strategic partnerships, client relationships, and market outreach across healthcare and institutional channels."
  },
  {
    adv: Adv11,
    name: "Prof. V. R. Reddy",
    role:
      "Andhra University — strategic marketing & market development"
  },
  {
    adv: Adv12,
    name: "Prof. Arun Kumar",
    role:
      "Andhra University — market intelligence & commercial strategy"
  }
];


const founder = {
  name: "Dr. Chiranjeevi Bodda",
  role: "Founder & Chief Executive Officer",
  about: [
    "Dr. Chiranjeevi Bodda is the founder and CEO of AbTher Biotech, with more than 16 years of international research and development experience spanning cancer therapeutics, immuno-oncology, virology and neurological disease.",

    "He has held leadership and senior scientific roles in the European biopharmaceutical sector, building expertise in companion diagnostics, drug discovery, translational medicine and preclinical-to-clinical development, including regulatory experience with first-in-human studies. His early research foundations were built at the Indian Institute of Science (IISc), Bangalore.",

    "He conceived AbTher's multiplex diagnostic platform and leads its execution, driving the company's mission to deliver affordable, rapid and accessible healthcare for underserved communities worldwide."
  ],

  credentials: [
    "Ph.D. – University of Göttingen",
    "Executive MBA",
    "16+ Years International R&D",
    "Antibody & ADC Expertise",
    "Published in Leading Journals"
  ]
};



export default function Team() {
  return (
    <section id="team" className="team-section">

      <div className="container">
        <div className="team-header">
          <span className="team-tag">
            Leadership
          </span>
          <h2>
            Founder-led, science-first
          </h2>
          <p>
            AbTher is led by a scientist-entrepreneur with deep
            international experience across antibody therapeutics
            and translational medicine—supported by a
            multidisciplinary team and a distinguished advisory
            council.
          </p>
        </div>

        <TeamCard founder={founder} />
        <div className="team-strip">
          <h4>
            A multidisciplinary team across every discipline we need
          </h4>
          <div className="disc-grid">
            {disciplines.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="disc-card"
                >
                  <div className="disc-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                    />
                  </div>
                  <h5>{item.name}</h5>
                </div>
              );
            })}
          </div>
        </div>

        <div className="advisor-section">
          <h4>
            Scientific & Technology Advisors
          </h4>

          <div className="advisor-grid">

            {advisors.map((advisor, index) => (

              <AdvisorCard
                key={advisor.name}
                {...advisor}
              />

            ))}

          </div>

        </div>

        <div className="advisor-section">

          <h4>
            Clinical, Diagnostic & Regulatory Translation
          </h4>

          <div className="advisor-grid">

            {advisors1.map((advisor, index) => (

              <AdvisorCard
                key={advisor.name}
                {...advisor}
              />

            ))}

          </div>
        </div>

        <div className="advisor-section">

          <h4>
            Business, Market & Commercialization
          </h4>

          <div className="advisor-grid">

            {advisors2.map((advisor, index) => (

              <AdvisorCard
                key={advisor.name}
                {...advisor}
              />

            ))}

          </div>
        </div>

      </div>

    </section>
  );
}
