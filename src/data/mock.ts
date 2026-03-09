// Mock data for wellness programs
export interface WellnessProgram {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    price: number;
    currency: string;
    category: 'mineral' | 'medical' | 'beauty' | 'relaxation';
    highlights: string[];
    imageUrl: string;
    featured: boolean;
}

export const wellnessPrograms: WellnessProgram[] = [
    {
        id: '1',
        slug: 'radon-therapy',
        title: 'Радоновые ванны',
        subtitle: 'Природная сила минеральных вод',
        description: 'Уникальные радоновые ванны на основе природных источников Жаркента. Эффективное лечение заболеваний опорно-двигательного аппарата, сердечно-сосудистой и нервной систем.',
        duration: '10 дней',
        price: 85000,
        currency: 'KZT',
        category: 'mineral',
        highlights: ['Природная радоновая вода', 'До 10 ванн в курсе', 'Консультация врача', 'Комплексное обследование'],
        imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
        featured: true,
    },
    {
        id: '2',
        slug: 'spine-rehabilitation',
        title: 'Реабилитация позвоночника',
        subtitle: 'Комплексная программа восстановления',
        description: 'Многоуровневая программа лечения заболеваний позвоночника с применением физиотерапии, грязелечения и щадящего массажа.',
        duration: '14 дней',
        price: 120000,
        currency: 'KZT',
        category: 'medical',
        highlights: ['Грязелечение', 'ЛФК и кинезиотерапия', 'Физиотерапия', 'Консультация невролога'],
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
        featured: true,
    },
    {
        id: '3',
        slug: 'cardio-recovery',
        title: 'Кардиооздоровление',
        subtitle: 'Для сердца и сосудов',
        description: 'Специализированная программа для восстановления сердечно-сосудистой системы с периферической магнитотерапией и водными процедурами.',
        duration: '12 дней',
        price: 95000,
        currency: 'KZT',
        category: 'medical',
        highlights: ['Магнитотерапия', 'Циркулярный душ', 'ЭКГ-мониторинг', 'Диетическое питание'],
        imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
        featured: false,
    },
    {
        id: '4',
        slug: 'total-detox',
        title: 'Детокс и очищение',
        subtitle: 'Полное обновление организма',
        description: 'Интенсивная программа детоксикации, включающая лечебное голодание, кишечноочищающие процедуры и минеральные ванны.',
        duration: '7 дней',
        price: 65000,
        currency: 'KZT',
        category: 'medical',
        highlights: ['Кишечное орошение', 'Фитотерапия', 'Минеральные ванны', 'Натуропатия'],
        imageUrl: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80',
        featured: false,
    },
    {
        id: '5',
        slug: 'anti-stress',
        title: 'Антистресс и релаксация',
        subtitle: 'Восстановление нервной системы',
        description: 'Программа глубокого расслабления и восстановления нервной системы через термальные процедуры, ароматерапию и психологическую поддержку.',
        duration: '7 дней',
        price: 72000,
        currency: 'KZT',
        category: 'relaxation',
        highlights: ['Ароматерапия', 'Флоатинг', 'Медитации', 'Хвойные ванны'],
        imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
        featured: true,
    },
    {
        id: '6',
        slug: 'beauty-balance',
        title: 'Красота и баланс',
        subtitle: 'Омоложение и восстановление кожи',
        description: 'Элитная косметологическая программа с применением минеральных грязей, жемчужных ванн и премиальных уходовых процедур.',
        duration: '5 дней',
        price: 55000,
        currency: 'KZT',
        category: 'beauty',
        highlights: ['Грязевые маски', 'Жемчужные ванны', 'Антицеллюлитные обёртывания', 'Лимфодренаж'],
        imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
        featured: false,
    },
];

// Mock data for rooms
export interface Room {
    id: string;
    title: string;
    category: 'standard' | 'comfort' | 'deluxe' | 'suite';
    area: number;
    maxGuests: number;
    pricePerNight: number;
    currency: string;
    description: string;
    amenities: string[];
    imageUrl: string;
}

export const rooms: Room[] = [
    {
        id: 'r1',
        title: 'Стандарт',
        category: 'standard',
        area: 22,
        maxGuests: 2,
        pricePerNight: 18000,
        currency: 'KZT',
        description: 'Уютный номер с видом на горный пейзаж. Оснащён всем необходимым для комфортного пребывания.',
        amenities: ['Wi-Fi', 'Телевизор', 'Холодильник', 'Ванная комната', 'Кондиционер'],
        imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    },
    {
        id: 'r2',
        title: 'Комфорт',
        category: 'comfort',
        area: 30,
        maxGuests: 2,
        pricePerNight: 26000,
        currency: 'KZT',
        description: 'Просторный номер повышенного комфорта с дополнительной гостиной зоной и расширенным набором услуг.',
        amenities: ['Wi-Fi', 'Smart TV', 'Мини-бар', 'Ванная + душ', 'Кондиционер', 'Сейф', 'Халаты'],
        imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    },
    {
        id: 'r3',
        title: 'Делюкс',
        category: 'deluxe',
        area: 42,
        maxGuests: 3,
        pricePerNight: 38000,
        currency: 'KZT',
        description: 'Элегантный номер категории делюкс с панорамным видом и эксклюзивными интерьерными решениями.',
        amenities: ['Wi-Fi', '65" Smart TV', 'Мини-бар', 'Ванная с джакузи', 'Кондиционер', 'Сейф', 'Халаты и тапочки', 'Балкон'],
        imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
    },
    {
        id: 'r4',
        title: 'Сюит',
        category: 'suite',
        area: 65,
        maxGuests: 4,
        pricePerNight: 65000,
        currency: 'KZT',
        description: 'Апартаменты высшей категории с отдельными спальней и гостиной, частной террасой и персональным консьержем.',
        amenities: ['Wi-Fi', '75" Smart TV', 'Полный мини-бар', 'Spa-ванна', 'Кондиционер', 'Сейф', 'Комплект люкс', 'Терраса', 'Персональный консьерж'],
        imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
    },
];

// Testimonials mock data
export interface Testimonial {
    id: string;
    name: string;
    city: string;
    rating: number;
    text: string;
    program: string;
    date: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 't1',
        name: 'Айгерим К.',
        city: 'Алматы',
        rating: 5,
        text: 'Потрясающие радоновые ванны! Спина перестала болеть уже на 5-й день. Персонал удивительно внимательный, сразу чувствуешь профессионализм.',
        program: 'Радоновые ванны',
        date: 'Январь 2026',
    },
    {
        id: 't2',
        name: 'Марат И.',
        city: 'Астана',
        rating: 5,
        text: 'Приехал с проблемами позвоночника после долгих лет офисной работы. Через 14 дней лечения — другой человек. Рекомендую программу реабилитации позвоночника.',
        program: 'Реабилитация позвоночника',
        date: 'Февраль 2026',
    },
    {
        id: 't3',
        name: 'Светлана Н.',
        city: 'Шымкент',
        rating: 5,
        text: 'Великолепный антистресс-тур! Природа Жаркента сама по себе исцеляет. Уезжала отдохнувшей и обновлённой. Обязательно вернусь!',
        program: 'Антистресс и релаксация',
        date: 'Декабрь 2025',
    },
];
