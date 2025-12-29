import { Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl text-cream">Abrar Travels</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Safe, comfortable, and affordable long-distance car travel services 
              across Maharashtra and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-amber transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+918975533885"
                className="flex items-center gap-2 text-cream/70 hover:text-amber transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 89755 33885
              </a>
              <a
                href="https://wa.me/918975533885"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 hover:text-amber transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8">
          <p className="text-center text-cream/50 text-sm">
            © {currentYear} Abrar Travels. All rights reserved. | Available 24/7 for your travel needs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
