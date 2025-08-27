import Link from 'next/link';
import { Users, Award, Clock, Heart } from 'lucide-react';


const About = () => {
    const stats = [
        { icon: <Users className="w-8 h-8" />, number: "50+", label: "Team Members" },
        { icon: <Award className="w-8 h-8" />, number: "500+", label: "Projects Completed" },
        { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" },
        { icon: <Heart className="w-8 h-8" />, number: "98%", label: "Client Satisfaction" }
    ];

    const team = [
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
    ];

    return (
        <div className="">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-secondary">
                <div className="container-width">
                    <div className="max-w-4xl mx-auto text-center animate-fade-in">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            About <span className="gradient-text">ModernBiz</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We&apos;re a passionate team of digital innovators committed to transforming
                            businesses through cutting-edge technology and creative excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-up">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    Founded in 2019, ModernBiz began as a small team of developers
                                    with a big vision: to democratize access to world-class digital solutions.
                                </p>
                                <p>
                                    Today, we&apos;ve grown into a full-service digital agency serving
                                    clients across 25+ countries, but our core mission remains the same –
                                    helping businesses thrive in the digital age.
                                </p>
                                <p>
                                    We believe in the power of technology to transform not just businesses,
                                    but entire communities. That&apos;s why we&apos;re committed to delivering
                                    solutions that are not only innovative but also sustainable and ethical.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-primary rounded-2xl p-8 text-white animate-scale">
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-lg text-white/90 mb-6">
                                To empower businesses with innovative digital solutions that drive
                                growth, enhance user experiences, and create lasting value.
                            </p>
                            <div className="space-y-2">
                                {["Innovation First", "Client Success", "Quality Delivery", "Continuous Learning"].map((value, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Impact in <span className="gradient-text">Numbers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            These numbers represent our commitment to excellence and client success.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary text-white rounded-full mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Meet Our <span className="gradient-text">Team</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The talented individuals who make everything possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <div className="text-primary font-medium mb-3">{member.role}</div>
                                <p className="text-muted-foreground">{member.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center animate-fade-in">
                        <Link href="/contact" className="btn-primary">
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-width text-center">
                    <div className="max-w-4xl mx-auto animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
                        <p className="text-xl text-white/90 mb-12">
                            The principles that guide everything we do.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Innovation", description: "Pushing boundaries with creative solutions" },
                                { title: "Excellence", description: "Delivering quality in every project" },
                                { title: "Integrity", description: "Honest, transparent communication" },
                                { title: "Collaboration", description: "Working together for success" }
                            ].map((value, index) => (
                                <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                    <p className="text-white/80">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;