const HeroStats = () => {

    const stats = [

        {
            number: "40+",
            title: "Diseases screened from a few drops of blood"
        },

        {
            number: "<15min",
            title: "To result — no laboratory needed"
        },

        {
            number: "2",
            title: "Synergistic platforms: diagnostics + therapeutics"
        }

    ]

    return (

        <div className="hero-stats">

            {stats.map((item, index) => (

                <div
                    key={index}
                    className="stat-card">

                    <h2>{item.number}</h2>

                    <p>{item.title}</p>

                </div>

            ))}

        </div>

    )

}

export default HeroStats;
