"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import axios from "axios";
import { toast } from 'react-toastify';
import { contactData } from '@/utils';

export const ContactForm = () => {
    const { services } = contactData;
    const EMAILJS_URI = process.env.NEXT_PUBLIC_EMAILJS_URI || "https://api.emailjs.com/api/v1.0/email/send";
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const EMAILJS_PRIVATE_KEY = process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const payload = {
                service_id: EMAILJS_SERVICE_ID,
                template_id: EMAILJS_TEMPLATE_ID,
                user_id: EMAILJS_PUBLIC_KEY,
                template_params: formData,
                accessToken: EMAILJS_PRIVATE_KEY,
            };
            await axios.post(EMAILJS_URI, payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            toast.success("Email sent successfully!");
        } catch (error) {
            console.log("error", error);
            toast.error("Something went wrong!");
        }
        setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            message: ''
        });
        setIsLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            placeholder="Your full name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            placeholder="Your company name"
                        />
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                            Service Interested In
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        >
                            <option value="">Select a service</option>
                            {services?.map((service) => (
                                <option key={service} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Tell us about your project..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    {isLoading ? (
                        "Sending..."
                    ) : (
                        <>
                            <div className='flex justify-center items-center'>
                                Send Message
                                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}
