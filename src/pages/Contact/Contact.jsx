import React from "react";
import Style from "./Contact.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for contacting SecureBank. Our support team will respond within 24 hours.");
    navigate("Error");
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/Stackly+Salem",
      "_blank"
    );
  };

  const handleSocialMediaClick = () => {
    navigate("Error");
  };

  const handlePhoneInput = (e) => {
    // Allow only numbers and limit to 10 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    e.target.value = value;
  };

  return (
    <div data-aos="fade" className={Style.contactContainer}>
      <Header />
      <div className={Style.contactContent}>
        {/* Header Section */}
        <div className={Style.contactHeader}>
          <h1 className={Style.contactTitle}>We're Here to Help</h1>
          <p className={Style.contactSubtitle}>
            Have questions about your account, loans, or investments? 
            Connect with our dedicated support team or visit a branch near you.
          </p>
        </div>

        {/* Main Content */}
        <div className={Style.contactMain}>
          {/* Contact Information (Left Column) */}
          <div className={Style.contactInfo}>
            <h2>Get in Touch</h2>
            <p className={Style.infoIntro}>
              Experience premium banking support. Our relationship managers are ready to assist you.
            </p>

            <div className={Style.infoCards}>
              {/* HQ Card */}
              <div className={Style.infoCard}>
                <div className={Style.cardIcon}>
                  <i className="fa-solid fa-building-columns"></i>
                </div>
                <div className={Style.cardContent}>
                  <h3>Global Headquarters</h3>
                  <p>
                    Financial District, Tower A,
                    <br />
                    12th Floor, Wall Street Area,
                    <br />
                    New York, NY - 10005
                  </p>
                </div>
              </div>

              {/* Support Card */}
              <div className={Style.infoCard}>
                <div className={Style.cardIcon}>
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div className={Style.cardContent}>
                  <h3>24/7 Support</h3>
                  <p>
                    <strong>
                      <a href="tel:+18001234567">1-800-SECURE-BK</a>
                    </strong>
                    <br />
                    <span>Priority Line for Premium Members</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Branch Offices Section */}
            <div className={Style.branchSection}>
              <h3>Regional Branches</h3>
              <div className={Style.branchList}>
                
                {/* London */}
                <div className={Style.branchItem}>
                  <div className={Style.branchIcon}>
                    <i className="fa-solid fa-location-arrow"></i>
                  </div>
                  <div className={Style.branchDetails}>
                    <strong>London (UK)</strong>
                    <address>
                      45 Canary Wharf, Financial Center, London E14 5AB
                    </address>
                  </div>
                </div>

                {/* Singapore */}
                <div className={Style.branchItem}>
                  <div className={Style.branchIcon}>
                    <i className="fa-solid fa-location-arrow"></i>
                  </div>
                  <div className={Style.branchDetails}>
                    <strong>Singapore</strong>
                    <address>
                      8 Marina Blvd, Marina Bay Financial Centre, Singapore 018981
                    </address>
                  </div>
                </div>

                {/* Mumbai */}
                <div className={Style.branchItem}>
                  <div className={Style.branchIcon}>
                    <i className="fa-solid fa-location-arrow"></i>
                  </div>
                  <div className={Style.branchDetails}>
                    <strong>Mumbai (India)</strong>
                    <address>
                      Bandra Kurla Complex, C-60, G Block, Mumbai, Maharashtra 400051
                    </address>
                  </div>
                </div>

                 {/* Dubai */}
                 <div className={Style.branchItem}>
                  <div className={Style.branchIcon}>
                    <i className="fa-solid fa-location-arrow"></i>
                  </div>
                  <div className={Style.branchDetails}>
                    <strong>Dubai (UAE)</strong>
                    <address>
                      DIFC, Gate Village 3, Sheikh Zayed Rd, Dubai
                    </address>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Media Links */}
            <div className={Style.socialMediaSection}>
              <h3>Connect Socially</h3>
              <div className={Style.socialMediaLinks}>
                <button className={Style.socialButton} onClick={handleSocialMediaClick} aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
                <button className={Style.socialButton} onClick={handleSocialMediaClick} aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </button>
                <button className={Style.socialButton} onClick={handleSocialMediaClick} aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </button>
                <button className={Style.socialButton} onClick={handleSocialMediaClick} aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Section (Right Column) */}
          <div className={Style.contactInteractive}>
            {/* Contact Form */}
            <div className={Style.contactFormContainer}>
              <h2>Send a Secure Message</h2>
              <form className={Style.contactForm} onSubmit={handleSubmit}>
                <div className={Style.formRow}>
                  <div className={Style.formGroup}>
                    <label htmlFor="firstName">First Name <span className={Style.required}>*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      placeholder="Jane"
                    />
                  </div>
                  <div className={Style.formGroup}>
                    <label htmlFor="lastName">Last Name <span className={Style.required}>*</span></label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      required
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className={Style.formRow}>
                  <div className={Style.formGroup}>
                    <label htmlFor="email">Email Address <span className={Style.required}>*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder="jane.smith@email.com"
                    />
                  </div>
                  <div className={Style.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="1234567890"
                      onInput={handlePhoneInput}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </div>
                </div>

                <div className={Style.formGroup}>
                  <label htmlFor="department">Department <span className={Style.required}>*</span></label>
                  <select id="department" name="department" required>
                    <option value="">Select a department</option>
                    <option value="personal-banking">Personal Banking</option>
                    <option value="loans">Loans & Mortgages</option>
                    <option value="credit-cards">Credit Cards</option>
                    <option value="fraud-support">Fraud & Security</option>
                    <option value="wealth-management">Wealth Management</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div className={Style.formGroup}>
                  <label htmlFor="message">How can we help? <span className={Style.required}>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <div className={Style.formGroup}>
                  <label className={Style.checkboxLabel} htmlFor="terms">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      name="terms"
                      autoComplete="off"
                      required 
                    />
                    <span>I verify that I am not sharing sensitive data (PIN, Passwords) in this form.</span>
                  </label>
                </div>

                <button type="submit" className={Style.submitButton}>
                  Submit Inquiry <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className={Style.mapContainer}>
              <div className={Style.mapHeader}>
                 <h2>Find an ATM / Branch</h2>
                 <p>Locate the nearest service point</p>
              </div>
              <div className={Style.mapWrapper} onClick={handleMapClick}>
                <div className={Style.mapOverlay}>
                  <div className={Style.mapPlaceholder}>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Open Interactive Map</p>
                    <div className={Style.mapButton}>
                      Navigate
                    </div>
                  </div>
                </div>
                {/* Embedded Map Iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00980168459418!3d40.71306977933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1909e7d8af%3A0x4811b71e28947f6c!2sWall%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645564756836!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bank Headquarters"
                  className={Style.mapIframe}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}