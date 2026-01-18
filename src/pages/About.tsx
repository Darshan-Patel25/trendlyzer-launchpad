import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  { icon: Target, title: "Result-Driven", desc: "We focus on measurable outcomes that impact your bottom line" },
  { icon: Eye, title: "Transparency", desc: "Regular reports and clear communication at every step" },
  { icon: Heart, title: "Dedication", desc: "Your success is our priority, we treat your brand like our own" },
  { icon: Award, title: "Excellence", desc: "High-quality work that exceeds expectations" },
];

const teamStats = [

  { value: "100%", label: "View" },
  { value: "10+", label: "Happy Clients" },
  { value: "5+", label: "Projects Done" },

  { value: "24/7", label: "Support" },
];

const About = () => {
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-accent mt-2 mb-6">
              Your Digital Growth Partner
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a social media marketing and branding agency helping businesses build visibility, trust, and revenue through smart strategy, creative content, and consistent page management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="p-8 rounded-2xl bg-card shadow-card border border-border/50"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with strategic digital marketing solutions that drive real growth. We believe every brand deserves a powerful online presence that connects with their audience and converts followers into customers.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-accent text-accent-foreground"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-accent-foreground/80 leading-relaxed">
                To become India's most trusted social media marketing agency, known for delivering exceptional results, creative excellence, and genuine partnerships that help businesses thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4">What Drives Us</h2>
            <p className="text-muted-foreground">
              The core principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-6">
                What Makes Us Different
              </h2>
              <ul className="space-y-4">
                {[
                  "Customized strategies tailored to your business goals",
                  "Dedicated account manager for personalized support",
                  "Transparent reporting with actionable insights",
                  "Creative content that resonates with your audience",
                  "Affordable packages for businesses of all sizes",
                  "Quick response time and consistent communication",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-2xl bg-card shadow-card">
                <Users className="w-10 h-10 text-primary mb-4" />

                <h4 className="font-semibold text-accent text-lg">10+</h4>

                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="p-6 rounded-2xl bg-accent text-accent-foreground mt-8">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />

                <h4 className="font-semibold text-lg">5+</h4>

                <p className="text-sm text-accent-foreground/80">Campaigns</p>
              </div>
              <div className="p-6 rounded-2xl bg-primary/20">
                <Award className="w-10 h-10 text-accent mb-4" />

                <h4 className="font-semibold text-accent text-lg">100%</h4>
                <p className="text-sm text-muted-foreground">Views Responsibility</p>

              </div>
              <div className="p-6 rounded-2xl bg-card shadow-card mt-8">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-semibold text-accent text-lg">98%</h4>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
