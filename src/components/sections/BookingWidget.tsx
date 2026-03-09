'use client';

import { useState } from 'react';
import { Calendar, Users, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';

interface BookingState {
    checkinDate: string;
    checkoutDate: string;
    adults: number;
    children: number;
    rooms: number;
}

export default function BookingWidget() {
    const [booking, setBooking] = useState<BookingState>({
        checkinDate: '',
        checkoutDate: '',
        adults: 2,
        children: 0,
        rooms: 1,
    });
    const [isGuestsOpen, setIsGuestsOpen] = useState(false);

    const today = new Date().toISOString().split('T')[0];

    const totalGuests = booking.adults + booking.children;

    const updateCount = (field: 'adults' | 'children' | 'rooms', delta: number) => {
        setBooking(prev => {
            const min = field === 'adults' ? 1 : 0;
            const max = field === 'rooms' ? 5 : 8;
            return { ...prev, [field]: Math.max(min, Math.min(max, prev[field] + delta)) };
        });
    };

    const handleSearch = () => {
        // Placeholder: ready to connect to booking system
        alert(`Поиск доступных номеров:\nЗаезд: ${booking.checkinDate || 'не выбрано'}\nВыезд: ${booking.checkoutDate || 'не выбрано'}\nГостей: ${totalGuests} | Комнат: ${booking.rooms}`);
    };

    return (
        <div className="booking-panel w-full">
            <div className="flex flex-col lg:flex-row items-stretch">

                {/* Check-in */}
                <div className="flex-1 flex flex-col px-6 py-4 border-b lg:border-b-0 lg:border-r border-gold-500/15">
                    <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-500 mb-1.5">
                        Дата заезда
                    </label>
                    <div className="flex items-center gap-3">
                        <Calendar size={16} strokeWidth={1.5} className="text-stone-dark flex-shrink-0" />
                        <input
                            id="checkin-date"
                            type="date"
                            min={today}
                            value={booking.checkinDate}
                            onChange={e => setBooking(prev => ({ ...prev, checkinDate: e.target.value }))}
                            className="w-full bg-transparent font-sans text-sm text-stone-warm placeholder-stone-dark outline-none cursor-pointer"
                            style={{ colorScheme: 'dark' }}
                        />
                    </div>
                </div>

                {/* Check-out */}
                <div className="flex-1 flex flex-col px-6 py-4 border-b lg:border-b-0 lg:border-r border-gold-500/15">
                    <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-500 mb-1.5">
                        Дата выезда
                    </label>
                    <div className="flex items-center gap-3">
                        <Calendar size={16} strokeWidth={1.5} className="text-stone-dark flex-shrink-0" />
                        <input
                            id="checkout-date"
                            type="date"
                            min={booking.checkinDate || today}
                            value={booking.checkoutDate}
                            onChange={e => setBooking(prev => ({ ...prev, checkoutDate: e.target.value }))}
                            className="w-full bg-transparent font-sans text-sm text-stone-warm placeholder-stone-dark outline-none cursor-pointer"
                            style={{ colorScheme: 'dark' }}
                        />
                    </div>
                </div>

                {/* Guests dropdown */}
                <div className="flex-1 relative">
                    <button
                        id="guests-toggle"
                        onClick={() => setIsGuestsOpen(!isGuestsOpen)}
                        className="w-full flex flex-col px-6 py-4 text-left border-b lg:border-b-0 lg:border-r border-gold-500/15 hover:bg-white/5 transition-colors"
                    >
                        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-500 mb-1.5">
                            Гости
                        </span>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Users size={16} strokeWidth={1.5} className="text-stone-dark flex-shrink-0" />
                                <span className="font-sans text-sm text-stone-warm">
                                    {totalGuests} гост{totalGuests === 1 ? 'ь' : totalGuests < 5 ? 'я' : 'ей'}, {booking.rooms} компн.
                                </span>
                            </div>
                            {isGuestsOpen
                                ? <ChevronUp size={14} className="text-stone-dark" />
                                : <ChevronDown size={14} className="text-stone-dark" />
                            }
                        </div>
                    </button>

                    {/* Guests popover */}
                    {isGuestsOpen && (
                        <div className="absolute top-full left-0 right-0 lg:-left-4 lg:right-auto lg:w-72 mt-2 bg-noir-800 border border-gold-500/20 z-20 shadow-2xl">
                            {[
                                { label: 'Взрослые', sub: 'от 18 лет', field: 'adults' as const, value: booking.adults, min: 1 },
                                { label: 'Дети', sub: 'до 17 лет', field: 'children' as const, value: booking.children, min: 0 },
                                { label: 'Комнаты', sub: '', field: 'rooms' as const, value: booking.rooms, min: 1 },
                            ].map((row) => (
                                <div key={row.field} className="flex items-center justify-between px-5 py-4 border-b border-gold-500/10 last:border-0">
                                    <div>
                                        <p className="font-sans text-sm text-stone-warm">{row.label}</p>
                                        {row.sub && <p className="font-sans text-xs text-stone-dark">{row.sub}</p>}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            aria-label={`Уменьшить ${row.label}`}
                                            onClick={() => updateCount(row.field, -1)}
                                            disabled={row.value <= row.min}
                                            className="w-7 h-7 flex items-center justify-center border border-gold-500/30 text-gold-500 hover:border-gold-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <Minus size={12} />
                                        </button>
                                        <span className="font-sans text-sm text-stone-warm w-5 text-center">
                                            {row.value}
                                        </span>
                                        <button
                                            aria-label={`Увеличить ${row.label}`}
                                            onClick={() => updateCount(row.field, 1)}
                                            className="w-7 h-7 flex items-center justify-center border border-gold-500/30 text-gold-500 hover:border-gold-500 transition-colors"
                                        >
                                            <Plus size={12} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="p-4">
                                <button
                                    onClick={() => setIsGuestsOpen(false)}
                                    className="w-full py-2.5 bg-gold-500 text-noir-950 font-sans text-xs tracking-[0.15em] uppercase hover:bg-gold-300 transition-colors"
                                >
                                    Применить
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Search button */}
                <div className="flex items-stretch">
                    <button
                        id="booking-search-btn"
                        onClick={handleSearch}
                        className="w-full lg:w-auto px-8 py-4 bg-gold-500 text-noir-950 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold-300 transition-colors duration-300 whitespace-nowrap"
                    >
                        Найти номер
                    </button>
                </div>
            </div>
        </div>
    );
}
