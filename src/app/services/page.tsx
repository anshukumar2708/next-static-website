import { ArrowRight, CheckCircle } from 'lucide-react';
import { servicesData } from '@/utils';
import { Banner } from '@/components/ui/banner';
import CtaSection from '@/components/ui/ctaSection';

// Metadata for SEO
export const metadata = {
    title: "Services",
    description:
        "Services Page",
};

const Services = () => {
    const { banner, services, process, ctaData } = servicesData;

    return (
        <div className="">
            {/* Banner Section */}
            <Banner banner={banner} />

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services?.map((service, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:scale-105 animate-slide-up ${service?.popular
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

                                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${service?.popular ? 'bg-white/20' : 'bg-gradient-primary text-white'
                                    }`}>
                                    {service?.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{service?.title}</h3>
                                <p className={`mb-6 leading-relaxed ${service?.popular ? 'text-white/90' : 'text-muted-foreground'
                                    }`}>
                                    {service?.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {service?.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle className={`w-5 h-5 ${service?.popular ? 'text-white' : 'text-primary'
                                                }`} />
                                            <span className={service?.popular ? 'text-white' : 'text-foreground'}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className={`text-2xl font-bold mb-6 ${service?.popular ? 'text-white' : 'text-primary'
                                    }`}>
                                    {service?.price}
                                </div>

                                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group ${service?.popular
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
                        {process?.map((step, index) => (
                            <div
                                key={index}
                                className="relative text-center p-6 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Connection Line */}
                                {index < process?.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 right-0 w-full h-0.5 bg-gradient-primary transform translate-x-1/2" />
                                )}

                                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary text-white rounded-full text-xl font-bold mb-4">
                                    {step?.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step?.title}</h3>
                                <p className="text-muted-foreground">{step?.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaSection ctaData={ctaData} />
        </div>
    );
};

export default Services;