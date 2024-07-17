// @flow strict
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import SectionWrapper from "../common/SectionWrapper";
import ContactForm from './contactForm';
import { personalData } from './personal-data';

function ContactSection() {
    return (
        <SectionWrapper bgColor="primary">
            <div id="contact" className="contact-section">
                <div className="contact-header">
                    <span className="contact-header-text">
                        CONTACT US
                    </span>
                    <span className="contact-header-line"></span>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <ContactForm />
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-info">
                            <p className="contact-item">
                                <MdAlternateEmail className="contact-icon" size={36} />
                                <span>{personalData.email}</span>
                            </p>
                            <p className="contact-item">
                                <IoMdCall className="contact-icon" size={36} />
                                <span>{personalData.phone}</span>
                            </p>
                            <p className="contact-item">
                                <CiLocationOn className="contact-icon" size={36} />
                                <span>{personalData.address}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default ContactSection;
