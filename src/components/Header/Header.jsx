// Header.jsx
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>BACKPACK BAZAAR</div>
            <nav className={styles.nav}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Testimonials</a>
                <a href="#">Blogs</a>
                <a href="#" className={styles.offers}>Offers</a>
                <button className={styles.shopNowBtn}>Shop Now</button>
            </nav>
        </header>
    );
};

export default Header;
