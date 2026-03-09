'use client';

import Image from 'next/image';
import Link from 'next/link';
import Typewriter from './Typewriter';

interface Breadcrumb {
    label: string;
    href?: string;
}

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    breadcrumb: Breadcrumb[];
    shimmerWord?: string;
}

export default function PageHero({
    title,
    subtitle,
    backgroundImage,
    breadcrumb,
    shimmerWord
}: PageHeroProps) {
    // If shimmerWord is provided, we split the title to apply the effect
    const renderTitle = () => {
        if (!shimmerWord || !title.includes(shimmerWord)) {
            return (
                <Typewriter
                    text={title}
                    speed={150}
                    delay={600}
                    className="gold-shimmer"
                />
            );
        }

        const parts = title.split(shimmerWord);
        return (
            <>
                <Typewriter
                    text={parts[0]}
                    speed={150}
                    delay={600}
                />
                <Typewriter
                    text={shimmerWord}
                    speed={150}
                    delay={600 + (parts[0].length * 150)}
                    className="gold-shimmer"
                />
                {parts[1] && (
                    <Typewriter
                        text={parts[1]}
                        speed={150}
                        delay={600 + (parts[0].length + shimmerWord.length) * 150}
                    />
                )}
            </>
        );
    };

    return (
        <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden" aria-label="Заголовок раздела">
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover object-center scale-105"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-hero-overlay opacity-80" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] m-auto px-6 lg:px-12 py-24 flex flex-col items-center text-center">
                <nav aria-label="Хлебные крошки" className="flex items-center gap-3 mb-8 justify-center animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both', opacity: 0 }}>
                    {breadcrumb.map((item, index) => (
                        <div key={item.label} className="flex items-center gap-3">
                            {item.href ? (
                                <Link href={item.href} className="font-sans text-[10px] uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="font-sans text-[10px] uppercase tracking-widest text-primary">{item.label}</span>
                            )}
                            {index < breadcrumb.length - 1 && (
                                <span className="text-primary/30 text-[10px]">/</span>
                            )}
                        </div>
                    ))}
                </nav>

                <h1
                    className="font-serif text-5xl md:text-8xl font-light leading-tight tracking-tight text-white mb-8"
                    style={{ minHeight: '1.2em' }}
                >
                    {renderTitle()}
                </h1>

                {subtitle && (
                    <p
                        className="font-sans text-base md:text-lg text-slate-300 max-w-4xl text-center leading-relaxed animate-fade-in"
                        style={{ animationDelay: '2.5s', animationFillMode: 'both', opacity: 0 }}
                    >
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
