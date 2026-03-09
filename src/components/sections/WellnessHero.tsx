'use client';

import Image from 'next/image';
import Link from 'next/link';
import Typewriter from '../ui/Typewriter';

export default function WellnessHero() {
    return (
        <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden" aria-label="Заголовок раздела">
            <div className="absolute inset-0">
                <Image
                    src="/wellness-hero.png"
                    alt="Лечебные процедуры Жаркент Арасан"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-hero-overlay opacity-80" />
            </div>

            <div className="relative z-10 w-full max-w-[1280px] m-auto px-6 lg:px-12 py-24 flex flex-col items-center text-center">
                <nav aria-label="Хлебные крошки" className="flex items-center gap-3 mb-8 justify-center animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both', opacity: 0 }}>
                    <Link href="/" className="font-sans text-[10px] uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                        Главная
                    </Link>
                    <span className="text-primary/30 text-[10px]">/</span>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-primary">Лечение</span>
                </nav>

                <h1
                    className="font-serif text-5xl md:text-8xl font-light leading-tight tracking-tight text-white mb-8"
                    style={{ minHeight: '1.2em' }}
                >
                    <Typewriter
                        text="Лечебные процедуры"
                        speed={150}
                        delay={600}
                        className="gold-shimmer"
                    />
                </h1>

                <p
                    className="font-sans text-base md:text-lg text-slate-300 max-w-2xl text-center leading-relaxed animate-fade-in"
                    style={{ animationDelay: '2.5s', animationFillMode: 'both', opacity: 0 }}
                >
                    12 видов процедур на базе природных радоновых источников Жаркента. <br className="hidden md:block" />
                    Восстановление здоровья в союзе с природой.
                </p>
            </div>
        </section>
    );
}
