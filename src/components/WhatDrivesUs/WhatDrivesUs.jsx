
import "./WhatDrivesUs.css";

const stories = [
  {
    id: "01",
    className: "drive-card-1",
    title: "The frontline nurse",
    description:
      "Diagnosing faster and more confidently with a handheld device — reaching patients who would otherwise wait days for a result that may never come."
  },
  {
    id: "02",
    className: "drive-card-2",
    title: "The patient with cancer",
    description:
      "Receiving precise, targeted therapy closer to home — with less systemic toxicity and at a cost their family can sustain."
  },
  {
    id: "03",
    className: "drive-card-3",
    title: "The community that gains access",
    description:
      "Where early diagnosis becomes a right, not a privilege — and geography no longer decides the quality of care a person receives."
  }
];

export default function WhatDrivesUs() {
  return (
    <section className="what-drives-us">

      <div className="container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="section-header center">

          <span className="section-tag">
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

        <div className="drive-grid">

          {stories.map((story) => (

            <div
              key={story.id}
              className={`drive - card ${ story.className } `}
            >

              <div className="drive-overlay"></div>

              <div className="drive-content">

                <div className="drive-number">
                  {story.id}
                </div>

                <h3>
                  {story.title}
                </h3>

                <p>
                  {story.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

