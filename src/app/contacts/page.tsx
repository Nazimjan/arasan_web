import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Instagram, Youtube, Globe, Clock, Car, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Контакты — Жаркент Арасан',
    description:
        'Адрес: Панфиловский район, с. Жаркент-Арасан, ул. Ш. Валиханова №1. Телефон: +7 (777) 263-33-43. 320 км от Алматы.',
};

const contacts = [
    {
        icon: MapPin,
        label: 'Адрес',
        lines: [
            'Панфиловский район, г. Жаркент',
            'с. Жаркент-Арасан, ул. Ш. Валиханова №1',
            'Казахстан',
        ],
    },
    {
        icon: Phone,
        label: 'Телефон',
        lines: ['+7 (777) 263-33-43'],
        href: 'tel:+77772633343',
    },
    {
        icon: Globe,
        label: 'Веб-сайт',
        lines: ['zharkentarasan.kz'],
        href: 'https://zharkentarasan.kz',
    },
];

const social = [
    {
        icon: Instagram,
        label: 'Instagram',
        handle: '@zharkentarasan',
        href: 'https://instagram.com/zharkentarasan',
    },
    {
        icon: Youtube,
        label: 'YouTube',
        handle: '@zharkentarasan',
        href: 'https://youtube.com/@zharkentarasan',
    },
];

const howToGet = [
    {
        icon: Car,
        title: 'На автомобиле из Алматы',
        desc: '320 км по трассе А3 (Алматы — Хоргос). Поворот на Жаркент, затем 40 км до Жаркент-Арасан по указателям. Навигатор: «Жаркент Арасан».',
    },
    {
        icon: Car,
        title: 'Из Жаркента',
        desc: '40 км по дороге в сторону ущелья Борохудзир. Следуйте указателям «Арасан». Дорога асфальтированная.',
    },
];

