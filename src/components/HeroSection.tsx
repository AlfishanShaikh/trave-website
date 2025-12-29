import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-road.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Scenic highway road with Tata Altroz"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/70 to-navy-dark/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-block px-4 py-2 bg-accent/20 text-amber rounded-full text-sm font-medium mb-6">
            Trusted Long-Distance Travel Partner
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            Safe & Comfortable{" "}
            <span className="text-amber">Long-Distance</span> Car Travel
          </h1>
          <p className="text-lg md:text-xl text-cream/80 mb-8 leading-relaxed">
            Travel with Abrar in a clean and comfortable Tata Altroz. Experience
            safe, punctual, and affordable journeys across Maharashtra and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+918975533885">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="border-cream text-cream hover:bg-cream hover:text-navy-dark" asChild>
              <a href="#contact">
                <Calendar className="w-5 h-5" />
                Book a Trip
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6 text-cream/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>500+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Safe & Reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
