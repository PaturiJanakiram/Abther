import "./HowItWorks.css";
import BloodCapsule from "../../images/howitworks/BloodCapsule.png";

const steps = [
  {
    number: "1",
    title: "Collect",
    description:
      "A few drops of blood are applied to a single-use cassette. No venepuncture, minimal training."
  },
  {
    number: "2",
    title: "Detect",
    description:
      "The cassette runs a multiplex reaction across a broad panel of markers simultaneously."
  },
  {
    number: "3",
    title: "Interpret",
    description:
      "On-device AI reads the spectral signals and delivers an accurate, real-time result."
  },
  {
    number: "4",
    title: "Act",
    description:
      "Clear output in minutes — enabling earlier treatment and connected population insights."
  }
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">

        <div className="how-header">
          <span className="how-eyebrow">
            How it works
          </span>

          <h2>
            From a drop of blood to an answer — in four steps
          </h2>
          <img src={BloodCapsule } alt="Blood Capsule" className="blood-capsule"/>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.number}>

              <div className="step-number">
                {step.number}
              </div>

              <h4>
                {step.title}
              </h4>

              <p>
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
