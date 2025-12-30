import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Palette, 
  Calendar, 
  Search, 
  Users, 
  MessageSquare, 
  BarChart3, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Management",
    desc: "Complete management of your social media presence across all platforms. We handle everything from strategy to execution.",
    features: ["Platform Management", "Daily Monitoring", "Engagement Tracking", "Performance Reports"],
  },
  {
    icon: Palette,
    title: "Content Creation & Reels",
    desc: "Eye-catching graphics, engaging posts, and viral-worthy reels that capture your brand essence.",
    features: ["Graphics Design", "Reels & Videos", "Captions & Copy", "Brand Consistency"],
  },
  {
    icon: Calendar,
    title: "Post Scheduling & Planning",
    desc: "Strategic content calendars and automated scheduling to maintain consistent presence.",
    features: ["Monthly Planning", "Content Calendar", "Optimal Timing", "Auto-Publishing"],
  },
  {
    icon: Search,
    title: "Brand Strategy & Optimization",
    desc: "Develop and refine your brand identity for maximum impact and recognition.",
    features: ["Brand Audit", "Competitor Analysis", "Strategy Development", "Brand Guidelines"],
  },
  {
    icon: Users,
    title: "Profile Optimization",
    desc: "Transform your profiles into conversion machines with optimized bios, highlights, and visuals.",
    features: ["Bio Optimization", "Highlight Covers", "Profile Aesthetics", "Link Strategy"],
  },
  {
    icon: MessageSquare,
    title: "Comments / Reviews / DM Handling",
    desc: "Professional community management to build relationships and handle all interactions.",
    features: ["Comment Response", "Review Management", "DM Handling", "Crisis Management"],
  },
  {
    icon: BarChart3,
    title: "Growth Tracking & Reporting",
    desc: "Comprehensive analytics and insights to measure success and optimize strategy.",
    features: ["Monthly Reports", "Growth Analytics", "ROI Tracking", "Recommendations"],
  },
];

const Services = () => {
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-accent mt-2 mb-6">
              Everything You Need to Grow Online
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive social media marketing solutions tailored to help your business thrive in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/30" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-primary/10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Check out our packages and choose the one that fits your needs. We have options for every budget.
            </p>
            <Link to="/packages" className="btn-hero bg-primary text-accent hover:bg-primary/90">
              View Packages <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
