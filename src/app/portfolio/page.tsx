import { portfolioData } from '@/utils';
import { Banner } from '@/components/ui/banner';
import PortfolioCard from '@/components/ui/portfolioCard';
import CtaSection from '@/components/ui/ctaSection';

// Metadata for SEO
export const metadata = {
    title: "Portfolio",
    description:
        "Portfolio Page",
};

const Portfolio = () => {
    const { banner, ctaData } = portfolioData;

    return (
        <div className="">
            {/* Banner Section */}
            <Banner banner={banner} />

            {/* filter section */}
            <PortfolioCard />

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
            <CtaSection ctaData={ctaData} />
        </div>
    );
};

export default Portfolio;