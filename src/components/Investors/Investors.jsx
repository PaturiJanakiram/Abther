import "./Investors.css";
import InvestorCard from "./InvestorCard";
import RoadmapRow from "./RoadmapRow";

const investorCards = [
  {
    theme: "dark",
    label: "SCIENTIFIC DEPTH",
    value: "16+ yrs",
    description:
      "International R&D leadership across antibody therapeutics and immuno-oncology — uncommon depth for an early-stage venture."
  },
  {
    theme: "teal",
    label: "DIAGNOSTICS MARKET",
    value: "$77B+",
    description:
      "Global point-of-care market by 2028, growing approximately 9% annually, with strong demand in emerging economies."
  },
  {
    theme: "gold",
    label: "THERAPEUTICS MARKET",
    value: "$30B+",
    description:
      "Global ADC market by 2030 — the fastest-growing oncology modality, with clear licensing pathways."
  },
  {
    theme: "plain",
    label: "BUSINESS MODEL",
    value: "Dual",
    description:
      "Diagnostics drive near-term revenue and grant fundability; therapeutics create long-term licensing upside."
  }
];

const roadmap = [
  {
    phase: "Phase I",
    year: "",
    color: "p1",
    title: "Proof of concept & prototype",
    description:"Prototype build, calibration and AI model development. Seed funding and non-dilutive grant support.",
    funding: "Seed & Grants"
  },
  {
    phase: "Phase II",
    year: "",
    color: "p2",
    title: "Clinical readiness & validation",
    description:"Validation studies, regulatory groundwork (CDSCO / CE pathways), and intellectual-property filings.",
    funding: "Series A"
  },
  {
    phase: "Phase III",
    year: "",
    color: "p3",
    title: "Commercial launch",
    description: "Initial manufacturing, pilot deployment with healthcare partners, and first commercial revenue.",
    funding: "Growth Capital"
  },
  {
    phase: "Phase IV",
    year: "",
    color: "p4",
    title: "Global expansion",
    description:
      "Scaled manufacturing across Asia, Africa and beyond together with therapeutics licensing.",
    funding: "Series B"
  }
];

const grants = [
  "National biotech grant frameworks",
  "Public-health research funding",
  "MedTech innovation programmes",
  "Global health foundations",
  "Strategic pharma partnerships"
];

export default function Investors() {
  return (
    <section
      id="investors"
      className="investors-section"
    >
      <div className="container">

        <div className="investors-header center">

          <span className="investors-tag gold">          
            FOR INVESTORS & PARTNERS
          </span>

          <h2>
            A rare window, and the team to seize it
          </h2>

          <p>
            Two large, growing markets. A founder with global depth. A de-risked, dual-platform model.
            We welcome mission-aligned investors, grant partners, and strategic collaborators.
          </p>

        </div>

        {/* Investor Cards */}

        <div className="investor-grid">

          {investorCards.map((card, index) => (

            <InvestorCard
              key={index}
              {...card}
            />

          ))}

        </div>

        {/* Roadmap */}

        <div className="roadmap">

          {roadmap.map((item, index) => (

            <RoadmapRow
              key={index}
              {...item}
            />

          ))}

        </div>

        {/* Grant Pills */}

        <div className="grant-pills">

          {grants.map((grant, index) => (

            <span
              key={index}
              className="grant-pill">
              {grant}
            </span>

          ))}

        </div>

      </div>
    </section>
  );
}
