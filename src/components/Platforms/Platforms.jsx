import "./Platforms.css";
import PlatformCard from "./PlatformCard";
import diagnosticsDevice from "../../images/platforms/diagnostics-device.png";
import adcplatform from "../../images/platforms/adc-platform.png";


const platforms = [
  {
    id: 1,
    type: "diagnostics",
    tag: "Platform 01 · Diagnostics",
    title: "MxDx Rapid Diagnostics",
    subtitle: "Multiplex · AI-guided · Point-of-care · No cold chain",

    description:
      "A compact analyser and single-use cassette that screen for a broad panel of conditions from a few drops of blood—in minutes, without a laboratory. On-device AI interprets results in real time while secure cloud connectivity supports population-health insights.",

    features: [
      "Broad multiplex panels spanning infectious, inflammatory and oncology-relevant markers in a single test.",
      "Colorimetric & spectral sensing combined with machine-learning interpretation.",
      "Battery-operable, field-ready design with no cold chain requirement.",
      "Built for primary care, public-health screening and community outreach."
    ],

    market: [
      {
        value: "$77B+",
        label: "Global point-of-care market by 2028"
      },
      {
        value: "9%+",
        label: "Sector CAGR through the decade"
      }
    ],

    image: diagnosticsDevice

  },

  {
    id: 2,
    type: "therapeutics",
    tag: "Platform 02 · Therapeutics",
    title: "Antibody & ADC Therapeutics",
    subtitle: "mAbs · ADCs · Bispecifics",

    description:
      "A precision-oncology pipeline engineering antibodies to target solid tumours with greater accuracy and a wider therapeutic window, including a differentiated low-dose, locally delivered ADC approach designed to reduce systemic toxicity.",

    features: [
      "Monoclonal antibodies against validated oncology targets.",
      "Novel antibody-drug conjugate platform.",
      "Bispecific antibodies for enhanced immune engagement.",
      "Focused on solid tumours with strong clinical translation."
    ],

    market: [
      {
        value: "$30B+",
        label: "Global ADC market by 2030"
      },
      {
        value: "Rx",
        label: "Fastest-growing oncology modality"
      }
    ],

    image: adcplatform
  }
];

export default function Platforms() {
  return (
    <section id="platforms"  className="platforms-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">
            What We Do
          </span>
          <h2>
            Two technologies. One mission.
          </h2>
          <p>
            Diagnostics that find disease earlier.
            Therapeutics that treat it more precisely.
            Together, they address the full arc of care.
          </p>
        </div>
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.id}
            platform={platform}
          />
        ))}
      </div>
    </section>
  );
}
