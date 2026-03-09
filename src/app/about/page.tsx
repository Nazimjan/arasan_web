import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, MapPin, Phone, Award, Heart, Leaf, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'О санатории — Жаркент Арасан',
    description:
        'Медицинский оздоровительный комплекс «Жаркент-Арасан» — история от 1952 года, природные радоновые источники, лицензированное лечение и лауреат премии «Алтын Сапа».',
};

const radonEffects = [
    'Обезболивание и снятие воспаления',
    'Стимуляция регенерации тканей',
    'Укрепление иммунитета',
    'Нормализация артериального давления',
    'Улучшение состава крови',
    'Расширение сосудов',
    'Снижение уровня холестерина',
    'Нормализация обмена веществ',
    'Восстановление нормального сна',
    'Возвращение упругости кожи',
    'Замедление дыхания и увеличение глубины',
    'Стимуляция выработки гормонов и инсулина',
];

const mainTreatments = [
    'Грязелечение',
    'Радоновые ванны',
    'Восходящий душ',
    'Циркулярный душ',
    'Душ Шарко',
    'Ингаляция',
    'Тубус-кварц',
    'Парафиноаппликация',
    'Магнитотерапия',
    'Электрофорез',
    'Световая ванна',
    'Термоодеяло',
    'Кишечное орошение',
    'Гинекологическое орошение',
    'Бювет — дозированное питьё',
    'ЛФК — лечебная физкультура',
    'Фито-бар',
];

