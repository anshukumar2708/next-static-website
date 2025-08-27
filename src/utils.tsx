import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Zap,
  Users,
  Shield,
  Globe
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


// home page data
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
