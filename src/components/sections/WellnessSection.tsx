'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { wellnessPrograms } from '@/data/mock';
import { formatPrice } from '@/lib/utils';

const categoryColors: Record<string, string> = {
    mineral: 'mineral-teal',
    medical: 'stone-dark',
    beauty: 'gold-600',
    relaxation: 'stone-mid',
};

const categoryLabels: Record<string, string> = {
    mineral: 'Минеральные',
    medical: 'Медицина',
    beauty: 'Красота',
    relaxation: 'Релаксация',
};

export default function WellnessSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const featured = wellnessPrograms.filter(p => p.featured);

    return (
        <section ref={sectionRef} className="bg-noir-900 py-24 lg:py-32" aria-labelledby="wellness-heading">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

                {/* Section header */}
                <div className="mb-16 lg:mb-20">
                    <div className="flex items-center gap-4 mb-6 animate-on-scroll">
                        <div className="gold-line" />
                        <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">
                            Лечебные программы
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <h2
                            id="wellness-heading"
                            className="font-serif text-display-md text-stone-warm animate-on-scroll"
                            style={{ transitionDelay: '0.1s' }}
                        >
                            Путь к здоровью <br />
                            <em className="text-gold-500 not-italic">начинается здесь</em>
                        </h2>
                        <Link
                            href="/wellness"
                            className="flex items-center gap-3 font-sans text-sm text-gold-500 hover:gap-5 transition-all group animate-on-scroll"
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <span className="tracking-widest uppercase text-xs">Все программы</span>
                            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Featured programs grid — asymmetric layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Large card - first Featured */}
                    {featured[0] && (
                        <Link
                            href={`/wellness/${featured[0].slug}`}
                            className="lg:col-span-7 group relative overflow-hidden h-[500px] lg:h-[600px] card-hover animate-on-scroll"
                            style={{ transitionDelay: '0.15s' }}
                        >
                            <Image
                                src={featured[0].imageUrl}
                                alt={featured[0].title}
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 58vw"
                            />
                            <div className="absolute inset-0 bg-dark-gradient" />

                            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                                <span className="mb-3 inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 bg-noir-900/60 px-3 py-1 w-fit">
                                    {categoryLabels[featured[0].category]}
                                </span>
                                <h3 className="font-serif text-display-md text-stone-warm group-hover:text-gold-300 transition-colors leading-tight">
                                    {featured[0].title}
                                </h3>
                                <p className="mt-3 font-sans text-sm text-stone-mid leading-relaxed max-w-sm">
                                    {featured[0].description.substring(0, 120)}...
                                </p>
                                <div className="mt-6 flex items-center justify-between">
                                    <div>
                                        <p className="font-sans text-xs text-stone-dark">от</p>
                                        <p className="font-serif text-xl text-gold-500">
                                            {formatPrice(featured[0].price, featured[0].currency)}
                                        </p>
                                        <p className="font-sans text-xs text-stone-dark">{featured[0].duration}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gold-500 group-hover:gap-4 transition-all">
                                        <span className="font-sans text-xs tracking-widest uppercase">Подробнее</span>
                                        <ArrowRight size={14} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Right column - 2 smaller cards */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {featured.slice(1, 3).map((program, i) => (
                            <Link
                                key={program.id}
                                href={`/wellness/${program.slug}`}
                                className="group relative overflow-hidden flex-1 h-64 lg:h-auto card-hover animate-on-scroll"
                                style={{ transitionDelay: `${0.25 + i * 0.1}s` }}
                            >
                                <Image
                                    src={program.imageUrl}
                                    alt={program.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 42vw"
                                />
                                <div className="absolute inset-0 bg-dark-gradient" />

                                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                                    <span className="mb-2 inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500">
                                        {categoryLabels[program.category]}
                                    </span>
                                    <h3 className="font-serif text-xl lg:text-2xl text-stone-warm group-hover:text-gold-300 transition-colors">
                                        {program.title}
                                    </h3>
                                    <div className="mt-4 flex items-center justify-between">
                                        <p className="font-sans text-xs text-stone-dark">
                                            от <span className="text-gold-500">{formatPrice(program.price, program.currency)}</span> · {program.duration}
                                        </p>
                                        <ArrowRight size={14} strokeWidth={1.5} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
