import { Banner } from '@/components/ui/banner';
import CtaSection from '@/components/ui/ctaSection';
import { blogData } from '@/utils';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import Image from 'next/image';

// Metadata for SEO
export const metadata = {
    title: "Blog",
    description:
        "Blog Page",
};


const Blog = () => {
    const { banner, categories, blogPosts, featuredPost, ctaData } = blogData;

    return (
        <div className="">
            {/* Hero Section */}
            <Banner banner={banner} />

            {/* Featured Post */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="w-full mb-12 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
                        <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <div className="relative aspect-video lg:aspect-auto">
                                    <Image
                                        src={featuredPost?.image}
                                        alt={featuredPost?.title}
                                        className="w-full h-full object-cover"
                                        width={800}
                                        height={400}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                                            Featured
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{featuredPost?.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{featuredPost?.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Tag className="w-4 h-4" />
                                            <span>{featuredPost?.category}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors duration-300">
                                        {featuredPost?.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {featuredPost?.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-sm text-muted-foreground">{featuredPost?.author}</span>
                                        </div>
                                        <button className="btn-primary group flex justify-start items-center">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Latest <span className="gradient-text">Articles</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Insights and expertise from our team of industry professionals.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
                        {categories?.map((category) => (
                            <button
                                key={category}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts?.map((post, index) => (
                            <article
                                key={post?.id}
                                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={post?.image}
                                        alt={post?.title}
                                        width={800}
                                        height={500}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                                            {post?.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post?.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{post?.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors duration-300 line-clamp-2">
                                        {post?.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                                        {post?.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-sm text-muted-foreground">{post?.author}</span>
                                        </div>
                                        <button className="text-primary hover:text-primary/80 font-medium text-sm group">
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12 animate-fade-in">
                        <button className="btn-primary">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CtaSection ctaData={ctaData} />
        </div>
    );
};

export default Blog;