import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import TrustStrip from './TrustStrip';
import ServicesSection from './ServicesSection'; // White bg
import PricingSection from './PricingSection'; // Needs Gray bg context if component doesn't have it
import WhyChooseUs from './WhyChooseUs'; // Updated to have White/Gray? Check component.
import TestimonialsSection from './TestimonialsSection'; // Gray bg
import DesignSupportSection from './DesignSupportSection'; // White?
import HowToOrderSection from './HowToOrderSection';
import AboutUsSection from './AboutUsSection';
import Footer from './Footer';
import usePageTitle from '../hooks/usePageTitle';

export default function HomePage() {
    usePageTitle("Home");

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main className="pt-16 md:pt-20">
                <section id="home">
                    <HeroSection />
                </section>

                {/* Trust Metrics Strip */}
                <TrustStrip />

                <section id="services">
                    <ServicesSection />
                </section>

                <section id="pricing">
                    <PricingSection />
                </section>

                <section id="why-us">
                    <WhyChooseUs />
                </section>

                <section id="testimonials">
                    <TestimonialsSection />
                </section>

                <section id="design">
                    <DesignSupportSection />
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
