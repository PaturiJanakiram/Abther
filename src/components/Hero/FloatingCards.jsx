import { FiClock, FiActivity, FiSun } from "react-icons/fi";

const FloatingCards = () => {

    return (

        <>

            <div className="floating-card top">
              <div className="floating-icon clock-icon">
                <FiClock />
              </div>
              <div className="floating-content">
                <h4>&lt; 15 min</h4>
                <p>Result time</p>
              </div>
            </div>

            <div className="floating-card right">
              <div className="floating-icon bulb-icon">
                <FiSun />
              </div>              
              <div className="floating-content">
                    <h4>AI Powered</h4>
                    <p>Analysis</p>
              </div>
            </div>

            <div className="floating-card bottom">
              <div className="floating-icon activity-icon">
                <FiActivity />
              </div>
              <div className="floating-content">
                    <h4>40+ Panels</h4>
                    <p>One Sample</p>
               </div>

            </div>

        </>

    )

}

export default FloatingCards;
