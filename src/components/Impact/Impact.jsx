import "./Impact.css";

const comparisons = [
  {
    capability: "Panel breadth per sample",
    abther: "Broad multiplex",
    centralLab: "Broad, but per-run",
    rapidTests: "Single target"
  },
  {
    capability: "Time to result",
    abther: "Minutes",
    centralLab: "Hours to days",
    rapidTests: "Minutes"
  },
  {
    capability: "Laboratory infrastructure",
    abther: "Not required",
    centralLab: "Required",
    rapidTests: "Not required"
  },
  {
    capability: "Cold chain",
    abther: "Not required",
    centralLab: "Often required",
    rapidTests: "Sometimes required"
  },
  {
    capability: "AI-assisted interpretation",
    abther: "Built in",
    centralLab: "Limited",
    rapidTests: "Manual read"
  },
  {
    capability: "Suitability for field / primary care",
    abther: "Designed for it",
    centralLab: "Limited",
    rapidTests: "Partial"
  }
];

export default function Impact() {
  return (
    <section className="impact" id="impact">
      <div className="container">

        <div className="impact-header">

          <span className="impact-eyebrow">
            Where we fit
          </span>

          <h2>
            A category of our own
          </h2>

          <p>
            Today's options force a trade-off between breadth, speed,
            cost, and portability. AbTher is designed to remove that
            trade-off — compared here against the prevailing
            <em> approaches </em>
            to diagnosis, not any single product.
          </p>

        </div>

        <div className="impact-table-wrapper">

          <table className="impact-table">

            <thead>
              <tr>
                <th>Capability</th>
                <th className="impact-highlight">
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
                <tr key={item.capability}>

                  <td>
                    {item.capability}
                  </td>

                  <td className="impact-abther">
                    {item.abther}
                  </td>

                  <td>
                    {item.centralLab}
                  </td>

                  <td>
                    {item.rapidTests}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <p className="impact-note">
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
