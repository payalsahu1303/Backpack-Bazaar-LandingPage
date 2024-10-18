import React from 'react';
import styles from './Footer.module.css';
// Importing icons from react-icons
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <h2 className={styles.footerBrand}>Backpack Bazaar</h2>
          <p className={styles.footerDescription}>
            Adventure awaits! Find the perfect backpacks for every journey.
          </p>
          <div className={styles.footerSocial}>
            <a href="/" className={styles.socialIcon}>
              <FaFacebookF />
            </a>
            <a href="/" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="/" className={styles.socialIcon}>
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.footerColumn}>
            <h3>Features</h3>
            <a href="/">Pricing</a>
            <a href="/">Login</a>
            <a href="/">Sign Up</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>Terms of Use</h3>
            <a href="/">Privacy Policy</a>
            <a href="/">Legal Notice</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>Feedback</h3>
            <a href="/">Privacy Policy</a>
            <a href="/">Legal Notice</a>
          </div>
        </div>
      </div>
      <p className={styles.footerCopy}>© 2024 Backpack Bazaar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
