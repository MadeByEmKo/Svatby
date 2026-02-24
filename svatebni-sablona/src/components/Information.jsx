import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, CalendarHeart } from 'lucide-react';

export default function Information() {
    const schedule = [
        { time: '13:00', event: 'Příjezd hostů' },
        { time: '14:00', event: 'Svatební obřad' },
        { time: '15:00', event: 'Společné focení a gratulace' },
        { time: '16:00', event: 'Svatební hostina' },
        { time: '18:00', event: 'Krájení dortu' },
        { time: '19:00', event: 'První tanec a volná zábava' },
        { time: '22:00', event: 'Večerní raut' },
    ];

    return (
        <section className="py-24 bg-cream-50">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-primary-600 mb-6"
                    >
                        Svatební Den
                    </motion.h2>
                    <div className="w-24 h-[1px] bg-primary-300 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 mb-24">

                    {/* Ceremony */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-sm border border-cream-100 overflow-hidden"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1549410183-b78912e9b0ae?auto=format&fit=crop&w=800&q=80"
                                alt="Místo Obřadu"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                                <h3 className="text-3xl font-serif text-white">Obřad</h3>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-primary-500 shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-800">14:00</p>
                                    <p className="text-gray-500 font-light text-sm">Prosíme o příjezd alespoň 30 minut předem.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary-500 shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-800">Zámecká Zahrada Sychrov</p>
                                    <p className="text-gray-500 font-light text-sm">Sychrov 1, 463 44 Sychrov</p>
                                </div>
                            </div>
                            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden mt-6">
                                {/* Embed Map Example via iframe */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10125.748375836926!2d15.0847953!3d50.6272304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47094ba4430eef7f%3A0xcb13b41eeb0a022!2zWvOhbWVrIFN5Y2hyb3Y!5e0!3m2!1scs!2scz!4v1683907314524!5m2!1scs!2scz"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                    title="Mapa Sychrov"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* Party */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-sm border border-cream-100 overflow-hidden"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
                                alt="Místo Hostiny"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                                <h3 className="text-3xl font-serif text-white">Hostina a Oslava</h3>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-primary-500 shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-800">16:00 - Výdrž</p>
                                    <p className="text-gray-500 font-light text-sm">Zábava, jídlo, tanec a skvělá nálada po celý večer.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary-500 shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-800">Oranžerie Sychrov</p>
                                    <p className="text-gray-500 font-light text-sm">Hned vedle hlavního zámeckého areálu.</p>
                                </div>
                            </div>
                            <div className="bg-primary-50 p-4 rounded-lg mt-6">
                                <h4 className="font-semibold text-primary-700 mb-2">Ubytování</h4>
                                <p className="text-sm text-gray-600 font-light">Pro hosty z daleka máme zajištěno zlevněné ubytování v zámeckém hotelu. Dejte nám vědět v RSVP, pokud máte zájem.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Schedule */}
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100">
                    <h3 className="text-3xl font-serif text-center text-gray-800 mb-10">Harmonogram Dne</h3>

                    <div className="relative border-l border-primary-200 ml-4 md:ml-8 space-y-8">
                        {schedule.map((item, id) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: id * 0.1 }}
                                className="relative pl-8"
                            >
                                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-primary-400 border-4 border-white shadow-sm"></div>
                                <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                                    <h4 className="text-xl font-medium text-primary-600 mb-1 md:mb-0 w-20 shrink-0">{item.time}</h4>
                                    <p className="text-gray-700 font-light text-lg">{item.event}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
