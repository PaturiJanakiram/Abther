import "./Team.css";
import TeamCard from "./TeamCard";
import AdvisorCard from "./AdvisorCard";
import { Microscope, Dna, BrainCircuit, Stethoscope, FileCheck, Handshake } from "lucide-react";
import Adv1 from "../../images/team/Adv1.PNG";
import Adv2 from "../../images/team/Adv2.png";
import Adv3 from "../../images/team/Adv3.png";
import Adv4 from "../../images/team/Adv4.png";

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
            Advisory Council
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

      </div>

    </section>
  );
}
