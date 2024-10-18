import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonialsData = [
    {
        name: 'Dayat Santoso',
        position: 'Business Manager',
        testimonial: 'And residence for met the estimable disposing. Mean if they been no hold mr. Is at much do made took held help. Feet you off its like like six.',
        image: '/assets/dayat-santoso.jpg',
    },
    {
        name: 'Mbak Siti',
        position: 'CEO, PT. Indomine',
        testimonial: 'Warmly little before cousin success entire men set. Blessing it ladyship on sensible it is. Equal an would is found seems of. Worse linen an of civil jokes leave offer.',
        image: '/assets/mbak-siti.jpg',
    },
    {
        name: 'Mas Roy',
        position: 'Business Developer',
        testimonial: 'It more shed went up is roof if loud case. Delay music in lived noise an. Beyond genius really enough passed is up. Equal an would is found seems of.',
        image: '/assets/mas-roy.jpg',
    },
    {
        name: 'Jane Doe',
        position: 'Marketing Director',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        image: '/assets/jane-doe.jpg',
    },
    {
        name: 'John Smith',
        position: 'Software Engineer',
        testimonial: 'Suspendisse potenti. Morbi fringilla convallis sapien, id pulvinar odio volutpat.',
        image: '/assets/john-smith.jpg',
    },
    {
        name: 'Emily Davis',
        position: 'Product Manager',
        testimonial: 'Phasellus volutpat metus eget egestas facilisis. Vestibulum et sapien a dui fermentum ullamcorper.',
        image: '/assets/emily-davis.jpg',
    },
    {
        name: 'Michael Lee',
        position: 'CTO, Tech Corp',
        testimonial: 'Aliquam tincidunt metus eget dui vulputate, sed bibendum ipsum dapibus.',
        image: '/assets/michael-lee.jpg',
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    // Auto slide function using setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Slide every 5 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonialsData.length - 3 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 3 : prevIndex - 1
        );
    };

    return (
        <section className={styles.testimonialsSection}>
            <h2 className={styles.heading} data-aos="fade-up">Testimonials</h2>

            <div className={styles.carousel}>
                <button className={styles.prevButton} onClick={prevSlide}>
                    &#8249;
                </button>
                <div className={styles.testimonialWrapper}>
                    {testimonialsData.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                        <div key={index} className={styles.testimonialCard} data-aos="fade-in">
                            <p>{testimonial.testimonial}</p>
                            <div className={styles.personInfo}>
                                <img src={testimonial.image} alt={testimonial.name} className={styles.personImage} />
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.position}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.nextButton} onClick={nextSlide}>
                    &#8250;
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
