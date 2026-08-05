import "./Team.css";
import TeamCard from "./TeamCard";
import AdvisorCard from "./AdvisorCard";

const disciplines = [
  "Molecular Diagnostics",
  "Antibody Engineering",
  "AI & Software",
  "Clinical Research",
  "Regulatory Affairs",
  "Manufacturing"
];

const advisors = [
  {
    name: "Global Scientific Advisors",
    role: "International experts in antibody therapeutics, translational medicine and oncology."
  },
  {
    name: "Clinical & Regulatory Network",
    role: "Supporting clinical validation, regulatory strategy and healthcare partnerships."
  },
  {
    name: "Innovation & Industry Partners",
    role: "Strengthening commercialization, manufacturing and strategic collaborations."
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

        <div className="section-header">

          <span className="section-tag">
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

            {disciplines.map((item, index) => (

              <div
                key={index}
                className="disc-card"
              >

                <div className="disc-icon">
                  🧬
                </div>

                <h5>{item}</h5>

              </div>

            ))}

          </div>

        </div>

        <div className="advisor-section">

          <h4>
            Advisory Council
          </h4>

          <div className="advisor-grid">

            {advisors.map((advisor, index) => (

              <AdvisorCard
                key={index}
                {...advisor}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
