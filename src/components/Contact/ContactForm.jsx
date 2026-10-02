
import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm(){
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
      Organisation: formData.get("Organisation"),      
      email: formData.get("email"),
      phone: formData.get("phone"),
      intrestedon: formData.get("intrestedon"),
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

      const responseText = await response.text();

      let result = {};

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch (error) {
        console.error("Invalid API response:", responseText);
      }

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setStatus(
        result.message || "Your message is sent securely to the AbTher team."
      );

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error.message || "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send us a message</h3>

        <div className="form-group">
          <span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </span>

          <span>
            <input
              type="text"
              name="Organisation"
              placeholder="Company/Institution"
              required
            />
          </span>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="phone"
            name="phone"
            placeholder="please enter your 10 digit mobile number"
            required
            maxLength="10"
            pattern="[0-9]{10}"
            inputMode="numeric"
          />
        </div> 

        <div className="form-group">
          <select
            name="intrestedon"
            required
            defaultValue=""
            className="form-control"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Investment">Investment</option>
            <option value="Strategic partnership">Strategic partnership</option>
            <option value="Grants and collaboration">Grants and collaboration</option>
            <option value="Clinical or research collaboration">
              Clinical or research collaboration
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <textarea
            name="Message"
            rows="6"
            placeholder="Tell us a little about your interest"
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
        <p style={{ color: "white",fontSize:"small" }}>
          Your message is sent securely to the AbTher team.
        </p>
      </form>
    );
  }
