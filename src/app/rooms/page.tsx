import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Users, ArrowRight, Wifi, Coffee, Car, Utensils, Dumbbell, BookOpen, Music2 } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { rooms, standardAmenities, buildingAmenities } from '@/data/mock';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Проживание — Жаркент Арасан',
    description:
        'Одноместный, двухместный, трёхместный стандарт, Полулюкс, Люкс и ВИП-Вилла с личными радоновыми ваннами. Санаторий «Жаркент-Арасан».',
};

const infrastructure = [
    { icon: Utensils, label: 'Кафе и летнее кафе' },
    { icon: Coffee, label: 'Фито-бар' },
    { icon: Dumbbell, label: 'Тренажёрный зал' },
    { icon: Car, label: 'Платная автостоянка' },
    { icon: BookOpen, label: 'Открытая библиотека' },
    { icon: Wifi, label: 'Бесплатный Wi-Fi' },
];

const leisure = [
    'Тренажёрный зал',
    'Актовый зал',
    'Спортивные площадки',
    'Детская игровая площадка',
    'Дискотека',
    'Три парковых зоны',
    'Бильярдная',
    'Мини-маркет',
];

const games = [
    'Шахматы', 'Шашки', 'Нарды', 'Тогызкумалак',
    'Настольный теннис', 'Армрестлинг', 'Волейбол',
];

const events = [
    'Каждый вторник — презентация радонотерапии с врачом',
    'Вечер поэзии (еженедельно)',
    '«Ало, мы ищем таланты!» (еженедельно)',
    'Тематические вечера для отдыхающих',
];

