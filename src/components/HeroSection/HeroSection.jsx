import React, { useEffect } from 'react';
import styles from './HeroSection.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.textContainer} data-aos="fade-right">
                    <h1>Backpacking is the cure of greediness.</h1>
                    <p>Backpack Mini is a downscaled version of Backpack, a true Rains classic. The silhouette is characterized by its prominent flap and central strap with carabiner closure.</p>
                    <button className={styles.ctaButton}>Click To Buy Now</button>

                    {/* Trusted By Section */}
                    <div className={styles.trustedBy} data-aos="fade-up">
                        <p>Trusted by:</p>
                        <div className={styles.trustedLogos}>
                            <img src="/assets/amazon.png" alt="Amazon" />
                            <img src="/assets/spacex.png" alt="SpaceX" />
                            <img src="/assets/adidas.png" alt="Adidas" />
                            <img src="/assets/paypal.png" alt="PayPal" />
                        </div>
                    </div>
                </div>
                <img src="/assets/hero.png" alt="Backpack" className={styles.heroImage} data-aos="fade-left" />
            </section>

            {/* What We Offer Section */}
            <section className={styles.whatWeOffer}>
                <h2 data-aos="fade-up">WHAT WE OFFER?</h2>
                <p data-aos="fade-up" className={styles.offerDescription}>
                    This clean and ever contemporary waterproof rucksack features an internal laptop pocket, a main compartment, and a concealed external phone pocket on the back panel.
                </p>
                <div className={styles.offerCards}>
                    <div className={styles.card} data-aos="fade-right">
                        <img src="/assets/icon1.png" alt="Effective Marketing" />
                        <h3>Effective Marketing</h3>
                        <p>Our AI lets you generate more effective marketing copy faster.</p>
                        <a href="#" className={styles.cardLink}>View details</a>
                    </div>
                    <div className={styles.card} data-aos="fade-up">
                        <img src="/assets/icon2.png" alt="AI-Power" />
                        <h3>AI-Power</h3>
                        <p>Say goodbye to manually creating landing pages and writing copy.</p>
                        <a href="#" className={styles.cardLink}>View details</a>
                    </div>
                    <div className={styles.card} data-aos="fade-left">
                        <img src="/assets/icon3.png" alt="Writer's Block" />
                        <h3>Writer's Block</h3>
                        <p>Headtime is a blog writer that cures writer's block. It's the only service.</p>
                        <a href="#" className={styles.cardLink}>View details</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
