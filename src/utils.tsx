import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Zap,
  Shield,
  Globe,
  Users,
  Award,
  Clock,
  Heart
} from "lucide-react";
import slider1 from '../public/assets/slider-1.jpg';
import slider2 from '../public/assets/slider-2.jpg';
import slider3 from '../public/assets/slider-3.jpg';

// Header Data
export const headerLink = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// Footer Data
export const footerLinks = {

  socials: [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ],

  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ],

  services: [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Marketing",
  ],

  contactInfo: [
    { icon: MapPin, text: "123 Business Ave, Tech City" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: Mail, text: "hello@modernbiz.com" },
  ],

  policies: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};


// Home Page data
export const homeData = {
  features: [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast & Reliable",
      description: "Lightning-fast performance with 99.9% uptime guarantee",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Dedicated professionals with years of industry experience",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security for all your business needs",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      price: "Starting at $2,999",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      price: "Starting at $4,999",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that drive engagement and conversion",
      price: "Starting at $1,999",
    },
  ],

  slides: [
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
  ],

  statsData: [
    { icon: "🚀", number: "300+", label: "Projects Launched" },
    { icon: "⭐", number: "4.9/5", label: "Average Rating" },
    { icon: "🌍", number: "25+", label: "Countries Served" },
    { icon: "💼", number: "5+", label: "Years Experience" },
  ],

  ctaData: {
    heading: "Ready to Transform Your Business?",
    subHeading:
      "Join hundreds of satisfied clients who have accelerated their growth with our solutions.",
    links: [
      {
        href: "/contact",
        label: "Get Started Today",
        className:
          "btn-secondary bg-white text-primary hover:bg-white/90",
      },
      {
        href: "/portfolio",
        label: "View Our Work",
        className:
          "btn-secondary bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20",
      },
    ],
    benefits: [
      { text: "Free Consultation" },
      { text: "30-Day Money Back" },
      { text: "24/7 Support" },
    ],
  },
};

// About Us Page Data
export const aboutData = {
  banner: {
    title: "About",
    highlight: "Aimsoft",
    description:
      "We're a passionate team of digital innovators committed to transforming businesses through cutting-edge technology and creative excellence.",
  },
  stats: [
    { icon: <Users className="w-8 h-8" />, title: "50+", description: "Team Members" },
    { icon: <Award className="w-8 h-8" />, title: "500+", description: "Projects Completed" },
    { icon: <Clock className="w-8 h-8" />, title: "5+", description: "Years Experience" },
    { icon: <Heart className="w-8 h-8" />, title: "98%", description: "Client Satisfaction" }
  ],

  team: [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 10+ years in digital transformation"
    },
    {
      name: "Mike Chen",
      role: "CTO",
      description: "Technology expert specializing in scalable solutions"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      description: "Creative genius behind our award-winning designs"
    }
  ],
  valuesData: [
    "Innovation First",
    "Client Success",
    "Quality Delivery",
    "Continuous Learning",
  ],
  ctaData: {
    heading: "Our Values",
    subHeading:
      "The principles that guide everything we do.",
    card: [
      {
        title: "Innovation",
        description: "Pushing boundaries with creative solutions",
      },
      {
        title: "Excellence",
        description: "Delivering quality in every project",
      },
      {
        title: "Integrity",
        description: "Honest, transparent communication",
      },
      {
        title: "Collaboration",
        description: "Working together for success",
      },
    ]
  },
}

// Services Page Data
export const servicesData = {
  banner: {
    title: "Our",
    highlight: "Services",
    description:
      "Comprehensive digital solutions designed to accelerate your business growth and enhance your competitive advantage in the digital marketplace.",
  },
}

// Portfolio Page Data
export const portfolioData = {
  banner: {
    title: "Our",
    highlight: "Portfolio",
    description:
      "Explore our latest projects and see how we've helped businesses transform their digital presence and achieve exceptional results.",
  },
}

// Portfolio Page Data
export const blogData = {
  banner: {
    title: "Our",
    highlight: "Blog",
    description:
      "Stay updated with the latest trends, insights, and best practices in technology, design, and digital innovation.",
  },
}

// Portfolio Page Data
export const contactData = {
  banner: {
    title: "Contact",
    highlight: "Us",
    description:
      "Ready to start your project? Get in touch with our team and let's discuss how we can help transform your digital vision into reality.",
  },
}