export default function RoomsPage() {
    return (
        <>
            <PageHero
                title="Номера & размещение"
                subtitle="6 категорий номеров — от стандарта до ВИП-виллы с личными радоновыми ваннами."
                backgroundImage="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80"
                shimmerWord="размещение"
                breadcrumb={[
                    { label: 'Главная', href: '/' },
                    { label: 'Проживание' }
                ]}
            />

            {/* Standard amenities banner */}
            <section className="bg-noir-800 py-8 border-y border-gold-500/10">
                <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12">
                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-5">В каждом номере</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {standardAmenities.map(a => (
                            <div key={a} className="flex items-center gap-2">
                                <CheckCircle size={13} strokeWidth={1.5} className="text-gold-500 flex-shrink-0" />
                                <span className="font-sans text-xs text-stone-mid">{a}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 pt-5 border-t border-gold-500/10">
                        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone-dark mb-4">В каждом корпусе</p>
                        <div className="flex flex-wrap gap-6">
                            {buildingAmenities.map(a => (
                                <div key={a} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-gold-500" />
                                    <span className="font-sans text-xs text-stone-dark">{a}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Rooms list */}
            <section className="bg-noir-950 py-16 lg:py-24">
                <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12 space-y-10">
                    {rooms.map((room, i) => (
                        <article
                            key={room.id}
                            id={room.slug}
                            className="grid grid-cols-1 lg:grid-cols-2 border border-gold-500/15 hover:border-gold-500/30 transition-colors overflow-hidden"
                        >
                            {/* Image */}
                            <div className={`relative h-64 lg:h-auto min-h-[280px] ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={room.imageUrl}
                                    alt={`Номер ${room.title} — Жаркент Арасан`}
                                    fill className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {room.id === 'r6' && (
                                    <div className="absolute top-4 left-4 bg-gold-500 px-4 py-1.5">
                                        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-noir-950 font-medium">Эксклюзив</span>
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-noir-950/60 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className={`p-8 lg:p-10 bg-noir-800 flex flex-col ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Users size={13} strokeWidth={1.5} className="text-stone-dark" />
                                    <span className="font-sans text-xs text-stone-dark">до {room.maxGuests} {room.maxGuests === 1 ? 'гостя' : 'гостей'}</span>
                                </div>

                                <h2 className="font-serif text-2xl lg:text-3xl text-stone-warm">{room.title}</h2>
                                <p className="font-sans text-xs text-gold-500 mt-1 mb-5">{room.subtitle}</p>
                                <p className="font-sans text-sm text-stone-mid leading-relaxed">{room.description}</p>

                                <div className="mt-6">
                                    <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone-dark mb-4">Удобства</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                                        {room.amenities.slice(0, room.id === 'r6' ? 10 : room.amenities.length).map(amenity => (
                                            <div key={amenity} className="flex items-start gap-2">
                                                <CheckCircle size={12} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />
                                                <span className="font-sans text-xs text-stone-mid">{amenity}</span>
                                            </div>
                                        ))}
                                        {room.id === 'r6' && room.amenities.length > 10 && (
                                            <p className="font-sans text-xs text-stone-dark col-span-2">
                                                + ещё {room.amenities.length - 10} удобств...
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 flex items-center justify-between">
                                    <div>
                                        <p className="font-sans text-[10px] text-stone-dark uppercase tracking-widest">от</p>
                                        <p className="font-serif text-2xl text-gold-500">{formatPrice(room.pricePerNight, room.currency)}</p>
                                        <p className="font-sans text-[10px] text-stone-dark">/ сутки с питанием</p>
                                    </div>
                                    <a
                                        href="tel:+77772633343"
                                        className="flex items-center gap-3 px-6 py-3 border border-gold-500 text-gold-500 font-sans text-xs tracking-widest uppercase hover:bg-gold-500 hover:text-noir-950 transition-all group"
                                    >
                                        <span>Забронировать</span>
                                        <ArrowRight size={12} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Infrastructure */}
            <section className="bg-noir-900 py-16 border-t border-gold-500/10">
                <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="gold-line" />
                        <h2 className="font-serif text-2xl text-stone-warm">Инфраструктура санатория</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {infrastructure.map(item => {
                            const Icon = item.icon;
                            return (
                                <div key={item.label} className="flex flex-col items-center gap-3 p-5 border border-gold-500/15 bg-noir-800/40 text-center hover:border-gold-500/30 transition-colors">
                                    <Icon size={22} strokeWidth={1.5} className="text-gold-500" />
                                    <span className="font-sans text-xs text-stone-mid leading-tight">{item.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Leisure & events */}
            <section className="bg-noir-950 py-16 border-t border-gold-500/10">
                <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Leisure */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="gold-line" />
                                <h2 className="font-serif text-xl text-stone-warm">Досуг</h2>
                            </div>
                            <div className="space-y-2">
                                {leisure.map(l => (
                                    <div key={l} className="flex items-center gap-3 py-2 border-b border-gold-500/10 last:border-0">
                                        <div className="w-1 h-1 bg-gold-500 flex-shrink-0" />
                                        <span className="font-sans text-sm text-stone-mid">{l}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sports games */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="gold-line" />
                                <h2 className="font-serif text-xl text-stone-warm">Спортивные игры</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                {games.map(g => (
                                    <div key={g} className="flex items-center gap-2 py-1.5">
                                        <CheckCircle size={12} strokeWidth={1.5} className="text-gold-500" />
                                        <span className="font-sans text-sm text-stone-mid">{g}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Events */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Music2 size={16} strokeWidth={1.5} className="text-gold-500" />
                                <h2 className="font-serif text-xl text-stone-warm">Мероприятия</h2>
                            </div>
                            <div className="space-y-4">
                                {events.map(e => (
                                    <div key={e} className="p-4 border border-gold-500/15 bg-noir-800/40">
                                        <p className="font-sans text-sm text-stone-mid leading-relaxed">{e}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-noir-900 py-12 border-t border-gold-500/10">
                <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12 flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div>
                        <p className="font-serif text-xl text-stone-warm">Вопросы по бронированию?</p>
                        <p className="mt-1 font-sans text-sm text-stone-dark">Звоните — подберём номер под ваш запрос и бюджет</p>
                    </div>
                    <a
                        href="tel:+77772633343"
                        className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-gold-500 text-noir-950 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold-300 transition-all"
                    >
                        +7 (777) 263-33-43
                    </a>
                </div>
            </section>
        </>
    );
}
