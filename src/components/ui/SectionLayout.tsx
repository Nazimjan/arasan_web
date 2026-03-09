import { ReactNode } from 'react';

interface SectionLayoutProps {
    children: ReactNode;
    className?: string;
    id?: string;
    ariaLabelledBy?: string;
    variant?: 'default' | 'hero';
}

/**
 * SectionLayout - Base wrapper for sections with consistent padding and width constraints
 * 
 * Provides:
 * - Strict padding: py-24 lg:py-32
 * - Max width container: w-full max-w-[1280px] m-auto px-6 lg:px-12
 * - Optional custom className for additional styling
 * - Support for hero variant with different padding
 */
export default function SectionLayout({
    children,
    className = '',
    id,
    ariaLabelledBy,
    variant = 'default',
}: SectionLayoutProps) {
    const paddingClass = variant === 'hero' ? 'pt-32 pb-16' : 'py-24 lg:py-32';

    return (
        <section
            id={id}
            aria-labelledby={ariaLabelledBy}
            className={`${paddingClass} ${className}`.trim()}
        >
            <div className="w-full max-w-[1280px] m-auto px-6 lg:px-12">
                {children}
            </div>
        </section>
    );
}
