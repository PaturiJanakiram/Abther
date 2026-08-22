import React from "react";
import {  
  Mail,
  MapPin,
  Globe
} from "lucide-react";

const ContactInfo = ({ icon, title, value }) => {

  const getIcon = () => {
    switch (title) {
      case "Email":
        return <Mail size={24} />;
      case "Head Office":
        return <MapPin size={24} />;     
      case "Focus":
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
      <h3>{title} <br/><p>{value}</p></h3>
     
    </div>
  );
};

export default ContactInfo;
