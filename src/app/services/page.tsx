import Link from 'next/link';
import { Code, Smartphone, Palette, BarChart3, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { servicesData } from '@/utils';
import { Banner } from '@/components/ui/banner';


const Services = () => {
    const { banner } = servicesData

    const services = [
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
    ];

    const process = [
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
    ];

    return (
        <div className="">
            {/* Banner Section */}
            <Banner banner={banner} />

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:scale-105 animate-slide-up ${service.popular
                                    ? 'border-primary bg-gradient-primary text-white'
                                    : 'border-border bg-card hover:border-primary/50'
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {service.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${service.popular ? 'bg-white/20' : 'bg-gradient-primary text-white'
                                    }`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className={`mb-6 leading-relaxed ${service.popular ? 'text-white/90' : 'text-muted-foreground'
                                    }`}>
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle className={`w-5 h-5 ${service.popular ? 'text-white' : 'text-primary'
                                                }`} />
                                            <span className={service.popular ? 'text-white' : 'text-foreground'}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className={`text-2xl font-bold mb-6 ${service.popular ? 'text-white' : 'text-primary'
                                    }`}>
                                    {service.price}
                                </div>

                                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group ${service.popular
                                    ? 'bg-white text-primary hover:bg-white/90'
                                    : 'bg-primary text-white hover:bg-primary/90'
                                    }`}>
                                    Get Started
                                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our <span className="gradient-text">Process</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A proven methodology that ensures successful project delivery every time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div
                                key={index}
                                className="relative text-center p-6 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Connection Line */}
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 right-0 w-full h-0.5 bg-gradient-primary transform translate-x-1/2" />
                                )}

                                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary text-white rounded-full text-xl font-bold mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
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
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let&apos;s discuss your project and find the perfect solution for your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="btn-secondary bg-white text-primary hover:bg-white/90">
                                Start Your Project
                            </Link>
                            <Link href="/portfolio" className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;