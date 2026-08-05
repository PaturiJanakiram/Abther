import "./Process.css";
import ProcessStep from "./ProcessStep";

const processSteps = [
  {
    number: "01",
    title: "Research",
    subtitle: "Discovery & Innovation",
    description:
      "Scientific research begins with identifying unmet clinical needs, validating biological targets and developing innovative diagnostic and therapeutic technologies.",

    points: [
      "Target identification",
      "Biomarker discovery",
      "Antibody engineering",
      "AI algorithm development"
    ]
  },

  {
    number: "02",
    title: "Validation",
    subtitle: "Testing & Optimization",
    description:
      "Every solution undergoes rigorous laboratory validation, optimization and analytical testing to ensure reliability, reproducibility and clinical relevance.",

    points: [
      "Laboratory validation",
      "Prototype optimisation",
      "Analytical verification",
      "Quality assurance"
    ]
  },

  {
    number: "03",
    title: "Clinical Translation",
    subtitle: "Regulatory & Trials",
    description:
      "Solutions progress through clinical evaluation, regulatory planning and healthcare collaboration before commercial deployment.",

    points: [
      "Clinical studies",
      "Regulatory pathway",
      "Healthcare partnerships",
      "Market readiness"
    ]
  },

  {
    number: "04",
    title: "Commercial Impact",
    subtitle: "Scale & Accessibility",
    description:
      "Manufacturing, commercialization and continuous innovation ensure our technologies reach patients worldwide with maximum impact.",

    points: [
      "Manufacturing",
      "Global distribution",
      "Continuous innovation",
      "Patient accessibility"
    ]
  }
];

export default function Process() {
  return (
    <section
      id="process"
      className="process-section"
    >
      <div className="container">

        <div className="section-header center">

          <span className="section-tag">
            Our Process
          </span>

          <h2>
            From scientific discovery to patient impact
          </h2>

          <p>
            Every innovation at AbTher follows a structured pathway—
            transforming scientific ideas into validated healthcare
            solutions that improve lives worldwide.
          </p>

        </div>

        <div className="process-timeline">

          {processSteps.map((step, index) => (

            <ProcessStep
              key={index}
              step={step}
            />

          ))}

        </div>

      </div>
    </section>
  );
}
