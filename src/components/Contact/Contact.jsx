import "./Contact.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const contactDetails = [
  {
    icon: "📍",
    title: "Head Office",
    value:
      "Visakhapatnam, Andhra Pradesh, India"
  },
  {
    icon: "✉️",
    title: "Email",
    value:
      "info@abther.com"
  },
  {
    icon: "📞",
    title: "Phone",
    value:
      "+91 XXXXX XXXXX"
  },
  {
    icon: "🌐",
    title: "Website",
    value:
      "www.abther.com"
  }
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="container">

        <div className="section-header center">

          <span className="section-tag">
            Contact Us
          </span>

          <h2>
            Let's build the future of healthcare together
          </h2>

          <p>
            Whether you're an investor, research partner,
            healthcare organization, or simply interested in
            our work, we'd love to hear from you.
          </p>

        </div>

        <div className="contact-wrapper">

          {/* Contact Information */}

          <div className="contact-left">

            <div className="contact-grid">

              {contactDetails.map((item, index) => (

                <ContactInfo
                  key={index}
                  {...item}
                />

              ))}

            </div>

          </div>

          {/* Contact Form */}

          <div className="contact-right">

            <ContactForm />

          </div>

        </div>

      </div>
    </section>
  );
}
