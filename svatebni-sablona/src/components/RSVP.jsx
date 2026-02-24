import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function RSVP() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        adults: 1,
        children: 0,
        special_requirements: '',
        accommodation: 'ne'
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Odesílám...');
        try {
            const res = await fetch('http://localhost:5000/api/rsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('Těšíme se na vás! Potvrzení brzy obdržíte.');
                setFormData({
                    name: '', email: '', phone: '', adults: 1, children: 0, special_requirements: '', accommodation: 'ne'
                });
            } else {
                setStatus('Něco se pokazilo, zkuste to prosím znovu.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Nelze se spojit se serverem.');
        }
    };

    return (
        <section className="px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-primary-400">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-gray-800 mb-4"
                    >
                        RSVP
                    </motion.h2>
                    <p className="text-gray-500 font-light">Prosíme o potvrzení vaší účasti do 30. června 2026.</p>
                </div>

                {status && (
                    <div className="mb-8 p-4 bg-secondary-100 text-secondary-700 rounded-lg text-center font-medium">
                        {status}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Celé Jméno *</label>
                            <input
                                type="text" required name="name" value={formData.name} onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
                                placeholder="Jan Novák"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                            <input
                                type="email" required name="email" value={formData.email} onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
                                placeholder="jan.novak@email.cz"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                            <input
                                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
                                placeholder="+420 123 456 789"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Počet Dospělých *</label>
                            <input
                                type="number" min="1" max="10" required name="adults" value={formData.adults} onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Počet Dětí</label>
                            <input
                                type="number" min="0" max="10" name="children" value={formData.children} onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Potřebujete doporučit ubytování?</label>
                        <select
                            name="accommodation" value={formData.accommodation} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors bg-white"
                        >
                            <option value="ne">Ne, nepotřebuji</option>
                            <option value="ano">Ano, chtěl/a bych spát v Zámeckém hotelu</option>
                            <option value="jine">Ano, doporučte mi prosím penzion v okolí</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Diety nebo speciální požadavky</label>
                        <textarea
                            name="special_requirements" value={formData.special_requirements} onChange={handleChange} rows="3"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-colors"
                            placeholder="Např. vegetarián, bez lepku..."
                        ></textarea>
                    </div>

                    <div className="pt-4 text-center">
                        <button
                            type="submit"
                            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-12 rounded-full transition-transform transform hover:scale-105 shadow-md uppercase tracking-wider text-sm"
                        >
                            Odeslat Potvrzení
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
