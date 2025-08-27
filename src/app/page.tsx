import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Globe } from 'lucide-react';
import Hero from '@/components/Hero';
import ImageSlider from '@/components/ImageSlider';

const Home = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast & Reliable",
      description: "Lightning-fast performance with 99.9% uptime guarantee"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Dedicated professionals with years of industry experience"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security for all your business needs"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support"
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      price: "Starting at $2,999"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      price: "Starting at $4,999"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that drive engagement and conversion",
      price: "Starting at $1,999"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">ModernBiz</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary text-white rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <ImageSlider />

      {/* Services Preview Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-2xl font-bold gradient-text mb-6">{service.price}</div>
                <button className="w-full btn-secondary group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-width text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of satisfied clients who have accelerated their growth with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90">
                Get Started Today
              </Link>
              <Link href="/portfolio" className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
                View Our Work
              </Link>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                "Free Consultation",
                "30-Day Money Back",
                "24/7 Support"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;