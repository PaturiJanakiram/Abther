import "./Contact.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const contactDetails = [
  {
    icon: "✉️",
    title: "EMAIL",
    value: "abther.biotech@gmail.com"
  }, 
  {
    icon: "📍",
    title: "HEADQUARTERS",
    value: "Visakhapatnam, Andhra Pradesh, India"
  },  
  {
    icon: "🌐",
    title: "FOCUS",
    value: "Diagnostics · Antibody & ADC therapeutics"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">       
        <div className="contact-wrapper">       
          <div className="contact-left">
            <div className="contact-grid">
              <h5>
                Get In Touch
              </h5>
              <h1>
                Let's build the future of healthcare — together.
              </h1>
              <h3 style={{ fontStyle: "italic", lineHeight: "30px" }}>
                "The convergence of AI-enabled diagnostics, precision antibody biology, and a maturing biopharma ecosystem creates a rare window. AbTher is built to lead it."
              </h3>
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
