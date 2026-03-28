import React, { useEffect, useState } from 'react';
import danduLogo from '../assets/logos_and_bg_images/dandu_logo.svg';

const LoadingScreen = () => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Prevent scrolling when loading
        document.body.style.overflow = 'hidden';
        
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 3000); // Animation phases completion

        return () => {
            document.body.style.overflow = 'unset';
            clearTimeout(exitTimer);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
            {/* Background Curtains */}
            <div className={`absolute inset-x-0 top-0 h-1/2 bg-[#F8F5F2] transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}></div>
            <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#F8F5F2] transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${isExiting ? 'translate-y-full' : 'translate-y-0'}`}></div>

            {/* Content Container */}
            <div className={`relative flex flex-col items-center z-10 transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                {/* Logo with masked reveal effect */}
                <div className="relative overflow-hidden mb-12 animate-reveal-box">
                    <img 
                        src={danduLogo} 
                        alt="Dandu Logo" 
                        className="w-32 md:w-48 h-auto opacity-0 animate-logo-fade-in"
                    />
                    {/* Revelator Mask */}
                    <div className="absolute inset-0 bg-[#37302F] transform -translate-x-full animate-mask-slide"></div>
                </div>
                
                {/* Brand Name with tracking animation */}
                <div className="overflow-hidden">
                    <h2 className="text-[#37302F] text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase animate-tracking-expand">
                        Dandu Interiors & Developers
                    </h2>
                </div>

                {/* Subtle progress indicator */}
                <div className="mt-12 w-40 h-[1px] bg-[#37302F]/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#37302F] transform -translate-x-full animate-progress-slide"></div>
                </div>
            </div>

            <style>{`
                @keyframes reveal-box {
                    0% { transform: scaleY(0); }
                    100% { transform: scaleY(1); }
                }

                @keyframes mask-slide {
                    0% { transform: translateX(-100%); }
                    40% { transform: translateX(0); }
                    60% { transform: translateX(0); }
                    100% { transform: translateX(101%); }
                }

                @keyframes logo-fade-in {
                    0% { opacity: 0; transform: scale(0.95); }
                    50% { opacity: 0; }
                    100% { opacity: 1; transform: scale(1); }
                }

                @keyframes tracking-expand {
                    0% { 
                        opacity: 0; 
                        letter-spacing: 0.1em; 
                        transform: translateY(10px);
                    }
                    100% { 
                        opacity: 1; 
                        letter-spacing: 0.5em; 
                        transform: translateY(0);
                    }
                }

                @keyframes progress-slide {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0); }
                }

                .animate-mask-slide {
                    animation: mask-slide 2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
                }

                .animate-logo-fade-in {
                    animation: logo-fade-in 1.5s ease-out 0.5s forwards;
                }

                .animate-tracking-expand {
                    animation: tracking-expand 2s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
                    opacity: 0;
                }

                .animate-progress-slide {
                    animation: progress-slide 3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;

