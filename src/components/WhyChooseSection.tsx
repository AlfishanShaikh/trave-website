import { Shield, Clock, Wallet, MapPin, Smile, ThumbsUp } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Safe Driving",
      description: "Your safety is paramount. Careful driving with full attention on the road.",
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "Punctual pickup and drop. I respect your time and schedule.",
    },
    {
      icon: Wallet,
      title: "Affordable Pricing",
      description: "Competitive rates with transparent pricing. No hidden charges.",
    },
    {
      icon: MapPin,
      title: "Flexible Routes",
      description: "Travel to any destination. Custom routes based on your needs.",
    },
    {
      icon: Smile,
      title: "Friendly Behavior",
      description: "Courteous and professional service throughout your journey.",
    },
    {
      icon: ThumbsUp,
      title: "Comfortable Travel",
      description: "Clean, well-maintained car ensuring a comfortable ride.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-primary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium mb-4">
            Why Choose Abrar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Reasons to <span className="text-amber">Travel With Me</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Hundreds of satisfied customers trust me for their long-distance travel. 
            Here's why you should too.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-amber" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
