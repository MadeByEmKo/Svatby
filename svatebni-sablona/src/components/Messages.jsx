import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircleHeart } from 'lucide-react';

export default function Messages() {
    const [messages, setMessages] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [status, setStatus] = useState('');

    const fetchMessages = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/messages');
            const data = await res.json();
            setMessages(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ author, text })
            });
            if (res.ok) {
                setStatus('Vzkaz přidán! Děkujeme.');
                setAuthor('');
                setText('');
                fetchMessages();
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (e) {
            console.error(e);
            setStatus('Chyba při odesílání vzkazu.');
        }
    };

    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <MessageCircleHeart className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-gray-800 mb-6"
                    >
                        Napište Nám
                    </motion.h2>
                    <p className="text-lg text-gray-500 font-light">Těšíme se na vaše vzkazy a přání do společného života.</p>
                </div>

                <div className="grid md:grid-cols-5 gap-12">

                    <div className="md:col-span-2">
                        <div className="bg-cream-50 p-8 rounded-3xl shadow-sm border border-cream-100 sticky top-24">
                            <h3 className="text-2xl font-serif text-gray-800 mb-6">Zanechat Vzkaz</h3>
                            {status && <p className="mb-4 text-sm font-medium text-primary-600">{status}</p>}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Vaše Jméno / Přezdívka</label>
                                    <input
                                        type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Vzkaz</label>
                                    <textarea
                                        required rows="4" value={text} onChange={(e) => setText(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 outline-none resize-none"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 rounded-lg transition-colors uppercase tracking-wider text-sm">
                                    Odeslat
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="md:col-span-3 space-y-6">
                        {messages.length === 0 ? (
                            <p className="text-gray-400 italic text-center p-8">Zatím žádné vzkazy. Buďte první!</p>
                        ) : (
                            messages.map(msg => (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    key={msg.id}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
                                >
                                    <div className="absolute top-6 left-0 w-1 h-12 bg-primary-200 rounded-r-md"></div>
                                    <p className="text-gray-700 italic font-light mb-4 text-lg">"{msg.text}"</p>
                                    <p className="text-right text-gray-500 font-medium text-sm">— {msg.author}</p>
                                </motion.div>
                            ))
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
