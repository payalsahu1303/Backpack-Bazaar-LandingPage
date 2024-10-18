import React from 'react';
import styles from './ProductSection.module.css';

const ProductSection = () => {
    return (
        <section className={styles.productSection}>
            <h2>About This Product</h2>
            <div className={styles.productInfo}>
                <img src="/assets/71snAu7OprL._SX679_-removebg-preview.png" alt="Product Backpack" className={styles.productImage} />
                <div className={styles.productDetails}>
                    <ul>
                        <li>Water-resistant material</li>
                        <li>Flat base design for better support</li>
                        <li>Adjustable straps</li>
                        <li>Premium build quality</li>
                    </ul>
                    <button>Click to Buy Now</button>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
