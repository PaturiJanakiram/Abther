const Roadmap = () => {

    const roadmap = [

        {
            year: "2025",
            title: "Research & Prototype",
            description: "Technology validation and proof of concept."
        },

        {
            year: "2026",
            title: "Clinical Validation",
            description: "Clinical studies and regulatory preparation."
        },

        {
            year: "2027",
            title: "Commercial Launch",
            description: "Launch AI diagnostic platform."
        },

        {
            year: "2028+",
            title: "Global Expansion",
            description: "International regulatory approvals and partnerships."
        }

    ];

    return (

        <section className="roadmap">

            <div className="container">

                <div className="section-title">

                    <span>ROADMAP</span>

                    <h2>Growth Journey</h2>

                </div>

                <div className="roadmap-grid">

                    {roadmap.map((item, index) => (

                        <div
                            className="roadmap-card"
                            key={index}
                        >

                            <h3>{item.year}</h3>

                            <h4>{item.title}</h4>

                            <p>{item.description}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default Roadmap;