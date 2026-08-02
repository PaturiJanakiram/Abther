const Grants = () => {

    const grants = [

        "Recognised & aligned with Startup India · DPIIT",

        "National research grant frameworks",

        "Regulatory-ready (CDSCO · CE · FDA pathways)",

        "Academic & clinical research network"

    ];

    return (

        <section className="grants">

            <div className="container">

                <div className="section-title">

                    <span>RECOGNITION</span>

                    <h2>Grants & Regulatory Readiness</h2>

                </div>

                <div className="grant-list">

                    {grants.map((item, index) => (

                        <div
                            className="grant-item"
                            key={index}
                        >

                            ✔ {item}

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default Grants;