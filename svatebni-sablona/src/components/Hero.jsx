import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const targetDate = new Date('2026-08-24T14:00:00'); // Example date in the future

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +targetDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                dní: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hodin: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minut: Math.floor((difference / 1000 / 60) % 60),
                vteřin: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-stone-900/40"></div>
            </div>

            <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-xl md:text-2xl mb-4 tracking-widest uppercase font-light"
                >
                    Budeme se brát
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-md"
                >
                    Anna & Petr
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-white text-xl md:text-2xl mb-12 font-light"
                >
                    24. Srpen 2026 | Zámek Sychrov
                </motion.p>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex justify-center gap-4 md:gap-8 flex-wrap"
                >
                    {Object.keys(timeLeft).length ? (
                        Object.keys(timeLeft).map((interval) => (
                            <div key={interval} className="flex flex-col items-center">
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border border-white/30 text-white shadow-xl">
                                    <span className="text-3xl md:text-4xl font-serif">{timeLeft[interval]}</span>
                                </div>
                                <span className="text-white mt-2 uppercase tracking-widest text-xs md:text-sm">{interval}</span>
                            </div>
                        ))
                    ) : (
                        <span className="text-white text-2xl font-serif">A je to tady!</span>
                    )}
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-white text-sm tracking-widest uppercase mb-2">Posunout dolů</span>
                <div className="w-[1px] h-12 bg-white/50 overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-1/2 bg-white"
                    />
                </div>
            </motion.div>
        </div>
    );
}
