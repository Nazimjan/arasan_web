'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';

export default function CtaSection() {
    return (
        <section className="relative py-32 lg:py-40 overflow-hidden" aria-labelledby="cta-heading">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
                    alt="Приглашение в санаторий Жаркент Арасан"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-noir-950/80" />
                {/* Gold horizontal accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-500/30" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-500/30" />
            </div>

            <div className="relative z-10 w-full max-w-[1280px] m-auto px-6 lg:px-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="gold-line" />
                    <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">
                        Начните сегодня
                    </span>
                    <div className="gold-line" />
                </div>

                <h2
                    id="cta-heading"
                    className="font-serif text-display-lg text-stone-warm m-auto max-w-3xl leading-tight"
                >
                    Готовы начать <br />
                    <em className="gold-shimmer not-italic">путь к здоровью?</em>
                </h2>

                <p className="mt-8 font-sans text-sm text-stone-mid max-w-xl m-auto leading-relaxed">
                    Свяжитесь с нашими специалистами, чтобы подобрать программу, которая подходит именно вам.
                    Первая консультация — бесплатно.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/wellness"
                        className="px-10 py-4 bg-gold-500 text-noir-950 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold-300 transition-all duration-300 flex items-center gap-3 group"
                    >
                        <span>Выбрать программу</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="tel:+77771234567"
                        className="px-10 py-4 border border-gold-500/50 text-stone-warm font-sans text-xs tracking-[0.2em] uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-300 flex items-center gap-3"
                    >
                        <Phone size={14} strokeWidth={1.5} />
                        <span>+7 (777) 123-45-67</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
