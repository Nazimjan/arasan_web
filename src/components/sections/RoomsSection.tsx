'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Maximize } from 'lucide-react';
import { rooms } from '@/data/mock';
import { formatPrice } from '@/lib/utils';

export default function RoomsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
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

    const displayRooms = rooms.slice(0, 3);

    return (
        <section ref={sectionRef} className="bg-noir-950 py-24 lg:py-32" aria-labelledby="rooms-heading">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="mb-16 lg:mb-20">
                    <div className="flex items-center gap-4 mb-6 animate-on-scroll">
                        <div className="gold-line" />
                        <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">
                            Размещение
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <h2
                            id="rooms-heading"
                            className="font-serif text-display-md text-stone-warm animate-on-scroll"
                            style={{ transitionDelay: '0.1s' }}
                        >
                            Пространство <br />
                            <em className="text-gold-500 not-italic">вашего отдыха</em>
                        </h2>
                        <Link
                            href="/rooms"
                            className="flex items-center gap-3 font-sans text-xs text-gold-500 hover:gap-5 transition-all group animate-on-scroll"
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <span className="tracking-widest uppercase">Все номера</span>
                            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Rooms grid — horizontal scroll on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {displayRooms.map((room, i) => (
                        <Link
                            key={room.id}
                            href={`/rooms#${room.category}`}
                            className="group flex flex-col card-hover animate-on-scroll"
                            style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={room.imageUrl}
                                    alt={room.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                {/* Category badge */}
                                <div className="absolute top-4 right-4 bg-noir-900/80 border border-gold-500/30 px-3 py-1">
                                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-500">
                                        {room.title}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col p-6 bg-noir-800 border border-gold-500/10 group-hover:border-gold-500/30 transition-colors">
                                <div className="flex items-center gap-6 mb-4">
                                    <div className="flex items-center gap-1.5 text-stone-dark">
                                        <Maximize size={13} strokeWidth={1.5} />
                                        <span className="font-sans text-xs">{room.area} м²</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-stone-dark">
                                        <Users size={13} strokeWidth={1.5} />
                                        <span className="font-sans text-xs">до {room.maxGuests}</span>
                                    </div>
                                </div>

                                <p className="font-sans text-xs text-stone-dark leading-relaxed flex-1">
                                    {room.description}
                                </p>

                                <div className="mt-5 pt-5 border-t border-gold-500/10 flex items-center justify-between">
                                    <div>
                                        <p className="font-sans text-[10px] text-stone-dark uppercase tracking-widest">от</p>
                                        <p className="font-serif text-lg text-gold-500">{formatPrice(room.pricePerNight, room.currency)}</p>
                                        <p className="font-sans text-[10px] text-stone-dark">/ ночь</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gold-500 group-hover:gap-4 transition-all">
                                        <span className="font-sans text-[10px] tracking-widest uppercase">Забронировать</span>
                                        <ArrowRight size={12} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
