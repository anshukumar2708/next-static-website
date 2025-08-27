"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { portfolioData } from '@/utils';
import { Banner } from '@/components/ui/banner';


const Portfolio = () => {
    const { banner } = portfolioData;
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce'];

    const projects = [
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
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
            tags: ["Figma", "Prototyping", "User Research"],
            date: "2023",
            link: "#"
        },
        {
            id: 5,
            title: "Food Delivery App",
            category: "Mobile Apps",
            description: "On-demand food delivery application with real-time tracking.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
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
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="">
            {/* Banner Section */}
            <Banner banner={banner} />

            {/* Filter Section */}
            <section className="py-12 bg-background border-b border-border">
                <div className="container-width">
                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                                    ? 'bg-gradient-primary text-white shadow-lg'
                                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Project Image */}
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                                        <a
                                            href={project.link}
                                            className="bg-white text-primary p-3 rounded-full hover:scale-110 transition-transform duration-300"
                                        >
                                            <ExternalLink className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Tag className="w-4 h-4" />
                                            <span>{project.category}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Projects Completed" },
                            { number: "150+", label: "Happy Clients" },
                            { number: "25+", label: "Awards Won" },
                            { number: "5+", label: "Years Experience" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-width text-center">
                    <div className="max-w-3xl mx-auto animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Create Something Amazing?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let&apos;s work together to bring your vision to life and create your next success story.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90">
                                Start Your Project
                            </a>
                            <a href="/services" className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
                                View Our Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;