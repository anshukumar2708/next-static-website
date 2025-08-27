import React, { ReactNode } from "react";

export interface IFeature {
    icon: ReactNode;
    title: string;
    description: string;
}

interface CardProps {
    features: IFeature[];
}

const Card: React.FC<CardProps> = ({ features }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features?.map((feature: IFeature, index: number) => (
                <div
                    key={index}
                    className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary text-white rounded-full mb-4">
                        {feature?.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature?.title}</h3>
                    <p className="text-muted-foreground">{feature?.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;
