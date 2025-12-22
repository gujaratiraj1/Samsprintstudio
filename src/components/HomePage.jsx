import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import WhyChooseUs from './WhyChooseUs';
import ServicesSection from './ServicesSection';
import DesignSupportSection from './DesignSupportSection';
import PricingSection from './PricingSection';
import HowToOrderSection from './HowToOrderSection';
import AboutUsSection from './AboutUsSection';
import Footer from './Footer';
import usePageTitle from '../hooks/usePageTitle';

export default function HomePage() {
    usePageTitle("Home");

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-16 md:pt-20">
                <section id="home">
                    <HeroSection />
                </section>
                <section id="why-us">
                    <WhyChooseUs />
                </section>
                <section id="services">
                    <ServicesSection />
                </section>
                <section id="design">
                    <DesignSupportSection />
                </section>
                <section id="pricing">
                    <PricingSection />
                </section>
                <section id="how-to-order">
                    <HowToOrderSection />
                </section>
                <section id="about">
                    <AboutUsSection />
                </section>
            </main>
            <Footer />
        </div>
    );
}
