import React, { useState } from "react";
import Style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/Header/logo.webp"; // Ensure this path is correct

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userId: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate secure login
    alert(`Secure Authentication Initiated for User ID: ${form.userId}`);
    navigate("Error");
  };

  return (
    <div className={Style.mainWrapper}>
      <Header />
      <div className={Style.loginWrap}>
        {/* Page Heading */}
        <div className={Style.pageHeading}>
          <h1>Secure Banking Portal</h1>
          <p>Access your accounts, manage investments, and handle transactions securely.</p>
        </div>

        <div className={Style.loginContainer}>
          {/* Left Column: Branding Section */}
          <div className={Style.imageSection}>
            <div className={Style.imageWrapper}>
              <img 
                src={logo} 
                alt="SecureBank Logo" 
                className={Style.logoImage}
              />
              <div className={Style.imageOverlay}>
                <h3>Welcome Back</h3>
                <p>
                  Your security is our priority. Please ensure you are visiting the correct URL before logging in.
                </p>
                <div className={Style.securityBadge}>
                  <i className="fa-solid fa-shield-halved"></i> 256-Bit Encryption Active
                </div>
              </div>
            </div>
            {/* Abstract Decorative Elements */}
            <div className={Style.floatingElements}>
              <div className={Style.floatingElement1}></div>
              <div className={Style.floatingElement2}></div>
            </div>
          </div>

          {/* Right Column: Login Form */}
          <div className={Style.formSection}>
            <form className={Style.loginForm} onSubmit={handleSubmit}>
              <h2>Log In</h2>
              <p className={Style.subText}>Enter your credentials to access your dashboard.</p>
              
              <div className={Style.formRow}>
                <label htmlFor="userId" className={Style.inputLabel}>User ID / Customer ID</label>
                <input
                  type="text"
                  id="userId"
                  className={Style.inputField}
                  name="userId"
                  placeholder="Enter your User ID"
                  value={form.userId}
                  onChange={handleChange}
                  required
                  autoComplete="username"
                />
              </div>
              
              <div className={Style.formRow}>
                <label htmlFor="password" className={Style.inputLabel}>Password</label>
                <input
                  type="password"
                  id="password"
                  className={Style.inputField}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className={Style.formOptions}>
                <label className={Style.rememberMe} htmlFor="rememberMe">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={form.rememberMe}
                    onChange={handleChange}
                  />
                  <span className={Style.checkmark}></span>
                  Remember User ID
                </label>
                <button 
                  type="button" 
                  className={Style.forgotPassword}
                  onClick={() => navigate("Error")}
                >
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className={Style.submitBtn}>
                Secure Login <i className="fa-solid fa-lock"></i>
              </button>

              <div className={Style.registerLinkWrapper}>
                <div className={Style.divider}>
                  <span>New to SecureBank?</span>
                </div>
                
                <button
                  type="button"
                  className={Style.registerBtn}
                  onClick={() => navigate("SignUp")}
                >
                  Open an Account
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