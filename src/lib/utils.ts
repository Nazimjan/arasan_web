import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
    return inputs.filter(Boolean).join(' ');
}

export function formatPrice(price: number, currency: string): string {
    return new Intl.NumberFormat('ru-KZ', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 0,
    }).format(price);
}

export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('ru-KZ', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(date);
}
