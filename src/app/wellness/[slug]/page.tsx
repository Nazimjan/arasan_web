import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, CheckCircle, XCircle, ArrowRight, Phone } from 'lucide-react';
import { wellnessPrograms, categoryMeta } from '@/data/mock';
import { formatPrice } from '@/lib/utils';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return wellnessPrograms.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const program = wellnessPrograms.find(p => p.slug === params.slug);
    if (!program) return {};
    return {
        title: `${program.title} — Жаркент Арасан`,
        description: program.description,
    };
}

export default function WellnessProgramPage({ params }: Props) {
    const program = wellnessPrograms.find(p => p.slug === params.slug);
    if (!program) notFound();

    const related = wellnessPrograms
        .filter(p => p.id !== program.id && p.category === program.category)
        .slice(0, 2);

    return (
        <>
            {/* Hero */}
            <section className="relative h-72 lg:h-[440px] flex items-end">
                <div className="absolute inset-0">
                    <Image
                        src={program.imageUrl}
                        alt={program.title}
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-hero-overlay" />
                </div>
                <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 pb-10 lg:pb-14 w-full">
                    <nav aria-label="Хлебные крошки" className="flex items-center gap-2 mb-5">
                        <Link href="/" className="font-sans text-xs text-stone-dark hover:text-stone-warm transition-colors">Главная</Link>
                        <span className="text-stone-dark">/</span>
                        <Link href="/wellness" className="font-sans text-xs text-stone-dark hover:text-stone-warm transition-colors">Лечение</Link>
                        <span className="text-stone-dark">/</span>
                        <span className="font-sans text-xs text-stone-warm">{program.title}</span>
                    </nav>
                    <div className="flex items-center gap-3 mb-3">
                        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-500 bg-noir-900/70 px-3 py-1">
                            {categoryMeta[program.category]?.labelRu ?? program.category}
                        </span>
                    </div>
                    <h1 className="font-serif text-display-md text-stone-warm">{program.title}</h1>
                    <p className="mt-2 font-sans text-sm text-gold-400">{program.subtitle}</p>
                </div>
            </section>

            {/* Content */}
            <section className="bg-noir-950 py-16 lg:py-24">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                        {/* Main content */}
                        <div className="lg:col-span-2 space-y-12">

                            <Link href="/wellness" className="inline-flex items-center gap-2 text-stone-dark hover:text-gold-500 transition-colors font-sans text-xs tracking-widest uppercase">
                                <ArrowLeft size={14} strokeWidth={1.5} />
                                Все процедуры
                            </Link>

                            {/* About */}
                            <div>
                                <h2 className="font-serif text-2xl text-stone-warm mb-5">О процедуре</h2>
                                <p className="font-sans text-sm text-stone-mid leading-relaxed">{program.description}</p>
                            </div>

                            {/* Indications */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="gold-line" />
                                    <h2 className="font-serif text-xl text-stone-warm">Показания</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {program.indications.map(item => (
                                        <div key={item} className="flex items-start gap-3">
                                            <CheckCircle size={15} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />
                                            <span className="font-sans text-sm text-stone-mid">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contraindications */}
                            <div className="p-8 bg-noir-800 border border-gold-500/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-px bg-stone-dark/50" />
                                    <h2 className="font-serif text-xl text-stone-warm">Противопоказания</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                    {program.contraindications.map(item => (
                                        <div key={item} className="flex items-start gap-3">
                                            <XCircle size={14} strokeWidth={1.5} className="text-stone-dark flex-shrink-0 mt-0.5" />
                                            <span className="font-sans text-xs text-stone-dark">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-6 font-sans text-[11px] text-stone-dark/70 leading-relaxed">
                                    Перед началом курса необходима консультация врача. Точный перечень противопоказаний
                                    определяется индивидуально на первичном осмотре.
                                </p>
                            </div>

                            {/* Related programs */}
                            {related.length > 0 && (
                                <div>
                                    <h2 className="font-serif text-2xl text-stone-warm mb-6">Похожие процедуры</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {related.map(r => (
                                            <Link
                                                key={r.id}
                                                href={`/wellness/${r.slug}`}
                                                className="group flex flex-col bg-noir-800 border border-gold-500/10 hover:border-gold-500/30 transition-colors"
                                            >
                                                <div className="relative h-36 overflow-hidden">
                                                    <Image
                                                        src={r.imageUrl}
                                                        alt={r.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                        sizes="(max-width: 768px) 100vw, 25vw"
                                                    />
                                                </div>
                                                <div className="p-5">
                                                    <h3 className="font-serif text-lg text-stone-warm group-hover:text-gold-300 transition-colors">{r.title}</h3>
                                                    <p className="mt-1 font-sans text-xs text-stone-dark">{r.duration}</p>
                                                    <div className="mt-3 flex items-center justify-between">
                                                        <p className="font-sans text-xs text-gold-500">{formatPrice(r.price, r.currency)}</p>
                                                        <ArrowRight size={14} strokeWidth={1.5} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Booking sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-28">
                                <div className="bg-noir-800 border border-gold-500/20 p-8">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <p className="font-sans text-[10px] text-stone-dark uppercase tracking-widest">от</p>
                                        <p className="font-serif text-3xl text-gold-500">{formatPrice(program.price, program.currency)}</p>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-stone-dark mb-8">
                                        <Clock size={13} strokeWidth={1.5} />
                                        <span className="font-sans text-xs">{program.duration}</span>
                                    </div>

                                    <div className="space-y-3">
                                        <Link
                                            href="/rooms"
                                            className="flex items-center justify-center gap-2 w-full py-4 bg-gold-500 text-noir-950 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold-300 transition-all"
                                        >
                                            Забронировать курс
                                        </Link>
                                        <a
                                            href="tel:+77771234567"
                                            className="flex items-center justify-center gap-2 w-full py-4 border border-gold-500/40 text-gold-500 font-sans text-xs tracking-[0.15em] uppercase hover:border-gold-500 transition-all"
                                        >
                                            <Phone size={14} strokeWidth={1.5} />
                                            Позвонить врачу
                                        </a>
                                    </div>

                                    <p className="mt-5 font-sans text-[10px] text-stone-dark text-center leading-relaxed">
                                        Стоимость указана ориентировочно. Точная цена определяется после консультации и зависит от типа номера и срока лечения.
                                    </p>
                                </div>

                                {/* Trust badge */}
                                <div className="mt-4 p-5 border border-gold-500/10 bg-noir-900/50">
                                    <CheckCircle size={18} strokeWidth={1.5} className="text-gold-500 mb-3" />
                                    <p className="font-sans text-[11px] text-stone-dark leading-relaxed">
                                        Все процедуры проводятся по назначению врача и под медицинским контролем. Санаторий имеет все необходимые лицензии.
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
