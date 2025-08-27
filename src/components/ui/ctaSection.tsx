import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export interface ICtaLink {
    href: string;
    label: string;
    className: string;
}

export interface IBenefit {
    text: string;
}

export interface ICards {
    title: string, description: string
}

export interface ICtaData {
    heading: string;
    subHeading: string;
    subscribe?: string;
    links?: ICtaLink[];
    benefits?: IBenefit[];
    card?: ICards[]
}

const CtaSection = ({ ctaData }: { ctaData: ICtaData }) => {

    return (
        <section className="section-padding bg-gradient-primary text-white">
            <div className="container-width text-center">
                <div className="max-w-3xl mx-auto animate-fade-in">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {ctaData?.heading}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">{ctaData?.subHeading}</p>

                    {/* CTA Links */}
                    {ctaData?.links && <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {ctaData?.links?.map((link, index) => (
                            <Link key={index} href={link?.href} className={link?.className}>
                                {link?.label}
                            </Link>
                        ))}
                    </div>}

                    {/* Benefits */}
                    {ctaData?.benefits && <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {ctaData?.benefits?.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center gap-2 text-white/90"
                            >
                                <CheckCircle className="w-5 h-5" />
                                <span>{benefit?.text}</span>
                            </div>
                        ))}
                    </div>}

                    {/* about page cards */}
                    {ctaData?.card && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ctaData?.card?.map((value, index) => (
                            <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                <p className="text-white/80">{value.description}</p>
                            </div>
                        ))}
                    </div>}

                    {/* Blog page section */}
                    {ctaData?.subscribe && <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white focus:ring-2 focus:ring-accent focus:outline-none"
                        />
                        <button className="btn-secondary bg-white text-primary hover:bg-white/90 whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>}
                    {ctaData?.subscribe && <p className="text-sm text-white/70 mt-4">
                        No spam, unsubscribe at any time.
                    </p>}
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
