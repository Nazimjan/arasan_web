'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/wellness', label: 'Лечение' },
    { href: '/rooms', label: 'Проживание' },
    { href: '/about', label: 'О санатории' },
    { href: '/contacts', label: 'Контакты' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-noir-900/95 border-b border-gold-500/20' : 'bg-transparent'
                    }`}
                style={{ backdropFilter: isScrolled ? 'blur(12px)' : 'none' }}
            >
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20 lg:h-24">
                        {/* Logo */}
                        <Link href="/" className="flex flex-col leading-none group">
                            <span className="font-serif text-xl lg:text-2xl text-gold-500 tracking-widest uppercase group-hover:text-gold-300 transition-colors duration-300">
                                Жаркент
                            </span>
                            <span className="font-sans text-[10px] tracking-[0.3em] text-stone-dark uppercase mt-0.5">
                                Арасан · Санаторий
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-sans text-sm tracking-widest uppercase text-stone-mid hover:text-gold-500 transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA + Burger */}
                        <div className="flex items-center gap-6">
                            <a
                                href="tel:+77772633343"
                                className="hidden lg:flex items-center gap-2 text-sm font-sans text-stone-warm/80 hover:text-gold-500 transition-colors"
                            >
                                <Phone size={14} strokeWidth={1.5} />
                                <span className="tracking-wider">+7 (777) 263-33-43</span>
                            </a>

                            <Link
                                href="/booking"
                                className="hidden lg:block px-6 py-2.5 border border-gold-500 text-gold-500 text-xs tracking-[0.2em] uppercase font-sans hover:bg-gold-500 hover:text-noir-950 transition-all duration-300"
                            >
                                Забронировать
                            </Link>

                            {/* Mobile burger */}
                            <button
                                id="mobile-menu-toggle"
                                aria-label="Открыть меню"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden text-stone-warm hover:text-gold-500 transition-colors"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile fullscreen menu */}
            <div
                className={`fixed inset-0 z-40 bg-noir-950 flex flex-col justify-center items-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="font-serif text-4xl text-stone-warm hover:text-gold-500 transition-colors duration-300"
                            style={{ transitionDelay: isMenuOpen ? `${i * 60}ms` : '0ms' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="mt-16 flex flex-col items-center gap-4">
                    <a href="tel:+77772633343" className="text-gold-500 font-sans text-lg tracking-wider">
                        +7 (777) 263-33-43
                    </a>
                    <Link
                        href="/booking"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-4 px-10 py-4 border border-gold-500 text-gold-500 text-sm tracking-[0.2em] uppercase font-sans hover:bg-gold-500 hover:text-noir-950 transition-all duration-300"
                    >
                        Забронировать
                    </Link>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-12 text-center">
                    <span className="font-sans text-xs tracking-[0.4em] text-stone-dark uppercase">
                        Жаркент, Казахстан
                    </span>
                </div>
            </div>
        </>
    );
}
