import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import WellnessClient from '@/components/sections/WellnessClient';
import WellnessHero from '@/components/sections/WellnessHero';

export const metadata: Metadata = {
    title: 'Лечебные процедуры — Жаркент Арасан',
    description:
        'Радоновые ванны, грязелечение, магнитотерапия, галотерапия, фитобочка, ОРМЕД-тракция и другие процедуры санатория «Жаркент Арасан». Записывайтесь онлайн.',
};

export default function WellnessPage() {
    return (
        <>
            <WellnessHero />

            {/* Info strip */}
            <section className="bg-noir-900 py-10 border-b border-gold-500/10">
                <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12">
                    <div className="flex flex-col items-center justify-center gap-10">
                        <div className="max-w-3xl text-center">
                            <p className="font-sans text-xs text-stone-dark uppercase tracking-widest mb-3">Принцип лечения</p>
                            <p className="font-sans text-base text-stone-mid leading-relaxed">
                                Лечебная база Медицинского Оздоровительного Комплекса «Жаркент-Арасан» основана
                                на природных радоновых источниках. Каждый пациент проходит осмотр врача,
                                после которого составляется индивидуальный план процедур.
                            </p>
                        </div>
                        <div className="flex gap-8 sm:gap-16 justify-center w-full">
                            {[
                                { val: '12+', label: 'видов процедур' },
                                { val: '30+', label: 'лет опыта' },
                                { val: '100%', label: 'по назначению врача' },
                            ].map(stat => (
                                <div key={stat.label} className="text-center">
                                    <p className="font-serif text-3xl md:text-4xl text-gold-500">{stat.val}</p>
                                    <p className="font-sans text-[10px] text-stone-dark uppercase tracking-widest mt-2">{stat.label}</p>
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
                <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="hidden sm:block w-12 h-px bg-gold-500/30" />
                            <h2 className="font-serif text-2xl text-stone-warm">Дополнительные платные услуги</h2>
                            <div className="hidden sm:block w-12 h-px bg-gold-500/30" />
                        </div>
                        <p className="font-sans text-sm text-stone-dark">
                            Помимо основных программ, доступны следующие процедуры по отдельному назначению:
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
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
                <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12 flex flex-col md:flex-row gap-6 items-center justify-between">
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
