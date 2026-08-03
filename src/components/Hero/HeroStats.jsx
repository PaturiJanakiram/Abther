const HeroStats = () => {

    const stats = [

        {
            number: "40+",
            title: "Diseases"
        },

        {
            number: "15 Min",
            title: "Result Time"
        },

        {
            number: "2",
            title: "Platforms"
        }

    ]

    return (

        <div className="hero-stats">

            {stats.map((item, index) => (

                <div
                    key={index}
                    className="stat-card"
                >

                    <h2>{item.number}</h2>

                    <p>{item.title}</p>

                </div>

            ))}

        </div>

    )

}

export default HeroStats;