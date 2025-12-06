import React, { useState } from "react";
import Style from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/Header/logo.webp"; 

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    accountType: "savings",
    password: "",
    confirmPassword: "",
  });

  const [rules, setRules] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setForm({ ...form, [name]: value });
      }
    } else if (name === "password") {
      setForm({ ...form, [name]: value });
      setRules(validatePassword(value));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!Object.values(rules).every(Boolean)) {
      alert("Password does not meet all security requirements");
      return;
    }
    // Simulate successful registration
    alert(`Registration Successful!\nWelcome to SecureBank, ${form.name}.`);
    navigate("Error"); // Navigate to dashboard or success page
  };

  return (
    <div className={Style.mainWrapper}>
      <Header />
      <div className={Style.signUpWrap}>
        
        {/* Page Heading */}
        <div className={Style.pageHeading}>
          <h1>Start Your Financial Journey</h1>
          <p>Join millions who trust SecureBank for their savings, investments, and daily banking needs.</p>
        </div>

        <div className={Style.signUpContainer}>
          
          {/* Left Column: Branding / Value Prop */}
          <div className={Style.imageSection}>
            <div className={Style.imageContent}>
              <div className={Style.logoWrapper}>
                <img 
                  src={logo} 
                  alt="SecureBank Logo" 
                  className={Style.logoImage}
                />
              </div>
              <div className={Style.imageOverlay}>
                <h3>Banking Reimagined</h3>
                <p>
                  Experience seamless digital banking with world-class security and personalized financial insights.
                </p>
                <div className={Style.featureList}>
                  <span><i className="fa-solid fa-lock"></i> Bank-Grade Security</span>
                  <span><i className="fa-solid fa-credit-card"></i> Instant Virtual Cards</span>
                  <span><i className="fa-solid fa-chart-line"></i> Smart Analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className={Style.formSection}>
            <form className={Style.signUpForm} onSubmit={handleSubmit}>
              <h2>Register New Account</h2>
              <p className={Style.formSubtext}>Please enter your details to verify your identity.</p>
              
              <div className={Style.formGroup}>
                <label htmlFor="name">Legal Name <span className={Style.required}>*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  className={Style.inputField}
                  placeholder="As per government ID"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Style.formGroup}>
                <label htmlFor="email">Email Address <span className={Style.required}>*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className={Style.inputField}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Style.formRow}>
                <div className={Style.formGroup}>
                  <label htmlFor="phone">Mobile Number <span className={Style.required}>*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className={Style.inputField}
                    placeholder="98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={Style.formGroup}>
                  <label htmlFor="accountType">Account Type</label>
                  <select
                    id="accountType"
                    name="accountType"
                    className={Style.inputField}
                    value={form.accountType}
                    onChange={handleChange}
                  >
                    <option value="savings">Savings Account</option>
                    <option value="current">Current Account</option>
                    <option value="student">Student Account</option>
                  </select>
                </div>
              </div>
              
              <div className={Style.formGroup}>
                <label htmlFor="password">Create Password <span className={Style.required}>*</span></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  className={Style.inputField}
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password Strength Meter */}
              {form.password && (
                <div className={Style.passwordRequirements}>
                  <p className={Style.reqTitle}>Password Strength:</p>
                  <div className={Style.reqGrid}>
                    <span className={rules.length ? Style.valid : Style.invalid}>
                      {rules.length ? '✓' : '○'} 8+ Chars
                    </span>
                    <span className={rules.upper ? Style.valid : Style.invalid}>
                      {rules.upper ? '✓' : '○'} Uppercase
                    </span>
                    <span className={rules.lower ? Style.valid : Style.invalid}>
                      {rules.lower ? '✓' : '○'} Lowercase
                    </span>
                    <span className={rules.number ? Style.valid : Style.invalid}>
                      {rules.number ? '✓' : '○'} Number
                    </span>
                    <span className={rules.special ? Style.valid : Style.invalid}>
                      {rules.special ? '✓' : '○'} Symbol
                    </span>
                  </div>
                </div>
              )}

              <div className={Style.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password <span className={Style.required}>*</span></label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="new-password"
                  className={Style.inputField}
                  placeholder="Re-enter password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Style.termsWrapper}>
                <label className={Style.checkboxLabel} htmlFor="terms">
                  <input 
                    type="checkbox" 
                    id="terms"
                    name="terms"
                    required 
                  />
                  <span>I agree to the <a href="/Error">Terms & Conditions</a> and <a href="/Error">Privacy Policy</a>.</span>
                </label>
              </div>

              <button type="submit" className={Style.submitBtn}>
                Open Account <i className="fa-solid fa-chevron-right"></i>
              </button>

              <div className={Style.loginLinkWrapper}>
                <p>Already banking with us?</p>
                <button
                  type="button"
                  className={Style.loginBtn}
                  onClick={() => navigate("Login")}
                >
                  Log In Here
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}