import React, { useEffect } from 'react';
import styles from './AboutSection.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.textContainer} data-aos="fade-right">
                <h2 data-aos="fade-up">About Us</h2>
                <p data-aos="fade-up" data-aos-delay="200">
                    Compliment interested discretion estimating on stimulated apartments oh. 
                    Dear so sing when in find read of call. As distrusts behaviour abilities defective is. 
                    Never at water me might. On formed merits hunted unable merely by mr whence or. 
                    Possession the unpleasing simplicity her uncommonly.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                    Delightful remarkably mr on announcing themselves entreaties favourable. 
                    About to in so terms voice at. Equal an would is found seems of.
                </p>
                <button className={styles.ctaButton} data-aos="fade-up" data-aos-delay="600">
                    Click To Buy Now
                </button>
            </div>
            <div className={styles.statsContainer}>
                <div className={styles.statCard} data-aos="fade-left" data-aos-delay="800">
                    <h3>Product Users</h3>
                    <p className={styles.statNumber}>25k+</p>
                    <div className={styles.graphContainer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 100"
                            preserveAspectRatio="none"
                            className={styles.graph}
                        >
                            {/* Define the shadow filter */}
                            <defs>
                                <filter id="lineShadow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" />
                                </filter>
                            </defs>

                            <polyline
                                fill="none"
                                stroke="#007B7B"  
                                strokeWidth="3"
                                points="0,100 20,80 40,60 60,70 80,40 100,50 120,30 140,50 160,20 180,40 200,10"
                                filter="url(#lineShadow)" 
                            />
                        </svg>
                    </div>

                    <p>We strongly believe that successful content marketing.</p>
                </div>
                <div className={styles.statCard} data-aos="fade-left" data-aos-delay="1000">
                    <h3>2.5k+ Insta Followers</h3>
                    <p>We strongly believe that successful content marketing. Our backpack collection is now live! From adventure-ready designs to everyday essentials, find your perfect style. Shop now and carry comfort, style, and functionality everywhere you go!</p>
                </div>
                <div className={styles.statCard} data-aos="fade-left" data-aos-delay="1200">
                    <h3>95% Positive Feedback</h3>
                    <p>We strongly believe that successful content marketing.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
