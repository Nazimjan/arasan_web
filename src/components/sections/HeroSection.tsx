'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BookingWidget from './BookingWidget';
import Typewriter from '../ui/Typewriter';

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
            <div className="relative z-20 mx-auto w-full max-w-[1280px] px-6 md:px-20 py-24 md:py-32 flex-1 flex flex-col justify-center items-center text-center">
                <div className="max-w-6xl flex flex-col items-center">


                    {/* Main headline */}
                    <h1
                        className="gold-shimmer font-serif text-5xl md:text-8xl lg:text-9xl font-light leading-tight tracking-tight mb-8 md:whitespace-nowrap"
                        style={{ minHeight: '1.2em' }}
                    >
                        <Typewriter
                            text="Исцеление природой."
                            speed={150}
                            delay={800}
                            className="inline"
                        />
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="max-w-2xl text-lg md:text-xl leading-relaxed text-slate-200 font-light animate-fade-in px-4"
                        style={{ animationDelay: '0.6s', animationFillMode: 'both', opacity: 0 }}
                    >
                        Опыт премиального оздоровления на природных радоновых источниках Жаркента. Медицина, традиции и современный комфорт в самом сердце гор.
                    </p>

                    <div className="mt-16 flex flex-wrap gap-10 items-center justify-center animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both', opacity: 0 }}>
                        <Link href="/wellness" className="group flex items-center gap-4 rounded-full border border-primary/30 bg-primary/10 px-10 py-5 text-sm font-bold uppercase tracking-widest text-primary backdrop-blur-sm hover:bg-primary hover:text-noir-950 transition-all shadow-xl">
                            Исследовать услуги
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </Link>
                        <div className="flex flex-col border-l border-primary/20 pl-8 text-left">
                            <span className="text-4xl font-serif font-bold text-white">30+</span>
                            <span className="text-[10px] uppercase tracking-widest text-primary/70 font-bold">Лет опыта</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking widget section */}
            <div className="relative z-30 mx-auto w-full max-w-5xl px-6 pb-20 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both', opacity: 0 }}>
                <BookingWidget />

                {/* Quick Features */}
                <div className="mt-12 flex flex-wrap justify-center gap-16 md:gap-24 opacity-80">
                    <div className="flex items-center gap-3 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 group-hover:text-primary transition-colors"><path d="M22 10v6M2 10v6M6 10h12M6 4v16M18 4v16M10 4v4M14 4v4M10 16v4M14 16v4" /></svg>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-stone-dark group-hover:text-primary transition-colors">Медицинская лицензия</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 group-hover:text-primary transition-colors"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-stone-dark group-hover:text-primary transition-colors">Диетическое питание</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 group-hover:text-primary transition-colors"><path d="M12 20h.01" /><path d="M2 8.82a15 15 0 0 1 20 0" /><path d="M5 12.859a10 10 0 0 1 14 0" /><path d="M8.5 16.429a5 5 0 0 1 7 0" /></svg>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-stone-dark group-hover:text-primary transition-colors">Бесплатный Wi-Fi</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
