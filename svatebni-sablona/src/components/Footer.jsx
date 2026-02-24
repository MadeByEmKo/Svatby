import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-3xl font-serif text-white mb-2">Anna & Petr</h3>
                    <p className="font-light text-stone-400 tracking-widest uppercase text-sm">24. Srpen 2026 | Zámek Sychrov</p>
                </div>

                <div className="text-stone-500 font-light text-sm space-y-2">
                    <p>&copy; {new Date().getFullYear()} Všechna práva vyhrazena.</p>
                    <p>
                        Tento svatební web s láskou vytvořila <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">Svatební Salony s.r.o.</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
