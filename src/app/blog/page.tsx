import { Banner } from '@/components/ui/banner';
import { blogData } from '@/utils';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import Image from 'next/image';

const Blog = () => {
    const { banner } = blogData;

    const featuredPost = {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2024",
        excerpt: "Discover the latest trends shaping the web development landscape and how they'll impact your business in the coming year.",
        author: "Sarah Johnson",
        date: "December 15, 2024",
        readTime: "8 min read",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
        featured: true
    };

    const blogPosts = [
        {
            id: 2,
            title: "10 UI/UX Design Principles Every Developer Should Know",
            excerpt: "Essential design principles that will help you create more user-friendly and engaging digital experiences.",
            author: "Mike Chen",
            date: "December 12, 2024",
            readTime: "6 min read",
            category: "Design",
            image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            title: "Mobile App Security: Best Practices for 2024",
            excerpt: "Learn how to protect your mobile applications and user data with these proven security strategies.",
            author: "Emily Rodriguez",
            date: "December 10, 2024",
            readTime: "7 min read",
            category: "Security",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
        },
        {
            id: 4,
            title: "Cloud Migration: A Complete Guide for Businesses",
            excerpt: "Everything you need to know about migrating your business to the cloud safely and efficiently.",
            author: "David Park",
            date: "December 8, 2024",
            readTime: "10 min read",
            category: "Cloud",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
        },
        {
            id: 5,
            title: "Digital Marketing Strategies That Actually Work",
            excerpt: "Proven digital marketing tactics to help your business reach more customers and increase conversions.",
            author: "Lisa Wang",
            date: "December 5, 2024",
            readTime: "9 min read",
            category: "Marketing",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
        },
        {
            id: 6,
            title: "The Rise of AI in Software Development",
            excerpt: "How artificial intelligence is transforming the way we build and deploy software applications.",
            author: "Alex Thompson",
            date: "December 3, 2024",
            readTime: "12 min read",
            category: "AI",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
        },
        {
            id: 7,
            title: "Building Scalable E-commerce Solutions",
            excerpt: "Key considerations and best practices for creating e-commerce platforms that grow with your business.",
            author: "Sarah Johnson",
            date: "December 1, 2024",
            readTime: "8 min read",
            category: "E-commerce",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
        }
    ];

    const categories = ["All", "Technology", "Design", "Security", "Cloud", "Marketing", "AI", "E-commerce"];

    return (
        <div className="">
            {/* Hero Section */}
            <Banner banner={banner} />

            {/* Featured Post */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="mb-12 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
                        <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <div className="relative aspect-video lg:aspect-auto">
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
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
                                            <span>{featuredPost.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{featuredPost.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Tag className="w-4 h-4" />
                                            <span>{featuredPost.category}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors duration-300">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                                        </div>
                                        <button className="btn-primary group">
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
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <article
                                key={post.id}
                                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-sm text-muted-foreground">{post.author}</span>
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

            {/* Newsletter Section */}
            <section className="section-padding bg-gradient-primary text-white">
                <div className="container-width text-center">
                    <div className="max-w-3xl mx-auto animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Stay in the Loop
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Subscribe to our newsletter and get the latest insights delivered directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white focus:ring-2 focus:ring-accent focus:outline-none"
                            />
                            <button className="btn-secondary bg-white text-primary hover:bg-white/90 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-white/70 mt-4">
                            No spam, unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;