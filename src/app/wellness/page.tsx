import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import WellnessClient from '@/components/sections/WellnessClient';

export const metadata: Metadata = {
    title: 'Лечебные процедуры — Жаркент Арасан',
    description:
        'Радоновые ванны, грязелечение, магнитотерапия, галотерапия, фитобочка, ОРМЕД-тракция и другие процедуры санатория «Жаркент Арасан». Записывайтесь онлайн.',
};

export default function WellnessPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="relative h-72 lg:h-96 flex items-end" aria-label="Заголовок раздела">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80"
                        alt="Лечебные процедуры Жаркент Арасан"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-hero-overlay" />
                </div>
                <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 pb-12 lg:pb-16 w-full">
                    <nav aria-label="Хлебные крошки" className="flex items-center gap-2 mb-4">
                        <Link href="/" className="font-sans text-xs text-stone-dark hover:text-stone-warm transition-colors">
                            Главная
                        </Link>
                        <span className="text-stone-dark text-xs">/</span>
                        <span className="font-sans text-xs text-stone-warm">Лечение</span>
                    </nav>
                    <h1 className="font-serif text-display-md text-stone-warm">
                        Лечебные <em className="text-gold-500 not-italic">процедуры</em>
                    </h1>
                    <p className="mt-3 font-sans text-sm text-stone-mid max-w-xl">
                        12 видов процедур на базе природных радоновых источников Жаркента
                    </p>
                </div>
            </section>

            {/* Info strip */}
            <section className="bg-noir-900 py-10 border-b border-gold-500/10">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div>
                            <p className="font-sans text-xs text-stone-dark uppercase tracking-widest mb-2">Принцип лечения</p>
                            <p className="font-sans text-sm text-stone-mid leading-relaxed max-w-xl">
                                Лечебная база Медицинского Оздоровительного Комплекса «Жаркент-Арасан» основана
                                на природных радоновых источниках. Каждый пациент проходит осмотр врача,
                                после которого составляется индивидуальный план процедур.
                            </p>
                        </div>
                        <div className="flex-shrink-0 flex gap-8">
                            {[
                                { val: '12+', label: 'видов процедур' },
                                { val: '30+', label: 'лет опыта' },
                                { val: '100%', label: 'по назначению врача' },
                            ].map(stat => (
                                <div key={stat.label}>
                                    <p className="font-serif text-3xl text-gold-500">{stat.val}</p>
                                    <p className="font-sans text-[10px] text-stone-dark uppercase tracking-widest mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Client-side filter + grid */}
            <WellnessClient />

            {/* Additional paid services notice */}
            <section className="bg-noir-900 py-12 border-t border-gold-500/10">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <h2 className="font-serif text-2xl text-stone-warm mb-4">Дополнительные платные услуги</h2>
                    <p className="font-sans text-sm text-stone-dark mb-6">
                        Помимо основных программ, доступны следующие процедуры по отдельному назначению:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
                        {[
                            'Различные виды ручного массажа',
                            'Seragem массаж',
                            'Тяньши аппарат',
                            'Трон Кегеля',
                            'Кислородный коктейль',
                            'Иглотерапия',
                            'Фитобочка с пантогематогеном',
                            'Пантогематогенная ванна',
                            'Аппарат МАВИТ (простатит)',
                            'Ректальные грязевые тампоны',
                            'Урологическая микроклизма',
                            'Общий анализ крови и мочи',
                        ].map(service => (
                            <div key={service} className="flex items-center gap-2 py-1.5">
                                <div className="w-1 h-1 bg-gold-500 flex-shrink-0" />
                                <span className="font-sans text-xs text-stone-mid">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-noir-800 py-14 border-t border-gold-500/10">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div>
                        <h2 className="font-serif text-2xl text-stone-warm">Не знаете, какую процедуру выбрать?</h2>
                        <p className="mt-2 font-sans text-sm text-stone-dark">
                            Наш врач подберёт оптимальный курс исходя из ваших показаний — бесплатно.
                        </p>
                    </div>
                    <a
                        href="tel:+77771234567"
                        className="flex-shrink-0 px-8 py-4 border border-gold-500 text-gold-500 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold-500 hover:text-noir-950 transition-all duration-300"
                    >
                        Связаться с врачом
                    </a>
                </div>
            </section>
        </>
    );
}
