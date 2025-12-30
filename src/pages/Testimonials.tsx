import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, FashionHub",
    content: "Trendlyzer transformed our social media presence completely. Within 3 months, our engagement tripled and we started getting direct inquiries through Instagram. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Owner, Spice Garden Restaurant",
    content: "The team understands our brand perfectly. Their content strategy and creative posts have helped us attract a lot of new customers. Our tables are always full now!",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "CEO, TechStart Solutions",
    content: "As a B2B company, we were skeptical about social media. But Trendlyzer's LinkedIn strategy generated quality leads we never expected. They really know their stuff!",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Fitness Coach",
    content: "My personal brand exploded after working with Trendlyzer. Their reel strategy got me viral multiple times. From 5K to 100K followers in 6 months!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Director, Royal Properties",
    content: "Professional, responsive, and result-oriented. They showcase our properties beautifully and the leads have been consistent. Great investment for any business.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Owner, Anita's Boutique",
    content: "Best decision I made for my business. The team is creative, punctual, and truly cares about results. Our online sales increased by 200%!",
    rating: 5,
  },
];

const Testimonials = () => {
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h1 className="text-4xl md:text-5xl font-bold text-accent mt-2 mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't just take our word for it. Here's what our happy clients have to say about working with Trendlyzer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="p-8 rounded-2xl bg-card shadow-card border border-border/50 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-accent">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Retention Rate</div>
            </motion.div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our growing family of satisfied clients. Let's discuss how we can help your business grow online.
            </p>
            <Link to="/contact" className="btn-hero bg-primary text-accent hover:bg-primary/90">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
