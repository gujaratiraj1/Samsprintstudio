import React from 'react';
import { Users, Printer, Star, CheckCircle2 } from 'lucide-react';

const TrustStrip = () => {
    return (
        <div className="relative py-12 bg-gray-900 border-b border-gray-800">
            {/* Abstract Pattern Background */}
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-green-500 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
                    <div className="p-4 group cursor-default">
                        <div className="flex justify-center mb-3 text-green-400 group-hover:scale-110 transition-transform">
                            <Users className="w-8 h-8" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">200+</div>
                        <div className="text-gray-400 text-xs font-medium uppercase tracking-widest">Happy Clients</div>
                    </div>
                    <div className="p-4 group cursor-default">
                        <div className="flex justify-center mb-3 text-blue-400 group-hover:scale-110 transition-transform">
                            <Printer className="w-8 h-8" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">5000+</div>
                        <div className="text-gray-400 text-xs font-medium uppercase tracking-widest">Orders Delivered</div>
                    </div>
                    <div className="p-4 group cursor-default">
                        <div className="flex justify-center mb-3 text-yellow-400 group-hover:scale-110 transition-transform">
                            <Star className="w-8 h-8" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                        <div className="text-gray-400 text-xs font-medium uppercase tracking-widest">Google Rating</div>
                    </div>
                    <div className="p-4 group cursor-default">
                        <div className="flex justify-center mb-3 text-purple-400 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                        <div className="text-gray-400 text-xs font-medium uppercase tracking-widest">On-Time Delivery</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustStrip;
