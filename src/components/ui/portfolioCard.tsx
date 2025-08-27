"use client";
import React, { useState } from 'react'
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';
import { portfolioData } from '@/utils';
import Link from 'next/link';

const PortfolioCard = () => {
    const { categories, projects } = portfolioData;
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <>
            {/* Filter Section */}
            <section className="py-12 bg-background border-b border-border">
                <div className="container-width">
                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
                        {categories?.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                                    ? 'bg-gradient-primary text-white shadow-lg'
                                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects?.map((project, index) => (
                            <div
                                key={project?.id}
                                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Project Image */}
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={project?.image}
                                        alt={project?.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                                        <Link
                                            href={project?.link}
                                            className="bg-white text-primary p-3 rounded-full hover:scale-110 transition-transform duration-300"
                                        >
                                            <ExternalLink className="w-6 h-6" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project?.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Tag className="w-4 h-4" />
                                            <span>{project?.category}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                        {project?.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project?.tags?.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioCard;