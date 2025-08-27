import Link from 'next/link';
import { aboutData } from '@/utils';
import { Banner } from '@/components/ui/banner';
import Card from '@/components/ui/card';
import CtaSection from '@/components/ui/ctaSection';

const About = () => {
    const { banner, valuesData, stats, team, ctaData } = aboutData;

    return (
        <div className="">
            {/* Banner Section */}
            <Banner banner={banner} />

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
                                {valuesData?.map((value, index) => (
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
                    <Card features={stats} />
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
                        {team?.map((member, index) => (
                            <div
                                key={index}
                                className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    {member?.name?.split(' ')?.map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{member?.name}</h3>
                                <div className="text-primary font-medium mb-3">{member?.role}</div>
                                <p className="text-muted-foreground">{member?.description}</p>
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
            <CtaSection ctaData={ctaData} />
        </div>
    );
};

export default About;