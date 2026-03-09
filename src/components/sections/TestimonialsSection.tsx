'use client';

import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/mock';

export default function TestimonialsSection() {
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
        <section ref={sectionRef} className="bg-noir-900 py-24 lg:py-32" aria-labelledby="testimonials-heading">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-6 animate-on-scroll">
                        <div className="gold-line" />
                        <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">
                            Отзывы гостей
                        </span>
                    </div>
                    <h2
                        id="testimonials-heading"
                        className="font-serif text-display-md text-stone-warm animate-on-scroll"
                        style={{ transitionDelay: '0.1s' }}
                    >
                        Истории <em className="text-gold-500 not-italic">исцеления</em>
                    </h2>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <article
                            key={t.id}
                            className="p-8 border border-gold-500/15 bg-noir-800/50 hover:border-gold-500/35 transition-colors animate-on-scroll"
                            style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
                        >
                            {/* Quote icon */}
                            <Quote size={28} strokeWidth={1} className="text-gold-500/40 mb-6" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-5">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <Star key={j} size={12} className="fill-gold-500 text-gold-500" />
                                ))}
                            </div>

                            <blockquote className="font-sans text-sm text-stone-mid leading-relaxed mb-6">
                                &quot;{t.text}&quot;
                            </blockquote>

                            <div className="pt-5 border-t border-gold-500/10">
                                <p className="font-sans text-sm text-stone-warm">{t.name}</p>
                                <p className="font-sans text-xs text-stone-dark mt-1">{t.city} · {t.date}</p>
                                <p className="font-sans text-xs text-gold-500 mt-1 tracking-wide">{t.program}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