export default function ContactsPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="relative pt-32 pb-16 lg:pb-24 bg-noir-950">
                <div className="absolute inset-0 noise-overlay" />
                <div className="relative max-w-screen-xl mx-auto px-6 lg:px-12">
                    <nav className="flex items-center gap-2 mb-8">
                        <Link href="/" className="font-sans text-xs text-stone-dark hover:text-stone-warm transition-colors">Главная</Link>
                        <span className="text-stone-dark">/</span>
                        <span className="font-sans text-xs text-stone-warm">Контакты</span>
                    </nav>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="gold-line" />
                        <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">Мы здесь</span>
                    </div>
                    <h1 className="font-serif text-display-md text-stone-warm">
                        Свяжитесь <em className="text-gold-500 not-italic">с нами</em>
                    </h1>
                    <p className="mt-5 font-sans text-sm text-stone-mid max-w-xl leading-relaxed">
                        Наши специалисты помогут подобрать оптимальную программу лечения,
                        рассчитать стоимость путёвки и ответят на любые вопросы.
                    </p>
                </div>
            </section>

            {/* Main content */}
            <section className="bg-noir-900 py-16 lg:py-24 border-t border-gold-500/10">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Left — contacts */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="font-serif text-2xl text-stone-warm mb-8">Контактная информация</h2>
                                <div className="space-y-8">
                                    {contacts.map(c => {
                                        const Icon = c.icon;
                                        return (
                                            <div key={c.label} className="flex items-start gap-5">
                                                <div className="w-10 h-10 flex-shrink-0 border border-gold-500/30 flex items-center justify-center">
                                                    <Icon size={16} strokeWidth={1.5} className="text-gold-500" />
                                                </div>
                                                <div>
                                                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone-dark mb-2">{c.label}</p>
                                                    {c.href ? (
                                                        <a href={c.href} className="font-sans text-sm text-stone-warm hover:text-gold-500 transition-colors">
                                                            {c.lines[0]}
                                                        </a>
                                                    ) : (
                                                        c.lines.map(l => (
                                                            <p key={l} className="font-sans text-sm text-stone-warm leading-relaxed">{l}</p>
                                                        ))
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Working hours */}
                            <div className="p-6 border border-gold-500/15 bg-noir-800/50">
                                <div className="flex items-center gap-3 mb-5">
                                    <Clock size={16} strokeWidth={1.5} className="text-gold-500" />
                                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-stone-dark">Режим работы</p>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { day: 'Пн — Пт', time: '08:00 — 20:00' },
                                        { day: 'Суббота', time: '08:00 — 18:00' },
                                        { day: 'Воскресенье', time: '09:00 — 16:00' },
                                    ].map(row => (
                                        <div key={row.day} className="flex items-center justify-between py-2 border-b border-gold-500/10 last:border-0">
                                            <span className="font-sans text-xs text-stone-mid">{row.day}</span>
                                            <span className="font-sans text-xs text-gold-500">{row.time}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 font-sans text-[11px] text-stone-dark">
                                    Санаторий работает круглогодично. Стойка администратора — 24/7.
                                </p>
                            </div>

                            {/* Socials */}
                            <div>
                                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone-dark mb-5">Мы в социальных сетях</p>
                                <div className="flex gap-4">
                                    {social.map(s => {
                                        const Icon = s.icon;
                                        return (
                                            <a
                                                key={s.label}
                                                href={s.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-5 py-3 border border-gold-500/20 hover:border-gold-500/60 transition-colors group"
                                            >
                                                <Icon size={16} strokeWidth={1.5} className="text-gold-500" />
                                                <span className="font-sans text-xs text-stone-mid group-hover:text-stone-warm transition-colors">{s.handle}</span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Right — quick form */}
                        <div>
                            <h2 className="font-serif text-2xl text-stone-warm mb-8">Задать вопрос</h2>
                            <form className="space-y-5" onSubmit={undefined}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block font-sans text-[10px] tracking-[0.25em] uppercase text-stone-dark mb-2">Ваше имя</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Алибек"
                                            className="w-full bg-noir-800 border border-gold-500/20 text-stone-warm placeholder-stone-dark/50 font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold-500/60 transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block font-sans text-[10px] tracking-[0.25em] uppercase text-stone-dark mb-2">Телефон</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="+7 (___) ___-__-__"
                                            className="w-full bg-noir-800 border border-gold-500/20 text-stone-warm placeholder-stone-dark/50 font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold-500/60 transition-colors"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="topic" className="block font-sans text-[10px] tracking-[0.25em] uppercase text-stone-dark mb-2">Тема</label>
                                    <select
                                        id="topic"
                                        className="w-full bg-noir-800 border border-gold-500/20 text-stone-warm font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold-500/60 transition-colors appearance-none"
                                    >
                                        <option value="">Выберите тему...</option>
                                        <option>Стоимость путёвки</option>
                                        <option>Лечебные процедуры</option>
                                        <option>Бронирование номера</option>
                                        <option>Как добраться</option>
                                        <option>Другое</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block font-sans text-[10px] tracking-[0.25em] uppercase text-stone-dark mb-2">Сообщение</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Расскажите подробнее о вашем запросе..."
                                        className="w-full bg-noir-800 border border-gold-500/20 text-stone-warm placeholder-stone-dark/50 font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold-500/60 transition-colors resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gold-500 text-noir-950 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold-300 transition-all duration-300 flex items-center justify-center gap-3 group"
                                >
                                    Отправить сообщение
                                    <ArrowRight size={14} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="font-sans text-[10px] text-stone-dark text-center">
                                    Мы ответим в течение 1 рабочего дня. Или позвоните нам прямо сейчас.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to get there */}
            <section className="bg-noir-950 py-16 border-t border-gold-500/10">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="gold-line" />
                        <h2 className="font-serif text-2xl text-stone-warm">Как добраться</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {howToGet.map(item => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="p-6 border border-gold-500/15 bg-noir-800/40">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Icon size={16} strokeWidth={1.5} className="text-gold-500" />
                                        <h3 className="font-serif text-lg text-stone-warm">{item.title}</h3>
                                    </div>
                                    <p className="font-sans text-sm text-stone-mid leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Map placeholder */}
                    <div className="relative w-full h-64 lg:h-96 bg-noir-800 border border-gold-500/15 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin size={32} strokeWidth={1} className="text-gold-500 mx-auto mb-4" />
                            <p className="font-sans text-sm text-stone-dark mb-4">Жаркент-Арасан на карте</p>
                            <a
                                href="https://maps.google.com/?q=Жаркент+Арасан+санаторий"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-gold-500/40 text-gold-500 font-sans text-xs tracking-widest uppercase hover:border-gold-500 transition-colors"
                            >
                                Открыть в Google Maps
                                <ArrowRight size={12} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick CTA */}
            <section className="bg-noir-900 py-12 border-t border-gold-500/10">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div>
                        <p className="font-serif text-xl text-stone-warm">Готовы к лечению?</p>
                        <p className="mt-1 font-sans text-sm text-stone-dark">Забронируйте номер и начните путь к здоровью</p>
                    </div>
                    <Link
                        href="/rooms"
                        className="flex-shrink-0 px-8 py-4 bg-gold-500 text-noir-950 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold-300 transition-all"
                    >
                        Выбрать номер
                    </Link>
                </div>
            </section>
        </>
    );
}
