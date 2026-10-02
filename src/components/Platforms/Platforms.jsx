import "./Platforms.css";
import PlatformCard from "./PlatformCard";
import diagnosticsDevice from "../../images/platforms/diagnostics-device.jpg";
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
      "Strategic multiplex panels covering infectious, inflammatory, cardiac, allergy, and oncology markers designed for high - impact, actionable diagnostics.",
      "AI-powered multimodal sensing combining optical, spectral and electrochemical technologies to enable rapid, scalable multiplex diagnostics.",
      "Field-ready by design battery-operable, no cold chain, minimal training required.",
      "Built for scale primary care, public-health screening, and community outreach.",
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
    subtitle: "mAbs · Antibody–drug conjugates · Bispecifics",

    description:
      "A precision-oncology pipeline engineering antibodies to hit solid-tumour targets with greater accuracy and a wider therapeutic window including a differentiated low-dose, locally delivered ADC approach designed to reduce systemic toxicity.",

    features: [
      "Monoclonal antibodies against validated oncology targets, with an affordability first development pathway.",
      "Advanced Antibody–drug conjugates (ADCs) combining established and next-generation linker-payload chemistry with localized, low-dose delivery for precision cancer therapy.",
      "Bispecific formats directed at the tumour microenvironment for enhanced immune engagement.",
      "Focus areas solid tumours with high regional burden and clear paths to clinical translation."
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
        <div className="platform-header">
          <span className="platform-title">
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
