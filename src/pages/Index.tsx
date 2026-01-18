import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, BarChart3, Palette, MessageSquare, Calendar, Search, Star } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  { icon: TrendingUp, title: "Social Media Management", desc: "End-to-end management of your social presence" },
  { icon: Palette, title: "Content Creation", desc: "Eye-catching posts, reels & graphics" },
  { icon: Calendar, title: "Scheduling & Planning", desc: "Strategic monthly content calendars" },
  { icon: Search, title: "Brand Strategy", desc: "Optimize your brand identity online" },
  { icon: Users, title: "Profile Optimization", desc: "Make your profiles stand out" },
  { icon: MessageSquare, title: "Community Management", desc: "Handle comments, reviews & DMs" },
];

const stats = [


  { value: "10+", label: "Clients Served" },
  { value: "5+", label: "Campaigns Delivered" },
  { value: "1K+", label: "Reach Generated" },

  { value: "98%", label: "Client Satisfaction" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="hsl(203 100% 74% / 0.1)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-accent text-sm font-medium mb-6">


                <Star className="w-4 h-4" /> Trusted by 10+ Businesses


              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >


              Grow Your Business with Trendlyzer Marketin Agency   🚀


            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We build digital presence that attracts customers, builds trust, and drives results. Let us handle your social media while you focus on what you do best.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className="btn-hero-primary">
                Contact Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/packages" className="btn-hero-secondary">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-accent-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              Comprehensive social media marketing solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-lg transition-all duration-300 border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-accent-foreground transition-colors">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-hero-secondary">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-6">
                Your Partner in Digital Growth
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are a social media marketing and branding agency helping businesses build visibility, trust, and revenue through smart strategy, creative content, and consistent page management.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From startups to established brands, we've helped businesses across India establish a powerful online presence and connect with their target audience.
              </p>
              <Link to="/about" className="btn-hero-primary">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-card shadow-card">
                    <BarChart3 className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-semibold text-accent">Data-Driven</h4>
                    <p className="text-sm text-muted-foreground">Strategy backed by analytics</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-accent text-accent-foreground">
                    <Users className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-semibold">Expert Team</h4>
                    <p className="text-sm text-accent-foreground/80">Dedicated professionals</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="p-6 rounded-2xl bg-primary/20">
                    <TrendingUp className="w-10 h-10 text-accent mb-4" />
                    <h4 className="font-semibold text-accent">Growth Focus</h4>
                    <p className="text-sm text-muted-foreground">Results that matter</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card shadow-card">
                    <Palette className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-semibold text-accent">Creative</h4>
                    <p className="text-sm text-muted-foreground">Unique content</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ready to Grow Your Brand Online?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              DM us to grow your brand online! Let's discuss how we can help you achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/packages" className="btn-hero bg-primary text-accent hover:bg-primary/90">
                View Packages
              </Link>
              <a
                href="https://wa.me/916353582586?text=Hi!%20I%27m%20interested%20in%20your%20marketing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero bg-[#25D366] text-white hover:bg-[#128C7E]"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
