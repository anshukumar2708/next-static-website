"use client";
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Banner } from '@/components/ui/banner';
import { contactData } from '@/utils';

const Contact = () => {
    const { banner } = contactData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            message: ''
        });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
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
    ];

    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Digital Marketing",
        "Security Solutions",
        "Cloud Solutions",
        "Consulting"
    ];

    return (
        <div className="">
            {/* Banner Section */}
            <Banner banner={banner} />

            {/* Contact Section */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="animate-slide-up">
                            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                                We&apos;re here to help you succeed. Reach out to us through any of
                                the channels below, and we&apos;ll get back to you promptly.
                            </p>

                            <div className="space-y-6 mb-8">
                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary text-white rounded-lg flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">{item.title}</h3>
                                            {item.link !== "#" ? (
                                                <a
                                                    href={item.link}
                                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                                >
                                                    {item.info}
                                                </a>
                                            ) : (
                                                <p className="text-muted-foreground">{item.info}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Features */}
                            <div className="w-full bg-gradient-primary text-white p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Free initial consultation",
                                        "24-hour response time",
                                        "Transparent pricing",
                                        "Dedicated project manager",
                                        "Post-launch support"
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-white" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Quick answers to common questions about our services and process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                question: "How long does a typical project take?",
                                answer: "Project timelines vary based on scope and complexity, typically ranging from 4-16 weeks for most projects."
                            },
                            {
                                question: "Do you offer post-launch support?",
                                answer: "Yes, we provide comprehensive post-launch support including maintenance, updates, and technical assistance."
                            },
                            {
                                question: "What's your payment structure?",
                                answer: "We typically work with a 50% upfront payment and 50% upon completion, with milestone payments for larger projects."
                            },
                            {
                                question: "Can you work with our existing team?",
                                answer: "Absolutely! We're experienced in collaborating with in-house teams and can adapt to your workflow."
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <h3 className="font-semibold mb-2 text-primary">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;