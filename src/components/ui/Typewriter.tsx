'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
}

export default function Typewriter({ text, speed = 100, delay = 0, className = '' }: TypewriterProps) {
    const [displayText, setDisplayText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        if (displayText.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(text.substring(0, displayText.length + 1));
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [displayText, text, speed, started]);

    return (
        <span className={className}>
            {displayText}
            <span className="animate-pulse border-r-2 border-primary ml-1 h-[0.8em] inline-block align-middle" aria-hidden="true" />
        </span>
    );
}
