import React from "react";
import { Send } from "lucide-react";

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >

      <h3>Send us a message</h3>

      <div className="form-group">

        <input
          type="text"
          placeholder="Your Name"
          required
        />

      </div>

      <div className="form-group">

        <input
          type="email"
          placeholder="Email Address"
          required
        />

      </div>

      <div className="form-group">

        <input
          type="text"
          placeholder="Organization"
        />

      </div>

      <div className="form-group">

        <input
          type="text"
          placeholder="Subject"
        />

      </div>

      <div className="form-group">

        <textarea
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

      </div>

      <button
        type="submit"
        className="contact-btn"
      >

        Send Message

        <Send size={18} />

      </button>

    </form>
  );
};

export default ContactForm;
