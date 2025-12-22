import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Aditya Rao',
            role: 'Startup Founder, TechFlow',
            content: 'Needed 500 visiting cards urgently for an investor summit. Sam\'s Print Studio delivered them in 4 hours! The quality was premium matte, exactly as I wanted.',
            rating: 5
        },
        {
            name: 'Priya Sharma',
            role: 'Event Manager, Bling Events',
            content: 'The 6ft standee banners were vibrant and sturdy. They helped our stall stand out at the trade fair. Best printing service in Sarjapur area!',
            rating: 5
        },
        {
            name: 'Rahul Verma',
            role: 'Restaurant Owner',
            content: 'Ordered 5000 flyers for my new cafe opening. The paper quality was great and the colors were exactly like my digital design. Very happy with the pricing.',
            rating: 5
        }
    ];

    return (
        <section className="bg-gray-50 py-20 relative overflow-hidden">
            {/* Decorative quotes background */}
            <div className="absolute top-10 left-10 text-gray-200 opacity-50">
                <Quote size={120} />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here is what business owners in Bangalore are saying about us.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.content}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-2 border border-green-200 px-6 py-2 rounded-full hover:bg-green-50 transition">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-4 h-4" />
                        See all 200+ Reviews on Google
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
