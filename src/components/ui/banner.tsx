import React from 'react'

interface IBanner {
    title: string,
    highlight: string,
    description: string,
};

export const Banner = ({ banner }: { banner: IBanner }) => {
    return (
        <section className="section-padding bg-gradient-secondary">
            <div className="container-width">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {banner?.title} <span className="gradient-text">{banner?.highlight}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {banner?.description}
                    </p>
                </div>
            </div>
        </section>
    )
}
