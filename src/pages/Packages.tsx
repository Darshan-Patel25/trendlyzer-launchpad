import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Star, MessageCircle, Megaphone } from "lucide-react";
import Layout from "@/components/Layout";

const packages = [
  {
    name: "Basic Package",
    price: "₹3,500",
    period: "/month",
    popular: false,
    features: [
      "Strategy & Planning (monthly)",
      "2 Platforms (Facebook + Instagram)",
      "Content Creation (12 posts/month)",
      "Scheduling & Posting",
      "Basic Profile Optimization",
      "Trending Hashtags",
      "Monthly Analytics Report",
    ],
    paidServices: [
      { icon: Megaphone, text: "Paid Ads (as per budget)" },
      { icon: Star, text: "Influencer Marketing (extra charges)" },
    ],
  },
  {
    name: "Standard Package",
    price: "₹4,500",
    period: "/month",
    popular: true,
    features: [
      "Full Strategy & Planning",
      "3 Platforms (Facebook, Instagram, YouTube)",
      "Content Creation (20 posts/month)",
      "Scheduling & Posting",
      "Profile Optimization",
      "Analytics & Insights with Recommendations",
      "Trending Hashtags",
      "Brand Reputation Management (reviews & mentions)",
    ],
    paidServices: [
      { icon: Megaphone, text: "Paid Ads (Meta, Instagram)" },
      { icon: Star, text: "Influencer Marketing (micro influencers)" },
    ],
  },
  {
    name: "Premium Package",
    price: "₹6,000",
    period: "/month",
    popular: false,
    features: [
      "Advanced Strategy & Planning",
      "4 Platforms (Facebook, Instagram, YouTube, LinkedIn)",
      "Content Creation (25+ posts/month, 1 reel/video)",
      "Scheduling & Posting",
      "Full Profile Optimization",
      "Community Management (priority response)",
      "Trending Hashtags",
      "Advanced Analytics & Reporting",
      "Brand Reputation Management",
    ],
    paidServices: [
      { icon: Megaphone, text: "Paid Ads (Meta, Google, YouTube)" },
      { icon: Star, text: "Influencer Marketing (macro & micro influencers)" },
    ],
  },
];

const Packages = () => {
  const whatsappUrl = "https://wa.me/918849243397?text=Hi!%20I%27m%20interested%20in%20booking%20a%20package.";

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Pricing</span>
            <h1 className="text-4xl md:text-5xl font-bold text-accent mt-2 mb-6">
              Packages & Pricing
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose the perfect plan for your business. All packages include dedicated support and monthly reporting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding -mt-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-accent text-accent-foreground border-2 border-primary"
                    : "bg-card shadow-card border border-border/50"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange text-white text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-xl font-bold mb-4 ${pkg.popular ? "" : "text-accent"}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-end justify-center gap-1">
                    <span className={`text-4xl font-bold ${pkg.popular ? "text-primary" : "text-accent"}`}>
                      {pkg.price}
                    </span>
                    <span className={pkg.popular ? "text-accent-foreground/70" : "text-muted-foreground"}>
                      {pkg.period}
                    </span>
                  </div>
                </div>

                <div className={`p-4 rounded-xl mb-6 ${pkg.popular ? "bg-accent-foreground/10" : "bg-primary/10"}`}>
                  <h4 className={`font-semibold mb-4 ${pkg.popular ? "" : "text-accent"}`}>
                    Services Included:
                  </h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-primary" : "text-primary"}`} />
                        <span className={`text-sm ${pkg.popular ? "text-accent-foreground/90" : "text-muted-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className={`font-semibold mb-4 flex items-center gap-2 ${pkg.popular ? "" : "text-accent"}`}>
                    <span className="w-8 h-0.5 bg-orange"></span>
                    Paid Services (Optional)
                    <span className="w-8 h-0.5 bg-orange"></span>
                  </h4>
                  <ul className="space-y-3">
                    {pkg.paidServices.map((service) => (
                      <li key={service.text} className="flex items-center gap-3">
                        <service.icon className="w-5 h-5 text-orange" />
                        <span className={`text-sm ${pkg.popular ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                          {service.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? "bg-primary text-accent hover:bg-primary/90"
                      : "bg-accent text-accent-foreground hover:bg-accent/90"
                  }`}
                >
                  Book Your Package
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding bg-[#25D366]/10">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-16 h-16 text-[#25D366] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us on WhatsApp to discuss your specific requirements. We'll create a custom plan that fits your needs and budget.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero bg-[#25D366] text-white hover:bg-[#128C7E]"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
