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
  Heart,
  Code,
  Smartphone,
  Palette,
  BarChart3,
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
  services: [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure Code"],
      price: "Starting at $2,999",
      popular: false
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["Native iOS/Android", "Cross-platform", "App Store Publishing", "Push Notifications"],
      price: "Starting at $4,999",
      popular: true
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that drive engagement and conversion.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,999",
      popular: false
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
      price: "Starting at $1,499/month",
      popular: false
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security Solutions",
      description: "Enterprise-grade security solutions to protect your business and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"],
      price: "Starting at $999/month",
      popular: false
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "DevOps", "Auto-scaling", "Backup Solutions"],
      price: "Starting at $799/month",
      popular: false
    }
  ],

  process: [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, challenges, and requirements."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Our team develops a comprehensive strategy tailored to your specific needs."
    },
    {
      step: "03",
      title: "Development",
      description: "We bring your vision to life using cutting-edge technologies and best practices."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We ensure a smooth launch and provide ongoing support for your success."
    }
  ],
  ctaData: {
    heading: "Ready to Get Started?",
    subHeading:
      "Let's discuss your project and find the perfect solution for your business needs.",
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
  categories: ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce'],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "E-commerce",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Stripe"],
      date: "2024",
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Apps",
      description: "Secure and intuitive banking application with biometric authentication.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Biometrics"],
      date: "2024",
      link: "#"
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "Web Development",
      description: "Comprehensive analytics dashboard for business intelligence and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "D3.js", "Python"],
      date: "2023",
      link: "#"
    },
    {
      id: 4,
      title: "Healthcare Platform",
      category: "UI/UX Design",
      description: "Patient-centered healthcare platform with telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Figma", "Prototyping", "User Research"],
      date: "2023",
      link: "#"
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "Mobile Apps",
      description: "On-demand food delivery application with real-time tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Flutter", "Google Maps", "WebSocket"],
      date: "2023",
      link: "#"
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "Web Development",
      description: "Professional corporate website with CMS integration and SEO optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Next.js", "CMS", "SEO"],
      date: "2024",
      link: "#"
    }
  ],
  ctaData: {
    heading: "Stay in the Loop",
    subHeading:
      "Subscribe to our newsletter and get the latest insights delivered directly to your inbox.",
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
  },
}

//Blog Page Data
export const blogData = {
  banner: {
    title: "Our",
    highlight: "Blog",
    description:
      "Stay updated with the latest trends, insights, and best practices in technology, design, and digital innovation.",
  },
  featuredPost: {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Discover the latest trends shaping the web development landscape and how they'll impact your business in the coming year.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
    featured: true
  },

  blogPosts: [
    {
      id: 2,
      title: "10 UI/UX Design Principles Every Developer Should Know",
      excerpt: "Essential design principles that will help you create more user-friendly and engaging digital experiences.",
      author: "Mike Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Mobile App Security: Best Practices for 2024",
      excerpt: "Learn how to protect your mobile applications and user data with these proven security strategies.",
      author: "Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Cloud Migration: A Complete Guide for Businesses",
      excerpt: "Everything you need to know about migrating your business to the cloud safely and efficiently.",
      author: "David Park",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Digital Marketing Strategies That Actually Work",
      excerpt: "Proven digital marketing tactics to help your business reach more customers and increase conversions.",
      author: "Lisa Wang",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "The Rise of AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we build and deploy software applications.",
      author: "Alex Thompson",
      date: "December 3, 2024",
      readTime: "12 min read",
      category: "AI",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Building Scalable E-commerce Solutions",
      excerpt: "Key considerations and best practices for creating e-commerce platforms that grow with your business.",
      author: "Sarah Johnson",
      date: "December 1, 2024",
      readTime: "8 min read",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    }
  ],
  categories: ["All", "Technology", "Design", "Security", "Cloud", "Marketing", "AI", "E-commerce"],
  ctaData: {
    heading: "Ready to Create Something Amazing?",
    subHeading:
      "Let's work together to bring your vision to life and create your next success story.",
    subscribe: "subscribe",
  },
}

// Contact Us Page Data
export const contactData = {
  banner: {
    title: "Contact",
    highlight: "Us",
    description:
      "Ready to start your project? Get in touch with our team and let's discuss how we can help transform your digital vision into reality.",
  },
  faqData: [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity, typically ranging from 4-16 weeks for most projects.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes, we provide comprehensive post-launch support including maintenance, updates, and technical assistance.",
    },
    {
      question: "What's your payment structure?",
      answer:
        "We typically work with a 50% upfront payment and 50% upon completion, with milestone payments for larger projects.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Absolutely! We're experienced in collaborating with in-house teams and can adapt to your workflow.",
    },
  ],
  contactInfo: [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "hello@modernbiz.com",
      link: "mailto:hello@modernbiz.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      info: "123 Business Ave, Tech City, TC 12345",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      info: "Mon - Fri: 9AM - 6PM EST",
      link: "#"
    }
  ],
  services: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Security Solutions",
    "Cloud Solutions",
    "Consulting"
  ]
}


