import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
// Replace with your actual banking logo
import logo from "../../assets/Header/logo.webp"; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen) {
        const mobileNav = document.querySelector(`.${styles.mobileNav}`);
        const mobileMenuButton = document.querySelector(
          `.${styles.mobileMenuButton}`
        );

        if (
          mobileNav &&
          !mobileNav.contains(event.target) &&
          !mobileMenuButton.contains(event.target)
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About Us", href: "About" },
    { name: "Dashboard", href: "Dashboard" },
    { name: "Services", href: "Services" },
    { name: "FAQ", href: "FAQ" },
    { name: "Contact", href: "Contact" },
    { name: "SignUp", href: "SignUp" },
    { name: "Login", href: "Login" },
  ];

  return (
    // Outer container with AOS fade animation
    <header className={styles.header} data-aos="fade-down">
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <div className={styles.logoContainer} onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Banking Services"
              className={styles.logo}
            />
          </div>
          <span className={styles.logoText}>Banking Services</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {/* Home Dropdown */}
          <div
            className={styles.homeDropdown}
            onMouseEnter={() => setIsHomeDropdownOpen(true)}
            onMouseLeave={() => setIsHomeDropdownOpen(false)}
          >
            <button className={styles.homeButton}>Home</button>
            {isHomeDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <a href="/" className={styles.dropdownItem}>
                  Home Page 1
                </a>
                <a href="HomePage2" className={styles.dropdownItem}>
                  Home Page 2
                </a>
              </div>
            )}
          </div>

          {/* Other Navigation Links */}
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.mobileMenuButton} ${
            isMobileMenuOpen ? styles.close : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div
            className={`${styles.mobileOverlay} ${
              isMobileMenuOpen ? styles.open : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileNav} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          {/* Home Dropdown for Mobile */}
          <div className={styles.mobileHomeSection}>
            <button
              className={styles.mobileHomeButton}
              onClick={toggleHomeDropdown}
            >
              Home
            </button>
            {isHomeDropdownOpen && (
              <div className={styles.mobileDropdownMenu}>
                <a
                  href="/"
                  className={styles.mobileDropdownItem}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home Page 1
                </a>
                <a
                  href="HomePage2"
                  className={styles.mobileDropdownItem}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home Page 2
                </a>
              </div>
            )}
          </div>

          {/* Other Mobile Navigation Links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;