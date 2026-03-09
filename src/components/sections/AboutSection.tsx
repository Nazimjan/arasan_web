'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Heart, Leaf, Shield } from 'lucide-react';

const values = [
    { icon: Heart, label: 'Забота', desc: 'Персональный подход к каждому гостю' },
    { icon: Shield, label: 'Качество', desc: 'Лицензированные медицинские процедуры' },
    { icon: Leaf, label: 'Природа', desc: 'Натуральные минеральные источники' },
    { icon: Award, label: 'Опыт', desc: 'Более 30 лет в сфере оздоровления' },
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('in-view');
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        );

        sectionRef.current?.querySelectorAll('.animate-on-scroll')
            .forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="bg-noir-950 py-24 lg:py-36 overflow-hidden"
            aria-labelledby="about-heading"
        >
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Text side */}
                    <div>
                        <div className="flex items-center gap-4 mb-8 animate-on-scroll">
                            <div className="gold-line" />
                            <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">
                                О санатории
                            </span>
                        </div>

                        <h2
                            id="about-heading"
                            className="font-serif text-display-md text-stone-warm animate-on-scroll"
                            style={{ transitionDelay: '0.1s' }}
                        >
                            Три десятилетия <br />
                            <em className="text-gold-500 not-italic">природного лечения</em>
                        </h2>

                        <p
                            className="mt-8 font-sans text-sm text-stone-mid leading-relaxed animate-on-scroll"
                            style={{ transitionDelay: '0.2s' }}
                        >
                            МОК «Жаркент-Арасан» основан на природных радоновых источниках, известных с 1952 года.
                            В 1967 году здесь открыли всесоюзную лечебницу. Сегодня — это современный санаторий
                            с полным медицинским персоналом и лицензированной базой процедур.
                        </p>

                        <p
                            className="mt-4 font-sans text-sm text-stone-mid leading-relaxed animate-on-scroll"
                            style={{ transitionDelay: '0.3s' }}
                        >
                            Методы радонолечения перенесены из практики НИИ курортологии Пятигорска и дополнены
                            исследованиями Массачусетского университета. В 2024 году санаторий получил высшую
                            награду страны — премию Президента РК <strong className="text-gold-500">«Алтын Сапа»</strong>.
                        </p>

                        {/* Values grid */}
                        <div
                            className="mt-12 grid grid-cols-2 gap-6 animate-on-scroll"
                            style={{ transitionDelay: '0.4s' }}
                        >
                            {values.map(({ icon: Icon, label, desc }) => (
                                <div key={label} className="flex gap-4">
                                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold-500/30">
                                        <Icon size={18} strokeWidth={1.5} className="text-gold-500" />
                                    </div>
                                    <div>
                                        <p className="font-sans text-xs text-stone-warm font-medium tracking-wide uppercase mb-1">
                                            {label}
                                        </p>
                                        <p className="font-sans text-xs text-stone-dark leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="mt-12 inline-flex items-center gap-3 px-8 py-4 border border-gold-500 text-gold-500 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold-500 hover:text-noir-950 transition-all duration-300 group animate-on-scroll"
                            style={{ transitionDelay: '0.5s' }}
                        >
                            <span>О санатории</span>
                            <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Image side — overlapping composition */}
                    <div className="relative h-[500px] lg:h-[680px] animate-on-scroll" style={{ transitionDelay: '0.25s' }}>
                        {/* Main image */}
                        <div className="absolute inset-0 lg:-right-12">
                            <Image
                                src="https://images.unsplash.com/photo-1527515545081-5db817172677?w=800&q=80"
                                alt="Вид санатория Жаркент Арасан"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Floating stat card */}
                        <div className="absolute -bottom-8 -left-6 lg:-left-10 z-10 bg-noir-900 border border-gold-500/30 p-6 shadow-2xl">
                            <p className="font-serif text-4xl text-gold-500">3000+</p>
                            <p className="font-sans text-xs text-stone-dark tracking-widest uppercase mt-1">
                                Вылеченных пациентов ежегодно
                            </p>
                        </div>

                        {/* Gold accent line */}
                        <div className="absolute -top-4 left-8 w-1 h-24 bg-gold-500/50" />
                    </div>
                </div>
            </div>
        </section>
    );
}
