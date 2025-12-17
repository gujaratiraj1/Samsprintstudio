import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import DesignSupportSection from './components/DesignSupportSection';
import PricingSection from './components/PricingSection';
import HowToOrderSection from './components/HowToOrderSection';
import AboutUsSection from './components/AboutUsSection';
import Footer from './components/Footer';

function App() {
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

export default App;
