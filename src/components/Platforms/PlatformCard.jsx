import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const PlatformCard = ({ platform }) => {
  const reverse = platform.id % 2 === 0;

  return (
    <div
      className={`platform-card ${reverse ? "platform-reverse" : ""
        }`}
    >
      {/* Content */}

      <div className="platform-content">

        <span className="platform-tag">
          {platform.tag}
        </span>

        <h3>{platform.title}</h3>

        <h5>{platform.subtitle}</h5>

        <p className="platform-description">
          {platform.description}
        </p>

        <ul className="platform-features">

          {platform.features.map((feature, index) => (
            <li key={index}>

              <CheckCircle
                size={18}
                className="feature-icon"
              />

              <span>{feature}</span>

            </li>
          ))}

        </ul>

        {/* Market */}

        <div className="market-grid">

          {platform.market.map((item, index) => (

            <div
              key={index}
              className="market-card"
            >

              <h4>{item.value}</h4>

              <p>{item.label}</p>

            </div>

          ))}

        </div>

        <button className="platform-btn">

          Learn More

          <ArrowRight
            size={18}
            strokeWidth={2.2}
          />

        </button>

      </div>

      {/* Image */}

      <div className="platform-image">

        <div className="platform-image-wrapper">

          <img
            src={platform.image}
            alt={platform.title}
          />

        </div>

      </div>

    </div>
  );
};

export default PlatformCard;
