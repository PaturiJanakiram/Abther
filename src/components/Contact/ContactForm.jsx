
import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus(result.message || "Unable to send message.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send us a message</h3>

      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="organization"
          placeholder="Organization"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
        />
      </div>

      <div className="form-group">
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        />
      </div>

      <button
        type="submit"
        className="contact-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send size={18} />}
      </button>

      {status && (
        <p className="contact-status">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
