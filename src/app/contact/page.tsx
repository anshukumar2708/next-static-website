import { Mail, Phone, MapPin, Clock, } from 'lucide-react';
import { Banner } from '@/components/ui/banner';
import { contactData } from '@/utils';
import { ContactForm } from '@/components/ui/contactForm';

const Contact = () => {
    const { banner, faqData } = contactData;

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

    return (
        <div className="">
            {/* Banner Section */}
            <Banner banner={banner} />

            {/* Contact Section */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <ContactForm />

                        {/* Contact Information */}
                        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                                We&apos;re here to help you succeed. Reach out to us through any of
                                the channels below, and we&apos;ll get back to you promptly.
                            </p>

                            <div className="space-y-6 mb-8">
                                {contactInfo?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary text-white rounded-lg flex items-center justify-center">
                                            {item?.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">{item?.title}</h3>
                                            {item?.link !== "#" ? (
                                                <a
                                                    href={item?.link}
                                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                                >
                                                    {item?.info}
                                                </a>
                                            ) : (
                                                <p className="text-muted-foreground">{item?.info}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Features */}
                            {/* <div className="w-full bg-gradient-primary text-white p-8 rounded-2xl">
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
                            </div> */}

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
                        {faqData?.map((faq, index) => (
                            <div
                                key={index}
                                className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <h3 className="font-semibold mb-2 text-primary">{faq?.question}</h3>
                                <p className="text-muted-foreground">{faq?.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;