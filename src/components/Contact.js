import { FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import '../css/contact.css';

function Contact() {
    return (
        <footer className="footerSection">
            {/* Row 1: Phone + Email */}
            <div className="footerRow">
                <div className="footerItem">
                    <FaPhoneAlt className="footerIcon" />
                    <span>+91 9059600653</span>
                </div>

                <div className="footerItem">
                    <IoMail className="footerIcon" />
                    <span>abther.biotech@gmail.com</span>
                </div>              
                   
            </div>
            <div className="footerRow">
                    <div className="footerItem">
                        <h4 className="footerCompany">AbTher Biotech Private Limited</h4>
                    </div>
            </div>
            {/* Company Name */}
           
            {/* Address */}
            <div className="footerRow">
                <div className="footerItem">                
                    <span>
                        <FaMapMarkerAlt className="footerIcon" />&nbsp;
                        Prasadrao Mythrivanam-8, Door No. 4-60/3-SF-201, Sez, Visakhapatnam (Rural) - 530049, Andhra Pradesh, India.
                    </span>
                 </div>
            </div>
            <div className="footerRow">          
                <div className="footerItem">
                    <FaGlobe className="footerIcon" />
                    <span>www.abther.com</span>
                    </div>
             </div>
        </footer>
    );
}
export default Contact