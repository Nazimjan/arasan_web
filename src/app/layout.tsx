import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: {
        template: '%s | Жаркент Арасан — Санаторий',
        default: 'Жаркент Арасан — Премиальный санаторий в Казахстане',
    },
    description:
        'Санаторий «Жаркент Арасан» — оздоровление на природных радоновых источниках. Лечебные программы, комфортное размещение и профессиональный медицинский персонал в Жаркенте, Алматинская область.',
    keywords: ['санаторий', 'Жаркент', 'Арасан', 'радоновые ванны', 'лечение', 'Казахстан', 'wellness'],
    openGraph: {
        type: 'website',
        locale: 'ru_KZ',
        url: 'https://zharkentarasan.kz',
        siteName: 'Жаркент Арасан',
        title: 'Жаркент Арасан — Премиальный санаторий',
        description: 'Оздоровление на природных радоновых источниках Казахстана',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
