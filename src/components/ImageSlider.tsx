"use client"
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from "react-slick";
import slider1 from '../../public/assets/slider-1.jpg';
import slider2 from '../../public/assets/slider-2.jpg';
import slider3 from '../../public/assets/slider-3.jpg';


// Custom Arrow Components
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

const ImageSlider = () => {
  const slides = [
    {
      image: slider1,
      title: "Professional Team Collaboration",
      description: "Building success through teamwork and innovation",
      overlay: "bg-gradient-to-r from-blue-600/80 to-purple-600/80"
    },
    {
      image: slider2,
      title: "Modern Workspace Solutions",
      description: "Creating environments that inspire productivity",
      overlay: "bg-gradient-to-r from-purple-600/80 to-pink-600/80"
    },
    {
      image: slider3,
      title: "Digital Innovation",
      description: "Transforming ideas into digital realities",
      overlay: "bg-gradient-to-r from-indigo-600/80 to-blue-600/80"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses transform their digital presence
            and achieve exceptional results.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl animate-scale">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="relative h-96 md:h-[500px]">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className={`absolute inset-0 ${slide.overlay}`} />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                  <div className="max-w-3xl animate-fade-in">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white/90 mb-6">
                      {slide.description}
                    </p>
                    <button className="btn-primary bg-white text-primary hover:bg-white/90">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up">
          {[
            { icon: "🚀", number: "300+", label: "Projects Launched" },
            { icon: "⭐", number: "4.9/5", label: "Average Rating" },
            { icon: "🌍", number: "25+", label: "Countries Served" },
            { icon: "💼", number: "5+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;