import React, { useEffect } from 'react';
import styles from './FeatureSection.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureSection = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className={styles.featureSection}>
            <h2 className={styles.heading} data-aos="fade-up">Best Deals for You</h2>
            <p className={styles.subheading} data-aos="fade-up" data-aos-delay="200">
                Always get adieus nature day course for common. My little garret repair to desire he esteem.
            </p>

            <div className={styles.featureCards}>
                <div className={styles.card} data-aos="fade-right">
                    <img
                        src="/assets/f1.png"
                        alt="Walmart Academia All Over Print Backpack"
                        className={styles.cardImage}
                    />
                    <h3>Walmart Academia All Over Print Backpack</h3>
                    <p>How proceed offered her offence shy forming. Returned peculiar.</p>
                    <button className={styles.shopButton}>Shop Now</button>
                </div>

                <div className={styles.card} data-aos="fade-left" data-aos-delay="400">
                    <img
                        src="/assets/f2.png"
                        alt="Canyon Anti-theft backpack for Laptops"
                        className={styles.cardImage}
                    />
                    <h3>Canyon Anti-theft backpack for Laptops</h3>
                    <p>How proceed offered her offence shy forming. Returned peculiar.</p>
                    <button className={styles.shopButton}>Shop Now</button>
                </div>
            </div>

            <div className={styles.viewAllContainer} data-aos="fade-up" data-aos-delay="600">
                <button className={styles.viewAllButton}>View All Products</button>
            </div>
        </section>
    );
};

export default FeatureSection;
