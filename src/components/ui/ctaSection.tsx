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

export interface ICtaData {
    heading: string;
    subHeading: string;
    links?: ICtaLink[];
    benefits?: IBenefit[];
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
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {ctaData?.links?.map((link, index) => (
                            <Link key={index} href={link?.href} className={link?.className}>
                                {link?.label}
                            </Link>
                        ))}
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {ctaData?.benefits?.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center gap-2 text-white/90"
                            >
                                <CheckCircle className="w-5 h-5" />
                                <span>{benefit?.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
