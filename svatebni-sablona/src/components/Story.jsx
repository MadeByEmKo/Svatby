import React from 'react';
import { motion } from 'framer-motion';

export default function Story() {
    const people = [
        {
            role: 'Svědkyně Nevěsty',
            name: 'Klára Nováková',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
            description: 'Moje nejlepší kamarádka už od střední školy.'
        },
        {
            role: 'Svědek Ženicha',
            name: 'Tomáš Dvořák',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
            description: 'Bratr, parťák a ten nejlepší svědek, jakého si můžu přát.'
        }
    ];

    return (
        <section className="py-24 px-4 bg-white relative">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-primary-600 mb-6"
                    >
                        Náš Příběh
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-[1px] bg-primary-300 mx-auto mb-8"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Všechno to začalo nenápadně v jedné malé kavárně na rohu. Od první společné kávy jsme věděli, že je to něco výjimečného. Po pěti letech plných dobrodružství, smíchu a společných snů jsme se rozhodli náš příběh zpečetit a vkročit do další kapitoly společně.
                    </motion.p>
                </div>

                {/* The Couple */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] rounded-t-full overflow-hidden border-8 border-cream-100 shadow-xl relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
                                alt="Nevěsta a Ženich"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -top-6 -left-6 w-full h-full rounded-t-full border border-primary-200 z-0"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-serif text-gray-800 mb-2">Anna</h3>
                            <p className="text-primary-600 tracking-widest uppercase text-sm mb-4">Nevěsta</p>
                            <p className="text-gray-600 font-light leading-relaxed">
                                "Miluju Petrovo klidnou povahu a to, jak mě vždycky dokáže rozesmát, když to nejvíc potřebuju. Je mým přístavem i nejlepším přítelem."
                            </p>
                        </div>

                        <div className="w-16 h-[1px] bg-gray-300"></div>

                        <div>
                            <h3 className="text-3xl font-serif text-gray-800 mb-2">Petr</h3>
                            <p className="text-primary-600 tracking-widest uppercase text-sm mb-4">Ženich</p>
                            <p className="text-gray-600 font-light leading-relaxed">
                                "Anička je ten nejlaskavější člověk, jakého znám. S ní je každý den barevnější a už se nemůžu dočkat, až s ní strávím zbytek života."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Witnesses */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-serif text-gray-800 mb-12">Naši Svědci</h3>
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {people.map((person, index) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-xl font-serif text-gray-800">{person.name}</h4>
                                <p className="text-primary-600 tracking-widest uppercase text-xs mt-1 mb-3">{person.role}</p>
                                <p className="text-gray-500 font-light max-w-xs">{person.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
