import Link from 'next/link';
import { MapPin, Phone, Instagram, Youtube, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contacts" className="bg-noir-950 border-t border-gold-500/15">
            <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand + socials */}
                    <div className="lg:col-span-1">
                        <div className="flex flex-col leading-none mb-6">
                            <span className="font-serif text-2xl text-gold-500 tracking-widest uppercase">
                                Жаркент
                            </span>
                            <span className="font-sans text-[10px] tracking-[0.3em] text-stone-dark uppercase mt-1">
                                Арасан · Санаторий
                            </span>
                        </div>
                        <p className="font-sans text-sm text-stone-dark leading-relaxed">
                            Санаторий на природных радоновых источниках Жаркента. Лечение с 1952 года.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://instagram.com/zharkentarasan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram @zharkentarasan"
                                className="text-stone-dark hover:text-gold-500 transition-colors"
                            >
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                            <a
                                href="https://youtube.com/@zharkentarasan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube @zharkentarasan"
                                className="text-stone-dark hover:text-gold-500 transition-colors"
                            >
                                <Youtube size={18} strokeWidth={1.5} />
                            </a>
                            <a
                                href="https://zharkentarasan.kz"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Официальный сайт"
                                className="text-stone-dark hover:text-gold-500 transition-colors"
                            >
                                <Globe size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* Procedures */}
                    <div>
                        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">
                            Лечение
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: '/wellness/radon-baths', label: 'Радоновые ванны' },
                                { href: '/wellness/mud-therapy', label: 'Грязелечение' },
                                { href: '/wellness/galotherapy', label: 'Соляная пещера' },
                                { href: '/wellness/ormed-traction', label: 'ОРМЕД-тракция' },
                                { href: '/wellness/kegel-throne', label: 'Трон Кегеля' },
                                { href: '/wellness', label: 'Все процедуры →' },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="font-sans text-sm text-stone-dark hover:text-stone-warm transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Rooms & Pages */}
                    <div>
                        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">
                            Санаторий
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: '/rooms', label: 'Номера' },
                                { href: '/about', label: 'О санатории' },
                                { href: '/contacts', label: 'Контакты' },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="font-sans text-sm text-stone-dark hover:text-stone-warm transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">
                            Контакты
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} strokeWidth={1.5} className="text-gold-500 mt-0.5 flex-shrink-0" />
                                <span className="font-sans text-sm text-stone-dark leading-relaxed">
                                    Панфиловский р-н, с. Жаркент-Арасан,<br />
                                    ул. Ш. Валиханова №1
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} strokeWidth={1.5} className="text-gold-500 flex-shrink-0" />
                                <a href="tel:+77772633343" className="font-sans text-sm text-stone-dark hover:text-stone-warm transition-colors">
                                    +7 (777) 263-33-43
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Instagram size={16} strokeWidth={1.5} className="text-gold-500 flex-shrink-0" />
                                <a
                                    href="https://instagram.com/zharkentarasan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-sans text-sm text-stone-dark hover:text-stone-warm transition-colors"
                                >
                                    @zharkentarasan
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Youtube size={16} strokeWidth={1.5} className="text-gold-500 flex-shrink-0" />
                                <a
                                    href="https://youtube.com/@zharkentarasan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-sans text-sm text-stone-dark hover:text-stone-warm transition-colors"
                                >
                                    @zharkentarasan
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-gold-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-sans text-xs text-stone-dark tracking-wide">
                        © 2026 МОК «Жаркент-Арасан». Все права защищены.
                    </p>
                    <a
                        href="https://zharkentarasan.kz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs text-stone-dark hover:text-gold-500 transition-colors tracking-wide"
                    >
                        zharkentarasan.kz
                    </a>
                </div>
            </div>
        </footer>
    );
}
