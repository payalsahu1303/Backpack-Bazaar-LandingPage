import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection/>
            <FeatureSection/>
            <Testimonials/>
            <Footer/>
        </>
    );
};

export default App;
