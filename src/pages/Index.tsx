import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CarSection from "@/components/CarSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Abrar Travels - Safe & Comfortable Long-Distance Car Travel</title>
        <meta
          name="description"
          content="Book safe and comfortable long-distance car travel with Abrar. Travel in a clean Tata Altroz across Maharashtra - Aurangabad to Mumbai, Pune, and more. Affordable pricing, 24/7 service."
        />
        <meta
          name="keywords"
          content="long distance car travel, outstation cab, Aurangabad to Mumbai, Aurangabad to Pune, car rental, Tata Altroz, safe travel, Abrar Travels"
        />
        <link rel="canonical" href="https://abrartravels.com" />
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CarSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
