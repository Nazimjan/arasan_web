'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import BookingWidget from './BookingWidget';

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay blocked — video will show static poster
            });
        }
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col" aria-label="Главный экран">
            {/* Background image (fallback for no video) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1920&q=80"
                    alt="Природа Жаркента — термальные источники"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-hero-overlay" />
                {/* Subtle noise texture for depth */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Main hero content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center max-w-screen-xl mx-auto px-6 lg:px-12 pt-32 pb-16">

                {/* Eyebrow */}
                <div className="flex items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both', opacity: 0 }}>
                    <div className="gold-line" />
                    <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">
                        Санаторий · Жаркент, Казахстан
                    </p>
                </div>

                {/* Main headline */}
                <h1
                    className="font-serif text-display-xl text-stone-warm leading-none max-w-4xl"
                    style={{ animationDelay: '0.4s' }}
                >
                    <span
                        className="block animate-fade-in"
                        style={{ animationDelay: '0.4s', animationFillMode: 'both', opacity: 0 }}
                    >
                        Исцеление
                    </span>
                    <span
                        className="block gold-shimmer animate-fade-in"
                        style={{ animationDelay: '0.65s', animationFillMode: 'both', opacity: 0 }}
                    >
                        природой.
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    className="mt-8 font-sans text-sm lg:text-base text-stone-mid max-w-xl leading-relaxed animate-fade-in"
                    style={{ animationDelay: '0.9s', animationFillMode: 'both', opacity: 0 }}
                >
                    Опыт премиального оздоровления на природных радоновых источниках Жаркента.
                    Медицина, традиции и современный комфорт — в одном месте.
                </p>

                {/* Stats */}
                <div
                    className="mt-12 flex gap-10 lg:gap-16 animate-fade-in"
                    style={{ animationDelay: '1.1s', animationFillMode: 'both', opacity: 0 }}
                >
                    {[
                        { value: '30+', label: 'Лет опыта' },
                        { value: '15', label: 'Программ лечения' },
                        { value: '200+', label: 'Мест размещения' },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                            <span className="font-serif text-3xl lg:text-4xl text-gold-500">{stat.value}</span>
                            <span className="mt-1 font-sans text-xs tracking-widest uppercase text-stone-dark">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 hidden lg:flex items-center gap-3 text-stone-dark animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'both', opacity: 0 }}>
                    <div className="w-px h-12 bg-gold-500/40 animate-pulse" />
                    <span className="font-sans text-xs tracking-[0.3em] uppercase">Листайте вниз</span>
                </div>
            </div>

            {/* Booking widget — anchored to bottom */}
            <div
                className="relative z-10 w-full animate-fade-in"
                style={{ animationDelay: '1.2s', animationFillMode: 'both', opacity: 0 }}
            >
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12 pb-0">
                    <div className="py-3 px-4 bg-noir-800/60 border-t border-gold-500/20 mb-0">
                        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 text-center">
                            Забронировать пребывание
                        </p>
                    </div>
                </div>
                <BookingWidget />
            </div>
        </section>
    );
}
