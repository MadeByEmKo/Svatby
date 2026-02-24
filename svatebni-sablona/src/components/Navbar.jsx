import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: '#home', label: 'Domů' },
        { href: '#story', label: 'Náš příběh' },
        { href: '#info', label: 'Informace' },
        { href: '#gallery', label: 'Galerie' },
        { href: '#rsvp', label: 'RSVP' },
        { href: '#gifts', label: 'Dary' },
        { href: '#messages', label: 'Vzkazy' },
        { href: '#faq', label: 'FAQ' },
    ];

    const scrollTo = (id) => {
        setIsOpen(false);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full bg-cream-50/90 backdrop-blur-md z-50 transition-all duration-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('#home')}>
                        <span className="font-serif text-2xl tracking-wider text-primary-600">A & P</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="text-gray-600 hover:text-primary-500 transition-colors px-3 py-2 text-sm uppercase tracking-widest font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-cream-50 absolute top-16 left-0 w-full shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors uppercase tracking-widest"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
