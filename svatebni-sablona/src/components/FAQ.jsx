import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [faqs, setFaqs] = useState([]);
    const [openId, setOpenId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/faqs')
            .then(res => res.json())
            .then(data => setFaqs(data))
            .catch(err => console.error(err));
    }, []);

    const toggleOpen = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-24 px-4 bg-cream-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-gray-800 mb-6"
                    >
                        Otázky a Odpovědi
                    </motion.h2>
                    <div className="w-24 h-[1px] bg-primary-300 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        Všechno, co potřebujete vědět o našem velkém dni. Pokud zde nenajdete odpověď na svou otázku, neváhejte nás kontaktovat přes formulář níže.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={faq.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleOpen(faq.id)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-cream-50 transition-colors"
                            >
                                <span className="font-medium text-lg text-gray-800">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-primary-400 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 border-t border-gray-50 text-gray-600 font-light leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Contact info below FAQ */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-serif text-gray-800 mb-2">Stále máte dotaz?</h3>
                    <p className="text-gray-500 font-light mb-6">Napište nám nebo nám jednoduše zavolejte.</p>
                    <div className="flex justify-center gap-8">
                        <div>
                            <p className="text-sm text-primary-600 tracking-widest uppercase mb-1">Nevěsta</p>
                            <p className="font-medium text-gray-700">+420 123 456 789</p>
                        </div>
                        <div>
                            <p className="text-sm text-primary-600 tracking-widest uppercase mb-1">Ženich</p>
                            <p className="font-medium text-gray-700">+420 987 654 321</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
