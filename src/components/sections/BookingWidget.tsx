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
        <div className="rounded-xl border border-primary/20 bg-mineral-dark/95 p-1 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 p-2">
                {/* Check-in/Out */}
                <div className="flex flex-col gap-1.5 rounded-lg bg-background-dark/50 p-5 transition-colors hover:bg-background-dark/80 cursor-pointer group">
                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        Заезд — Выезд
                    </span>
                    <p className="text-sm font-medium text-white">
                        {booking.checkinDate ? `${booking.checkinDate}` : '12 Окт — 18 Окт'}
                    </p>
                </div>

                {/* Guests */}
                <div className="flex flex-col gap-1.5 rounded-lg bg-background-dark/50 p-5 transition-colors hover:bg-background-dark/80 cursor-pointer border-l border-primary/10 md:border-l-0 group">
                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        Гости
                    </span>
                    <p className="text-sm font-medium text-white">
                        {booking.adults} Взрослых, {booking.children} Детей
                    </p>
                </div>

                {/* Category */}
                <div className="flex flex-col gap-1.5 rounded-lg bg-background-dark/50 p-5 transition-colors hover:bg-background-dark/80 cursor-pointer border-l border-primary/10 md:border-l-0 group">
                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg>
                        Категория
                    </span>
                    <p className="text-sm font-medium text-white">Люкс с видом на горы</p>
                </div>

                {/* CTA */}
                <button
                    onClick={handleSearch}
                    className="flex h-full w-full items-center justify-center rounded-lg bg-primary px-6 py-5 text-xs font-bold uppercase tracking-[0.2em] text-noir-950 hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                    Проверить наличие
                </button>
            </div>
        </div>
    );
}
