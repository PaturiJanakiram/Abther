import "./Pipeline.css";

const comparisons = [
  {
    Pipeline: "Diagnostics",
    Platform: "PRIP™ Optical",
    Application: "AUFI / Infectious Diseases",
    Stage: "Lead / Validation"
  },
  {
    Pipeline: "Diagnostics",
    Platform: "PRIP™ Optical",
    Application: "Cancer Biomarkers",
    Stage: "Expansion"
  },
  {
    Pipeline: "Diagnostics",
    Platform: "PRIP™ Electrochemical",
    Application: "Detection",
    Stage: "Lead / Validation"
  },
  {
    Pipeline: "Diagnostics",
    Platform: "PRIP™ Electrochemical",
    Application: "Multiplex Biomarkers",
    Stage: "Development"
  },
  {
    Pipeline: "Diagnostics",
    Platform: "PRIP™",
    Application: "Cardiac / Neuro / Autoimmune",
    Stage: "Expansion / Discovery"
  },
  {
    Pipeline: "Therapeutics",
    Platform: "Novel ISAC™",
    Application: "Targeted Immunotherapy",
    Stage: "Discovery / Preclinical"
  },
  {
    Pipeline: "Therapeutics",
    Platform: "CDH17 ADC",
    Application: "Targeted Oncology",
    Stage: "Discovery"
  },
  {
    Pipeline: "Therapeutics",
    Platform: "Micro Dose™",
    Application: "Accessible / Visible Cancers",
    Stage: "Platform Development"
  }
];

export default function Pipeline() {
  return (
    <section className="pipeline" id="pipeline">
      <div className="container">

        <div className="pipeline-header">

          <span className="pipeline-eyebrow">
            The AbTher Pipeline
          </span>

          <h2>
            Two technology engines. One healthcare vision.
          </h2>

          <p>
            A platform-driven portfolio spanning rapid diagnostics and precision therapeutics — engineered to grow from a common architecture.
          </p>

        </div>

        <div className="pipeline-table-wrapper">

          <table className="pipeline-table">

            <thead>
              <tr>
                <th>Capability</th>
                <th className="pipeline-highlight">
                  AbTher MxDx
                </th>
                <th>
                  Central-lab immunoassay / PCR
                </th>
                <th>
                  Single-analyte rapid tests
                </th>
              </tr>
            </thead>

            <tbody>

              {comparisons.map((item) => (
                <tr key={item.Application}>

                  <td>
                    {item.Pipeline}
                  </td>

                  <td className="pipeline-abther">
                    {item.Platform}
                  </td>

                  <td>
                    {item.Application}
                  </td>

                  <td>
                    {item.Stage}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <p className="pipeline-note">
          Positioning reflects intended design targets for AbTher's
          platform in development; performance claims will be confirmed
          through clinical validation. Comparisons are made against
          general diagnostic approaches rather than specific commercial
          products.
        </p>

      </div>
    </section>
  );
}
