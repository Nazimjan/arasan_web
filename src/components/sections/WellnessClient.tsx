'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { wellnessPrograms, categoryMeta } from '@/data/mock';
import { formatPrice } from '@/lib/utils';

const CATEGORIES = ['all', 'mineral', 'medical', 'physio', 'relaxation'] as const;
type Category = (typeof CATEGORIES)[number];

export default function WellnessClient() {
    const [active, setActive] = useState<Category>('all');

    const filtered = active === 'all'
        ? wellnessPrograms
        : wellnessPrograms.filter(p => p.category === active);

    return (
        <>
            {/* Category Tabs */}
            <section className="bg-noir-900 py-8 border-b border-gold-500/10 sticky top-[72px] z-20">
                <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12">
                    <div className="flex gap-2 justify-center flex-wrap pb-1 scrollbar-none">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`flex-shrink-0 px-5 py-2.5 font-sans text-xs tracking-[0.2em] uppercase transition-all ${active === cat
                                    ? 'bg-gold-500 text-noir-950'
                                    : 'border border-gold-500/30 text-stone-mid hover:border-gold-500/60 hover:text-stone-warm'
                                    }`}
                            >
                                {cat === 'all' ? 'Все процедуры' : categoryMeta[cat].labelRu}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="bg-noir-950 py-16 lg:py-20">
                <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12">
                    <p className="font-sans text-xs text-stone-dark mb-10 tracking-widest uppercase">
                        {filtered.length} процедур{filtered.length === 1 ? 'а' : filtered.length < 5 ? 'ы' : ''}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map(program => (
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
                                            {categoryMeta[program.category]?.labelRu ?? program.category}
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
                                    <p className="mt-1 font-sans text-xs text-gold-500/80 tracking-wide">
                                        {program.subtitle}
                                    </p>
                                    <p className="mt-3 font-sans text-xs text-stone-dark leading-relaxed flex-1">
                                        {program.description.substring(0, 100)}...
                                    </p>

                                    {/* Key indications */}
                                    <ul className="mt-4 space-y-1.5">
                                        {program.indications.slice(0, 3).map(ind => (
                                            <li key={ind} className="flex items-center gap-2">
                                                <CheckCircle size={11} strokeWidth={1.5} className="text-gold-500 flex-shrink-0" />
                                                <span className="font-sans text-[11px] text-stone-mid">{ind}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Price / Duration / CTA */}
                                    <div className="mt-5 pt-4 border-t border-gold-500/10 flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-1.5 text-stone-dark mb-1">
                                                <Clock size={11} strokeWidth={1.5} />
                                                <span className="font-sans text-[11px]">{program.duration}</span>
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
        </>
    );
}
