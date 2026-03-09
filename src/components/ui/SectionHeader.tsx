import { ReactNode } from 'react';

interface SectionHeaderProps {
    eyebrow?: string;
    title: ReactNode;
    titleId?: string;
    subtitle?: string;
    alignment?: 'left' | 'center';
    className?: string;
    action?: ReactNode;
}

/**
 * SectionHeader - Consistent section header component
 * 
 * Provides:
 * - Gold line accent
 * - Eyebrow text (small uppercase label)
 * - Main heading (h2)
 * - Optional subtitle
 * - Consistent bottom margin: mb-16 lg:mb-20
 * - Optional action element (e.g., "View All" link)
 */
export default function SectionHeader({
    eyebrow,
    title,
    titleId,
    subtitle,
    alignment = 'left',
    className = '',
    action,
}: SectionHeaderProps) {
    const alignmentClass = alignment === 'center' ? 'items-center text-center' : '';

    return (
        <div className={`mb-10 lg:mb-12 ${className}`.trim()}>
            {/* Eyebrow with gold line */}
            {eyebrow && (
                <div className={`flex items-center gap-4 mb-10 ${alignment === 'center' ? 'justify-center' : ''}`}>
                    <div className="gold-line" />
                    <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500">
                        {eyebrow}
                    </span>
                </div>
            )}

            {/* Title and action */}
            <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 ${alignmentClass}`}>
                <h2
                    id={titleId}
                    className="font-serif text-display-md text-stone-warm"
                >
                    {title}
                </h2>
                {action && <div>{action}</div>}
            </div>

            {/* Subtitle */}
            {subtitle && (
                <p className="mt-6 font-sans text-sm text-stone-mid leading-relaxed max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
