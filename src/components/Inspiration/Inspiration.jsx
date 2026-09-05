
import "./Inspiration.css";
import InspirationCard from "./InspirationCard";
import insp1 from "../../images/Inspiration/insp1.png";
import insp2 from "../../images/Inspiration/insp2.png";
import insp3 from "../../images/Inspiration/insp3.png";


const stories = [
  {
    id: "01",   
    title: "The frontline nurse",
    description:
      "Diagnosing faster and more confidently with a handheld device — reaching patients who would otherwise wait days for a result that may never come.",
    photo:insp1
  },
  {
    id: "02",   
    title: "The patient with cancer",
    description:
      "Receiving precise, targeted therapy closer to home — with less systemic toxicity and at a cost their family can sustain.",
    photo: insp2
  },
  {
    id: "03",   
    title: "The community that gains access",
    description:
      "Where early diagnosis becomes a right, not a privilege — and geography no longer decides the quality of care a person receives.",
    photo: insp3
  }
];

export default function Inspiration() {
  return (
    <section className="inspiration-section">

      <div className="container">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <div className="inspiration-header">

          <span className="inspiration-tag">
            What drives us
          </span>

          <h2>
            Real people, not statistics
          </h2>

          <p>
            Every assay we validate and every antibody we engineer
            traces back to someone whose life could be different.
            These are the stories that keep us moving.
          </p>

        </div>


        {/* ==========================================
            STORY CARDS
        ========================================== */}

        <div className="inspiration-grid">
          {stories.map((stories, index) => (
            <InspirationCard key={stories.id} stories={stories} />
            ))}
        </div>

        </div>

    </section>
  );
}

