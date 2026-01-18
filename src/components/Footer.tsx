import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/trendlyzer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">

              <img src={logo} alt="Trendlyzer" className="h-12 " />
              <span className="text-xl font-bold">Trendlyzer <div><small>Marketing Agency</small></div></span>


            </div>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              We build digital presence that attracts customers, builds trust, and drives results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Packages", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-accent-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm text-accent-foreground/80">
              <li>Social Media Management</li>
              <li>Content Creation</li>
              <li>Brand Strategy</li>
              <li>Profile Optimization</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-sm text-accent-foreground/80">Call Us</p>
                  <a href="tel:6353582586" className="font-medium hover:text-primary transition-colors">
                    6353 582 586
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-sm text-accent-foreground/80">Email Us</p>
                  <a href="mailto:info@trendlyzer.com" className="font-medium hover:text-primary transition-colors">

                    trendlyzertech@gmail.com

                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-sm text-accent-foreground/80">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-accent-foreground/60">
            © {new Date().getFullYear()} Powered by Trendlyzer Marketing Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-accent-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
