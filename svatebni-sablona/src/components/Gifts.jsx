import React, { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Gifts() {
    const [gifts, setGifts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reserveForm, setReserveForm] = useState(null); // hold gift id
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const fetchGifts = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/gifts');
            const data = await res.json();
            setGifts(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGifts();
    }, []);

    const handleReserve = async (id) => {
        if (!name) return;
        try {
            const res = await fetch(`http://localhost:5000/api/gifts/${id}/reserve`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ reserved_by: name })
            });
            if (res.ok) {
                setStatus('Dar úspěšně zarezervován. Děkujeme!');
                setReserveForm(null);
                setName('');
                fetchGifts();
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className="px-4">
            <div className="max-w-5xl mx-auto py-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-accent-500 mb-6 drop-shadow-sm"
                    >
                        Svatební Dary
                    </motion.h2>
                    <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                        Pokud si lámete hlavu s tím, čím nás potěšit, připravili jsme malý seznam věcí, které bychom využili. Největším darem pro nás ale bude, když tento výjimečný den strávíte s námi.
                    </p>
                </div>

                {status && (
                    <div className="mb-6 bg-secondary-100 text-secondary-800 p-4 rounded-xl text-center">
                        {status}
                    </div>
                )}

                {loading ? (
                    <p className="text-center text-gray-400">Načítání darů...</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gifts.map((gift, i) => (
                            <motion.div
                                key={gift.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-6 rounded-2xl shadow-sm border ${gift.reserved ? 'bg-gray-50 border-gray-100 opacity-70' : 'bg-white border-accent-100'}`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-medium text-gray-800">{gift.title}</h3>
                                    <Gift className={`w-6 h-6 ${gift.reserved ? 'text-gray-400' : 'text-accent-400'}`} />
                                </div>
                                <p className="text-gray-500 font-light text-sm mb-6">{gift.description}</p>

                                {gift.reserved ? (
                                    <button disabled className="w-full py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed text-sm uppercase tracking-wider">
                                        Již zarezervováno
                                    </button>
                                ) : reserveForm === gift.id ? (
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            placeholder="Vaše jméno"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full px-3 py-2 border rounded border-gray-200 text-sm focus:ring-accent-300 focus:border-accent-300"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleReserve(gift.id)}
                                                className="flex-1 bg-accent-400 hover:bg-accent-500 text-white py-2 rounded font-medium text-sm transition-colors"
                                            >
                                                Potvrdit
                                            </button>
                                            <button
                                                onClick={() => setReserveForm(null)}
                                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 rounded font-medium text-sm transition-colors"
                                            >
                                                Zrušit
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setReserveForm(gift.id)}
                                        className="w-full py-2 border-2 border-accent-400 text-accent-600 hover:bg-accent-50 rounded-lg font-medium text-sm uppercase tracking-wider transition-colors"
                                    >
                                        Chci darovat
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="mt-16 bg-cream-50 p-8 rounded-2xl text-center shadow-inner border border-cream-100">
                    <h3 className="text-2xl font-serif text-gray-800 mb-4">Finanční Dary</h3>
                    <p className="text-gray-600 font-light mb-4">
                        Pokud byste nám raději chtěli přispět peněžním obnosem například na svatební cestu, budeme mít na místě připravenou truhlici. Případně můžete využít náš společný účet:
                    </p>
                    <p className="font-mono text-xl text-primary-600 bg-white inline-block px-6 py-3 rounded-xl border border-primary-200 shadow-sm">
                        123456789/0100
                    </p>
                </div>

            </div>
        </section>
    );
}
