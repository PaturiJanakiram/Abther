import "./About.css";
import CultureCard from "./CultureCard";
import ValueCard from "./ValueCard";
import MissionVision from "./MissionVision";
import AboutBanner from "../../images/about/AboutBanner.png";

const cultureData = [
  {
    icon: "☕",
    title: "Curiosity, over coffee",
    description:
      "Our best breakthroughs start as questions across a lab bench. Every voice shapes the science—we solve problems in conversation, not in silos."
  },
  {
    icon: "💡",
    title: "Bold ideas, real rigour",
    description:
      "We move fast and validate hard. A high-energy environment where ambitious ideas are welcomed—and then held to the highest scientific standard."
  },
  {
    icon: "🌍",
    title: "Global impact, local roots",
    description:
      "Anchored in Visakhapatnam, building for the world. We measure success by the patients reached, not just the papers published."
  }
];

const valuesData = [
  {
    number: "01",
    title: "Innovation with impact",
    description:
      "Science that solves real problems. If it doesn't reach a patient, it isn't finished."
  },
  {
    number: "02",
    title: "Integrity always",
    description:
      "Honest data, honest people. No shortcuts in the science, and none in the business."
  },
  {
    number: "03",
    title: "People first",
    description:
      "Technology that empowers patients, clinicians, and communities—not the other way around."
  },
  {
    number: "04",
    title: "Sustainability by design",
    description:
      "Built to protect people and the planet, from cassette materials to cloud infrastructure."
  },
  {
    number: "05",
    title: "Learning never stops",
    description:
      "Curiosity drives every experiment. Every result—expected or not—teaches us something."
  },
  {
    number: "06",
    title: "Access for all",
    description:
      "Quality diagnostics and therapeutics are a right, not a privilege of geography or income."
  }
];

export default function About() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="container">

          <div className="about-header">
            <span className="about-tag">Who We Are</span>

            <h2>
              A deep-science company built to close the healthcare gap
            </h2>

            <p>
              AbTher Biotech is a research-driven biotechnology company
              advancing two complementary platforms: rapid AI-powered
              diagnostics and precision antibody &amp; antibody-drug conjugate
              (ADC) therapeutics.

              Our team combines nearly two decades of international experience
              in antibody discovery, cancer immunotherapy and translational
              medicine—turning frontier science into tools that work in the
              real world, from tertiary hospitals to the most remote clinic.
            </p>
            <img src={AboutBanner} alt="About Banner" className="about-banner"/>
          </div>

          {/* Culture */}

          <div className="culture-title">
            <span>Life at AbTher</span>
          </div>

          <div className="culture-grid">
            {cultureData.map((item, index) => (
              <CultureCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section className="values-section">

        <div className="container">

          <div className="about-header">
            <span className="about-tag">
              What We Stand For
            </span>

            <h2>
              Our values guide every decision
            </h2>
          </div>

          <div className="values-grid">
            {valuesData.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>

          <MissionVision />

        </div>

      </section>
    </>
  );
}
