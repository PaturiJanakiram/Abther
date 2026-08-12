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
    <section  id="contact">   
      <div className="container">       
        <div className="contact-wrapper">       
          <div className="contact-left">
            <div className="contact-grid">
              <h1>
                Get In Touch
              </h1>
              <h2>
                Let's build the future of healthcare together
              </h2>
              <p>
                Whether you're an investor, research partner,
                healthcare organization, or simply interested in
                our work, we'd love to hear from you.
              </p>

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
