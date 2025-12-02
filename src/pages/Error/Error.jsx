import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Log 404 occurrence to analytics
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        {/* Main Error Content */}
        <div className={styles.mainContent}>
          <div className={styles.errorNumber}>
            <span className={styles.number4}>4</span>
            <span className={styles.number0}>0</span>
            <span className={styles.number4}>4</span>
          </div>

          <h1 className={styles.title}>Service Temporarily Unavailable</h1>
          
          <p className={styles.description}>
            We apologize for the inconvenience. The page you're looking for cannot be found or is currently undergoing maintenance.
          </p>

          <p className={styles.suggestion}>
            Please return to your dashboard or contact our support team for immediate assistance.
          </p>

          <div className={styles.buttonGroup}>
            <button 
              className={styles.primaryButton}
              onClick={handleGoHome}
            >
              Return to Home
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={handleGoBack}
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <p>Need immediate assistance?</p>
          <p>Call our 24/7 Support: <span className={styles.contactNumber}>1-800-8400</span></p>
        </div>
      </div>
    </div>
  );
};

export default Error;