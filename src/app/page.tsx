import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import WellnessSection from '@/components/sections/WellnessSection';
import AboutSection from '@/components/sections/AboutSection';
import RoomsSection from '@/components/sections/RoomsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
    title: 'Жаркент Арасан — Санаторий на радоновых источниках Казахстана',
    description:
        'Санаторий «Жаркент Арасан» — природные радоновые ванны, лечебные программы, комфортное проживание и профессиональная медицинская помощь в Алматинской области.',
};

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <WellnessSection />
            <AboutSection />
            <RoomsSection />
            <TestimonialsSection />
            <CtaSection />
        </>
    );
}
