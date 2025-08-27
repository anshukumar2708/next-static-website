import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '../../public/assets/hero-bg.jpg';

const statsData = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Team Members' },
  { number: '24/7', label: 'Support Available' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Modern business hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-width text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-scale">
            <span className="text-sm font-medium">✨ Welcome to the Future of Business</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Transform Your
            <span className="block gradient-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Vision
            </span>
            Into Reality
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.2s' }}>
            We create exceptional digital experiences that drive growth,
            engage audiences, and transform businesses in the modern world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-primary font-semibold py-4 px-8 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <button className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            {statsData?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat?.number}
                </div>
                <div className="text-sm text-white/70">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 left-5 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: '2s' }}
      />
    </section>
  );
};

export default Hero;