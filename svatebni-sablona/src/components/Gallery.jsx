import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
    const images = [
        { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80', alt: 'Zásnuby', className: 'md:col-span-2 md:row-span-2' },
        { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80', alt: 'Ruce', className: 'md:col-span-1 md:row-span-1' },
        { src: 'https://images.unsplash.com/photo-1469504512104-aa946026cad8?auto=format&fit=crop&w=800&q=80', alt: 'Příroda', className: 'md:col-span-1 md:row-span-2' },
        { src: 'https://images.unsplash.com/photo-1549410183-b78912e9b0ae?auto=format&fit=crop&w=800&q=80', alt: 'Zámek', className: 'md:col-span-1 md:row-span-1' },
        { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', alt: 'Svatba', className: 'md:col-span-2 md:row-span-1' },
    ];

    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-primary-600 mb-6"
                    >
                        Společné Chvíle
                    </motion.h2>
                    <div className="w-24 h-[1px] bg-primary-300 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        Malá ukázka z našeho předsvatebního focení. Těšíme se, až sem po svatbě přidáme i fotky z našeho velkého dne, které s námi oslavíte!
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-xl group ${img.className || 'col-span-1 row-span-1'}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
