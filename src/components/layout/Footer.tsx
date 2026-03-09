import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contacts" className="bg-noir-950 border-t border-gold-500/15">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand */}
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
                            Премиальный санаторий на природных радоновых источниках Жаркента. Здоровье через силу природы.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://instagram.com"
                                aria-label="Instagram"
                                className="text-stone-dark hover:text-gold-500 transition-colors"
                            >
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                            <a
                                href="https://facebook.com"
                                aria-label="Facebook"
                                className="text-stone-dark hover:text-gold-500 transition-colors"
                            >
                                <Facebook size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">
                            Программы
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: '/wellness/radon-therapy', label: 'Радоновые ванны' },
                                { href: '/wellness/spine-rehabilitation', label: 'Реабилитация позвоночника' },
                                { href: '/wellness/cardio-recovery', label: 'Кардиооздоровление' },
                                { href: '/wellness/total-detox', label: 'Детокс и очищение' },
                                { href: '/wellness/anti-stress', label: 'Антистресс' },
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

                    {/* Rooms & Services */}
                    <div>
                        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold-500 mb-6">
                            Проживание
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: '/rooms', label: 'Номера' },
                                { href: '/rooms#standard', label: 'Стандарт' },
                                { href: '/rooms#comfort', label: 'Комфорт' },
                                { href: '/rooms#deluxe', label: 'Делюкс' },
                                { href: '/rooms#suite', label: 'Сюит' },
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
                                    г. Жаркент, ул. Арасан, 1, Алматинская область, Казахстан
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} strokeWidth={1.5} className="text-gold-500 flex-shrink-0" />
                                <a href="tel:+77771234567" className="font-sans text-sm text-stone-dark hover:text-stone-warm transition-colors">
                                    +7 (777) 123-45-67
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} strokeWidth={1.5} className="text-gold-500 flex-shrink-0" />
                                <a href="mailto:info@zharkentarasan.kz" className="font-sans text-sm text-stone-dark hover:text-stone-warm transition-colors">
                                    info@zharkentarasan.kz
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-gold-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-sans text-xs text-stone-dark tracking-wide">
                        © 2026 Жаркент Арасан. Все права защищены.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="font-sans text-xs text-stone-dark hover:text-stone-warm transition-colors tracking-wide">
                            Конфиденциальность
                        </Link>
                        <Link href="/terms" className="font-sans text-xs text-stone-dark hover:text-stone-warm transition-colors tracking-wide">
                            Условия использования
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
