import React, { useState } from 'react';
import { Check } from 'lucide-react';
import DesignPreview from './DesignPreview';

const DesignCard = ({ design, serviceName }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer group">
            {/* Design Preview */}
            <div className={`${design.color} h-56 flex items-center justify-center relative overflow-hidden bg-opacity-30 p-4`}>
                {design.image && !imgError ? (
                    <img
                        src={`${process.env.PUBLIC_URL}${design.image}`}
                        alt={design.title}
                        className="w-full h-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <DesignPreview type={serviceName} style={design.color} title={design.title} />
                )}
            </div>

            {/* Card Content */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{design.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{design.description}</p>

                <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition font-semibold flex items-center justify-center gap-2 group-hover:gap-3">
                    <Check className="w-4 h-4" />
                    Select Design
                </button>
            </div>
        </div>
    );
};

export default DesignCard;