const diseases = [
    { title: 'Опорно-двигательный аппарат', desc: 'Артриты, остеохондроз, протрузии, грыжи, радикулиты, последствия травм — до 80% поддаются лечению' },
    { title: 'Сердечно-сосудистая система', desc: 'Нормализация давления, улучшение состава крови, реабилитация после инсультов и инфарктов' },
    { title: 'Органы малого таза', desc: 'Гинекологические, урологические заболевания, простатит, нарушение потенции' },
    { title: 'Нарушение обмена веществ', desc: 'Сахарный диабет (лёгкая и средняя стадии), ожирение, подагра, гипертиреоз' },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-72 lg:h-96 flex items-end">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
                        alt="Ущелье Борохудзир — место расположения санатория Жаркент Арасан"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-hero-overlay" />
                </div>
                <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 pb-12 lg:pb-16 w-full">
                    <nav className="flex items-center gap-2 mb-4">
                        <Link href="/" className="font-sans text-xs text-stone-dark hover:text-stone-warm transition-colors">Главная</Link>
                        <span className="text-stone-dark">/</span>
                        <span className="font-sans text-xs text-stone-warm">О санатории</span>
                    </nav>
                    <h1 className="font-serif text-display-md text-stone-warm">
                        О <em className="text-gold-500 not-italic">санатории</em>
                    </h1>
                </div>
            </section>

            {/* History */}
            <section className="bg-noir-900 py-20 lg:py-28">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="gold-line" />
                                <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">История</span>
                            </div>
                            <h2 className="font-serif text-display-sm text-stone-warm mb-8">
                                С 1952 года — <br /><em className="text-gold-500 not-italic">на страже здоровья</em>
                            </h2>
                            <div className="space-y-5 font-sans text-sm text-stone-mid leading-relaxed">
                                <p>
                                    Медицинский оздоровительный комплекс «Жаркент-Арасан» начал работать в 2004 году на месте
                                    бальнеологического санатория советских времён. Ещё в <strong className="text-stone-warm">1952 году</strong> термальную
                                    минеральную радоновую воду в районе Ку-Арасанских (Борохудзирских) источников вывели
                                    по трубе на поверхность.
                                </p>
                                <p>
                                    С 1961 года возле целебной воды стали строить больницы, а в <strong className="text-stone-warm">1967 году</strong> здесь
                                    официально открыли всесоюзную лечебницу. В марте 2024 года санаторию в его нынешнем
                                    статусе исполнилось <strong className="text-stone-warm">20 лет</strong>.
                                </p>
                                <p>
                                    Санаторий окружён горами с причудливым красивым гранитом и речкой Борохудзиркой с
                                    кристально чистой водой. Ущелье, место расположения комплекса, густо покрыто кустарниковой
                                    растительностью.
                                </p>
                            </div>
                        </div>

                        {/* Stats column */}
                        <div className="flex flex-col gap-6">
                            {/* Award block */}
                            <div className="p-8 border border-gold-500/30 bg-noir-800">
                                <Award size={32} strokeWidth={1.5} className="text-gold-500 mb-4" />
                                <p className="font-serif text-2xl text-stone-warm mb-2">Премия «Алтын Сапа»</p>
                                <p className="font-sans text-sm text-stone-mid leading-relaxed">
                                    Высшая награда Казахстана — символ золотого стандарта качества услуг. Вручена
                                    президентом Республики Казахстан за достижение значительных результатов.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { val: '1952', label: 'год основания источника' },
                                    { val: '20+', label: 'лет в статусе МОК' },
                                    { val: '320 км', label: 'от Алматы' },
                                ].map(s => (
                                    <div key={s.label} className="p-5 border border-gold-500/15 bg-noir-800/50 text-center">
                                        <p className="font-serif text-2xl text-gold-500">{s.val}</p>
                                        <p className="font-sans text-[10px] text-stone-dark uppercase tracking-widest mt-2 leading-tight">{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Water composition */}
                            <div className="p-6 border border-gold-500/15 bg-noir-800/40">
                                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-500 mb-3">Состав воды</p>
                                <p className="font-sans text-xs text-stone-mid leading-relaxed">
                                    По составу вода близка к источникам Белокурихи: радоновая, термальная,
                                    хлоридно-сульфатная, натриевая, с повышенным содержанием кремниевой кислоты и фтора.
                                    Общая минерализация — 12 г/дм³. Температура для процедур: <strong className="text-stone-warm">35–37°С</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Living radon force — 4 disease groups */}
            <section className="bg-noir-950 py-20 lg:py-28">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="mb-14">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="gold-line" />
                            <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">Живительная сила радона</span>
                        </div>
                        <h2 className="font-serif text-display-sm text-stone-warm max-w-2xl">
                            Четыре основных группы <em className="text-gold-500 not-italic">заболеваний</em>
                        </h2>
                        <p className="mt-6 font-sans text-sm text-stone-mid max-w-2xl leading-relaxed">
                            Исходя из механизма действия радона на организм, выделяют четыре основных группы
                            заболеваний, при которых лечение максимально эффективно. Метод радонолечения перенесён
                            из практики НИИ курортологии Пятигорска и дополнен исследованиями Массачусетского университета.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {diseases.map((d, i) => (
                            <div key={d.title} className="p-8 border border-gold-500/15 bg-noir-800/50 hover:border-gold-500/30 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 flex items-center justify-center border border-gold-500/40 font-serif text-lg text-gold-500">
                                        {i + 1}
                                    </div>
                                    <h3 className="font-serif text-xl text-stone-warm">{d.title}</h3>
                                </div>
                                <p className="font-sans text-sm text-stone-mid leading-relaxed">{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Effects of radon */}
            <section className="bg-noir-900 py-20 lg:py-28">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="gold-line" />
                                <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">Комплексное воздействие</span>
                            </div>
                            <h2 className="font-serif text-display-sm text-stone-warm mb-6">
                                Что даёт <em className="text-gold-500 not-italic">радонотерапия</em>
                            </h2>
                            <p className="font-sans text-sm text-stone-mid leading-relaxed mb-8">
                                Суть целебных свойств воды — в уникальном сочетании видов её воздействия: она обезболивает,
                                снимает воспаление, стимулирует регенерацию и восстанавливает иммунитет. Происходит это
                                благодаря ионизации тканевой жидкости под влиянием радона.
                            </p>
                            <p className="font-sans text-xs text-stone-dark italic leading-relaxed border-l-2 border-gold-500/40 pl-4">
                                «Всё есть яд, и всё есть лекарство. И то и другое определяет доза» — Парацельс
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            {radonEffects.map(effect => (
                                <div key={effect} className="flex items-center gap-3 py-2.5 border-b border-gold-500/10 last:border-0">
                                    <CheckCircle size={14} strokeWidth={1.5} className="text-gold-500 flex-shrink-0" />
                                    <span className="font-sans text-sm text-stone-mid">{effect}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main procedures included */}
            <section className="bg-noir-950 py-20">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="gold-line" />
                            <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">Процедуры санатория</span>
                        </div>
                        <h2 className="font-serif text-display-sm text-stone-warm">
                            Полный перечень <em className="text-gold-500 not-italic">включённых процедур</em>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
                        {mainTreatments.map(t => (
                            <div key={t} className="flex items-center gap-2.5 py-1">
                                <div className="w-1.5 h-1.5 bg-gold-500 flex-shrink-0" />
                                <span className="font-sans text-sm text-stone-mid">{t}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link
                            href="/wellness"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-gold-500 text-gold-500 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold-500 hover:text-noir-950 transition-all duration-300"
                        >
                            Подробнее о процедурах
                        </Link>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="bg-noir-900 py-16 border-t border-gold-500/10">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="gold-line" />
                                <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">Как добраться</span>
                            </div>
                            <h2 className="font-serif text-2xl text-stone-warm mb-6">Расположение</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin size={18} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-sans text-sm text-stone-warm">Адрес</p>
                                        <p className="font-sans text-sm text-stone-mid mt-1">
                                            Панфиловский район, г. Жаркент,<br />
                                            с. Жаркент-Арасан, ул. Ш. Валиханова №1
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-[18px] flex-shrink-0 mt-0.5 flex items-center justify-center">
                                        <div className="w-4 h-4 border border-gold-500 rounded-full flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-sans text-sm text-stone-warm">Расстояние</p>
                                        <p className="font-sans text-sm text-stone-mid mt-1">
                                            320 км от Алматы и Талдыкоргана<br />
                                            40 км от города Жаркент
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone size={18} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-sans text-sm text-stone-warm">Телефон</p>
                                        <a href="tel:+77772633343" className="font-sans text-sm text-gold-500 hover:text-gold-300 transition-colors mt-1 block">
                                            +7 (777) 263-33-43
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="font-sans text-xs text-stone-dark uppercase tracking-widest">Климат</p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Средняя годовая t°', val: '8.5°C' },
                                    { label: 'Тёплый месяц (июль)', val: '24.2°C' },
                                    { label: 'Зимний минимум', val: '−11°C' },
                                    { label: 'Абсолютный минимум', val: '−42°C' },
                                ].map(c => (
                                    <div key={c.label} className="p-4 border border-gold-500/15 bg-noir-800/40">
                                        <p className="font-sans text-[10px] text-stone-dark uppercase tracking-widest">{c.label}</p>
                                        <p className="font-serif text-xl text-gold-500 mt-1">{c.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
