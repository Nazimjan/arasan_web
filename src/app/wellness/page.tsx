import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { wellnessPrograms } from '@/data/mock';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Лечебные программы — Жаркент Арасан',
    description:
        'Широкий выбор оздоровительных и лечебных программ: радоновые ванны, реабилитация, детокс, антистресс и косметология. Записывайтесь онлайн.',
};

const categoryLabels: Record<string, string> = {
    mineral: 'Минеральные',
    medical: 'Медицина',
    beauty: 'Красота',
    relaxation: 'Релаксация',
};

export default function WellnessPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="relative h-72 lg:h-96 flex items-end" aria-label="Заголовок раздела">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80"
                        alt="Лечебные программы Жаркент Арасан"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-hero-overlay" />
                </div>
                <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 pb-12 lg:pb-16 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <Link href="/" className="font-sans text-xs text-stone-dark hover:text-stone-warm transition-colors">
                            Главная
                        </Link>
                        <span className="text-stone-dark text-xs">/</span>
                        <span className="font-sans text-xs text-stone-warm">Лечебные программы</span>
                    </div>
                    <h1 className="font-serif text-display-md text-stone-warm">
                        Лечебные <em className="text-gold-500 not-italic">программы</em>
                    </h1>
                </div>
            </section>

            {/* Intro blurb */}
            <section className="bg-noir-900 py-16">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl">
                        <p className="font-sans text-sm text-stone-mid leading-relaxed">
                            Санаторий «Жаркент Арасан» предлагает комплексные оздоровительные программы,
                            разработанные нашими врачами с учётом природных ресурсов региона — прежде всего
                            уникальных радоновых источников. Каждая программа включает врачебную консультацию,
                            индивидуальный план лечения и медицинский контроль.
                        </p>
                    </div>
                </div>
            </section>

            {/* All programs */}
            <section className="bg-noir-950 py-16 lg:py-24" aria-labelledby="programs-list-heading">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <h2 id="programs-list-heading" className="sr-only">Список программ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wellnessPrograms.map(program => (
                            <Link
                                key={program.id}
                                href={`/wellness/${program.slug}`}
                                className="group flex flex-col bg-noir-800 border border-gold-500/10 hover:border-gold-500/35 transition-colors card-hover"
                            >
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={program.imageUrl}
                                        alt={program.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-noir-900/80 border border-gold-500/30 px-3 py-1 font-sans text-[10px] tracking-[0.2em] uppercase text-gold-500">
                                            {categoryLabels[program.category]}
                                        </span>
                                    </div>
                                    {program.featured && (
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-gold-500 text-noir-950 px-2 py-0.5 font-sans text-[9px] tracking-widest uppercase">
                                                Популярно
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col p-6">
                                    <h3 className="font-serif text-xl text-stone-warm group-hover:text-gold-300 transition-colors">
                                        {program.title}
                                    </h3>
                                    <p className="mt-2 font-sans text-xs text-gold-500/80 tracking-wide">
                                        {program.subtitle}
                                    </p>
                                    <p className="mt-4 font-sans text-xs text-stone-dark leading-relaxed flex-1">
                                        {program.description.substring(0, 130)}...
                                    </p>

                                    {/* Highlights */}
                                    <ul className="mt-5 space-y-2">
                                        {program.highlights.slice(0, 3).map(h => (
                                            <li key={h} className="flex items-center gap-2">
                                                <CheckCircle size={12} strokeWidth={1.5} className="text-gold-500 flex-shrink-0" />
                                                <span className="font-sans text-xs text-stone-mid">{h}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Price / Duration / CTA */}
                                    <div className="mt-6 pt-5 border-t border-gold-500/10 flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-1.5 text-stone-dark mb-1">
                                                <Clock size={12} strokeWidth={1.5} />
                                                <span className="font-sans text-xs">{program.duration}</span>
                                            </div>
                                            <p className="font-serif text-lg text-gold-500">
                                                {formatPrice(program.price, program.currency)}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-gold-500 group-hover:gap-4 transition-all">
                                            <span className="font-sans text-[10px] tracking-widest uppercase">Подробнее</span>
                                            <ArrowRight size={12} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-noir-900 py-16 border-t border-gold-500/10">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div>
                        <h2 className="font-serif text-2xl text-stone-warm">Не знаете, какую программу выбрать?</h2>
                        <p className="mt-2 font-sans text-sm text-stone-dark">Наши врачи помогут подобрать программу под ваши задачи — бесплатно.</p>
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
