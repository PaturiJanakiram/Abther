import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Globe
} from "lucide-react";

const ContactInfo = ({ icon, title, value }) => {

  const getIcon = () => {
    switch (title) {
      case "Head Office":
        return <MapPin size={24} />;
      case "Email":
        return <Mail   size={24} />;
      case "Phone":
        return <Phone size={24} />;
      case "Website":
        return <Globe size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="contact-card">
      <div className="contact-icon">
        {getIcon()}
      </div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default ContactInfo;
