import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Maximize, Users, ArrowRight } from 'lucide-react';
import { rooms } from '@/data/mock';
import { formatPrice } from '@/lib/utils';
import BookingWidget from '@/components/sections/BookingWidget';

export const metadata: Metadata = {
    title: 'Номера и размещение — Жаркент Арасан',
    description:
        'Комфортабельные номера санатория «Жаркент Арасан»: Стандарт, Комфорт, Делюкс и Сюит. Проживание включает питание и доступ к SPA-зоне.',
};

export default function RoomsPage() {
    return (
        <>
            {/* Booking widget at top */}
            <section className="pt-24 bg-noir-950">
                <div className="py-3 px-4 bg-noir-800/80 border-b border-gold-500/20">
                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 text-center">
                        Забронировать номер
                    </p>
                </div>
                <BookingWidget />
            </section>

            {/* Hero */}
            <section className="relative h-64 lg:h-80 flex items-end bg-noir-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80"
                        alt="Номера санатория Жаркент Арасан"
                        fill
                        className="object-cover object-center opacity-40"
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 pb-12 lg:pb-14 w-full">
                    <nav className="flex items-center gap-2 mb-4">
                        <Link href="/" className="font-sans text-xs text-stone-dark hover:text-stone-warm">Главная</Link>
                        <span className="text-stone-dark">/</span>
                        <span className="font-sans text-xs text-stone-warm">Проживание</span>
                    </nav>
                    <h1 className="font-serif text-display-md text-stone-warm">
                        Номера <em className="text-gold-500 not-italic">&amp; размещение</em>
                    </h1>
                </div>
            </section>

            {/* Rooms list */}
            <section className="bg-noir-950 py-16 lg:py-24">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12 space-y-12">
                    {rooms.map((room, i) => (
                        <article
                            key={room.id}
                            id={room.category}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gold-500/15 hover:border-gold-500/30 transition-colors overflow-hidden ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image */}
                            <div className={`relative h-72 lg:h-auto ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={room.imageUrl}
                                    alt={`Номер категории ${room.title}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute top-4 left-4 bg-noir-900/90 border border-gold-500/30 px-4 py-2">
                                    <span className="font-serif text-lg text-gold-500">{room.title}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`p-8 lg:p-10 bg-noir-800 flex flex-col ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                <div className="flex items-center gap-6 mb-5">
                                    <div className="flex items-center gap-2 text-stone-dark">
                                        <Maximize size={14} strokeWidth={1.5} />
                                        <span className="font-sans text-xs">{room.area} м²</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-stone-dark">
                                        <Users size={14} strokeWidth={1.5} />
                                        <span className="font-sans text-xs">до {room.maxGuests} гостей</span>
                                    </div>
                                </div>

                                <p className="font-sans text-sm text-stone-mid leading-relaxed">{room.description}</p>

                                <div className="mt-6">
                                    <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-500 mb-4">Удобства</h3>
                                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                                        {room.amenities.map(amenity => (
                                            <div key={amenity} className="flex items-center gap-2">
                                                <CheckCircle size={12} strokeWidth={1.5} className="text-gold-500 flex-shrink-0" />
                                                <span className="font-sans text-xs text-stone-mid">{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 flex items-center justify-between">
                                    <div>
                                        <p className="font-sans text-[10px] text-stone-dark uppercase tracking-widest">от</p>
                                        <p className="font-serif text-2xl text-gold-500">{formatPrice(room.pricePerNight, room.currency)}</p>
                                        <p className="font-sans text-[10px] text-stone-dark">/ ночь с питанием</p>
                                    </div>
                                    <Link
                                        href="/booking"
                                        className="flex items-center gap-3 px-6 py-3 border border-gold-500 text-gold-500 font-sans text-xs tracking-widest uppercase hover:bg-gold-500 hover:text-noir-950 transition-all group"
                                    >
                                        <span>Забронировать</span>
                                        <ArrowRight size={12} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
