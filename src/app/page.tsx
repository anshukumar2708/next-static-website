import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/ui/Hero';
import ImageSlider from '@/components/ui/ImageSlider';
import { homeData } from '@/utils';
import Card from '@/components/ui/card';
import CtaSection from '@/components/ui/ctaSection';

// Metadata for SEO
export const metadata = {
  title: "Home",
  description:
    "Home Page",
};

const Home = () => {
  const { features, services, ctaData } = homeData;

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Scale Infotech</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication to your success.
            </p>
          </div>
          <Card features={features} />
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
            {services?.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3">{service?.title}</h3>
                <p className="text-muted-foreground mb-4">{service?.description}</p>
                <div className="text-2xl font-bold gradient-text mb-6">{service?.price}</div>
                <button className="w-full btn-secondary group flex justify-start items-center">
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
      <CtaSection ctaData={ctaData} />

    </div>
  );
};

export default Home;