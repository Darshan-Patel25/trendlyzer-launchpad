import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Users, Target } from "lucide-react";
import Layout from "@/components/Layout";

const projects = [
  {
    title: "Fashion Brand Growth",
    category: "Fashion & Lifestyle",
    description: "Increased Instagram followers from 2K to 50K in 6 months with strategic content and engagement.",
    stats: { followers: "+48K", engagement: "+320%", reach: "2M+" },
    image: "fashion",
  },
  {
    title: "Restaurant Social Media",
    category: "Food & Beverage",
    description: "Complete social media overhaul leading to 3x increase in table reservations through social channels.",
    stats: { followers: "+15K", engagement: "+180%", reach: "500K+" },
    image: "restaurant",
  },
  {
    title: "Tech Startup Launch",
    category: "Technology",
    description: "Built brand presence from scratch, generating significant leads through LinkedIn and Instagram.",
    stats: { followers: "+25K", engagement: "+250%", reach: "1M+" },
    image: "tech",
  },
  {
    title: "Fitness Influencer",
    category: "Health & Fitness",
    description: "Transformed personal brand with viral reels strategy and community building.",
    stats: { followers: "+100K", engagement: "+400%", reach: "5M+" },
    image: "fitness",
  },
  {
    title: "E-commerce Store",
    category: "Retail",
    description: "Drove significant revenue through targeted social media campaigns and influencer collaborations.",
    stats: { followers: "+30K", engagement: "+200%", reach: "1.5M+" },
    image: "ecommerce",
  },
  {
    title: "Real Estate Agency",
    category: "Real Estate",
    description: "Established authority in local market with property showcases and virtual tours.",
    stats: { followers: "+8K", engagement: "+150%", reach: "300K+" },
    image: "realestate",
  },
];

const Portfolio = () => {
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold text-accent mt-2 mb-6">
              Our Success Stories
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real results from real businesses. See how we've helped brands grow their online presence and achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-primary/30" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-primary/10">
                    <div className="text-center">
                      <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-bold text-accent">{project.stats.followers}</div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-bold text-accent">{project.stats.engagement}</div>
                      <div className="text-xs text-muted-foreground">Engagement</div>
                    </div>
                    <div className="text-center">
                      <Target className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-bold text-accent">{project.stats.reach}</div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                    </div>
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
              Want Results Like These?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar success. Every brand has unique potential - let's unlock yours.
            </p>
            <a
              href="https://wa.me/918849243397?text=Hi!%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20growing%20my%20brand."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero bg-primary text-accent hover:bg-primary/90"
            >
              Start Your Success Story <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
