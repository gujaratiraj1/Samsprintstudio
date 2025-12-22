import React from 'react';

const DesignPreview = ({ type, style, title }) => {
    // Helper for generating random-looking but deterministic patterns
    const getPattern = (title) => {
        const sum = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return sum % 3;
    };

    const pattern = getPattern(title);

    const getStyleClasses = () => {
        if (style.includes('blue')) return 'from-blue-100 to-blue-200 border-blue-200';
        if (style.includes('yellow') || style.includes('gold')) return 'from-yellow-100 to-amber-200 border-yellow-200';
        if (style.includes('purple')) return 'from-purple-100 to-violet-200 border-purple-200';
        if (style.includes('gray') || style.includes('slate')) return 'from-gray-100 to-slate-200 border-gray-200';
        if (style.includes('red')) return 'from-red-100 to-red-200 border-red-200';
        if (style.includes('green')) return 'from-green-100 to-emerald-200 border-green-200';
        if (style.includes('indigo')) return 'from-indigo-100 to-indigo-200 border-indigo-200';
        if (style.includes('pink')) return 'from-pink-100 to-rose-200 border-pink-200';
        if (style.includes('orange')) return 'from-orange-100 to-orange-200 border-orange-200';
        return 'from-gray-50 to-gray-100 border-gray-200';
    };

    const baseClasses = `relative shadow-sm border ${getStyleClasses()} bg-gradient-to-br transition-transform group-hover:scale-105 duration-300`;

    // Render content based on type
    if (type === 'visiting-cards') {
        return (
            <div className={`${baseClasses} aspect-[1.75/1] w-48 rounded-lg p-4 flex flex-col justify-between`}>
                {/* Mock Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center font-bold text-xs text-gray-700">
                        {title[0]}
                    </div>
                    <div className="h-2 w-16 bg-white/40 rounded"></div>
                </div>
                {/* Mock Text Lines */}
                <div className="space-y-1.5">
                    <div className="h-1.5 w-24 bg-current opacity-40 rounded"></div>
                    <div className="h-1.5 w-32 bg-current opacity-30 rounded"></div>
                    <div className="h-1.5 w-20 bg-current opacity-30 rounded"></div>
                </div>
                {/* Decorative Element */}
                {pattern === 0 && <div className="absolute right-0 top-0 w-16 h-16 bg-white/10 rounded-bl-full"></div>}
                {pattern === 1 && <div className="absolute left-0 bottom-0 w-full h-1/3 bg-white/10 skew-y-6 transform origin-bottom-left"></div>}
                {pattern === 2 && <div className="absolute inset-0 bg-white/5 opacity-50 backdrop-blur-[1px]"></div>}
            </div>
        );
    }

    if (type === 'flyers') {
        return (
            <div className={`${baseClasses} aspect-[1/1.4] w-32 rounded-md p-3 flex flex-col`}>
                {/* Flyer Header Image Mock */}
                <div className="w-full h-1/3 bg-white/40 rounded-sm mb-2 overflow-hidden relative">
                    {pattern === 0 && <div className="absolute -inset-2 bg-gradient-to-tr from-transparent to-white/30 transform rotate-45"></div>}
                </div>
                {/* Headline */}
                <div className="h-3 w-3/4 bg-current opacity-60 rounded mb-1.5 self-center"></div>
                {/* Body Text */}
                <div className="space-y-1 mb-auto">
                    <div className="h-1 w-full bg-current opacity-30 rounded"></div>
                    <div className="h-1 w-full bg-current opacity-30 rounded"></div>
                    <div className="h-1 w-5/6 bg-current opacity-30 rounded"></div>
                </div>
                {/* Footer/CTA */}
                <div className="mt-2 h-4 w-full bg-white/50 rounded-sm flex items-center justify-center">
                    <div className="w-12 h-1 bg-black/20 rounded"></div>
                </div>
            </div>
        );
    }

    if (type === 'banners') {
        return (
            <div className={`${baseClasses} aspect-[3/1] w-56 rounded-md p-3 flex items-center justify-between`}>
                <div className="w-12 h-12 bg-white/30 rounded-full flex-shrink-0"></div>
                <div className="flex-1 ml-3 space-y-2">
                    <div className="h-3 w-3/4 bg-current opacity-50 rounded"></div>
                    <div className="h-2 w-1/2 bg-current opacity-30 rounded"></div>
                </div>
            </div>
        );
    }

    if (type === 'stickers-labels') {
        const isRound = pattern % 2 === 0;
        return (
            <div className="flex items-center justify-center w-full h-full p-4">
                <div className={`${baseClasses} ${isRound ? 'w-24 h-24 rounded-full' : 'w-24 h-24 rounded-xl'} flex items-center justify-center p-3 border-4 border-white/40`}>
                    <div className="text-center">
                        <div className="font-bold text-xs opacity-70 tracking-widest uppercase mb-1">{title.split(' ')[0]}</div>
                        <div className="w-8 h-8 bg-white/40 rounded-full mx-auto"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (type === 'letterheads') {
        return (
            <div className={`${baseClasses} aspect-[1/1.4] w-32 rounded-sm p-3 flex flex-col bg-white border-gray-100`}>
                {/* Letterhead Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="w-6 h-6 bg-current opacity-20 rounded-full"></div>
                    <div className="space-y-0.5 text-right">
                        <div className="w-10 h-0.5 bg-black/20 ml-auto"></div>
                        <div className="w-8 h-0.5 bg-black/20 ml-auto"></div>
                    </div>
                </div>
                {/* Content Lines */}
                <div className="space-y-1.5 mt-2 px-1">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className={`h-0.5 bg-black/10 rounded ${i % 3 === 0 ? 'w-5/6' : 'w-full'}`}></div>
                    ))}
                </div>
                {/* Footer */}
                <div className="mt-auto h-2 border-t border-black/5 pt-1 flex justify-center gap-2">
                    <div className="w-2 h-0.5 bg-black/10"></div>
                    <div className="w-2 h-0.5 bg-black/10"></div>
                </div>
            </div>
        );
    }

    if (type === 'id-cards') {
        return (
            <div className={`${baseClasses} aspect-[1/1.6] w-24 rounded-lg p-2.5 flex flex-col items-center bg-white shadow-md relative overflow-hidden`}>
                {/* Lanyard Hole */}
                <div className="w-8 h-1 bg-black/10 rounded-full mb-2 absolute top-1"></div>

                {/* Photo Area */}
                <div className="w-12 h-12 bg-gray-200 rounded-md mt-2 mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                </div>

                {/* Name & Details */}
                <div className="w-full text-center space-y-1">
                    <div className="w-16 h-1.5 bg-black/40 rounded mx-auto"></div>
                    <div className="w-12 h-1 bg-black/20 rounded mx-auto"></div>
                </div>

                {/* Barcode/Chip */}
                <div className="mt-auto w-full h-3 bg-black/5 rounded flex items-center justify-center px-1 gap-0.5">
                    {[...Array(6)].map((_, i) => <div key={i} className="w-0.5 h-1.5 bg-black/20"></div>)}
                </div>
            </div>
        );
    }

    // Fallback
    return <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>;
};

export default DesignPreview;
