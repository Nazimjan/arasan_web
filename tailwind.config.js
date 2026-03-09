/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Mineral Noir Palette - тепло термальных источников
                noir: {
                    950: '#0a0a09',
                    900: '#111110',
                    800: '#1a1a18',
                    700: '#242420',
                },
                gold: {
                    300: '#E8D5A3',
                    400: '#D4B87A',
                    500: '#C8A96E',
                    600: '#B8955A',
                    700: '#9A7A45',
                },
                stone: {
                    warm: '#F5F0E8',
                    light: '#EDE8DF',
                    mid: '#D4CEBE',
                    dark: '#A09888',
                },
                mineral: {
                    teal: '#2D5A5A',
                    deep: '#1E3E3E',
                }
            },
            fontFamily: {
                serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
                sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95' }],
                'display-lg': ['clamp(2rem, 5vw, 5rem)', { lineHeight: '1.0' }],
                'display-md': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.1' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1.2s ease-out forwards',
                'shimmer': 'shimmer 2s infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                }
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #C8A96E 0%, #E8D5A3 50%, #C8A96E 100%)',
                'dark-gradient': 'linear-gradient(180deg, rgba(10,10,9,0) 0%, rgba(10,10,9,0.8) 70%, rgba(10,10,9,1) 100%)',
                'hero-overlay': 'linear-gradient(180deg, rgba(10,10,9,0.3) 0%, rgba(10,10,9,0.5) 60%, rgba(10,10,9,0.95) 100%)',
            },
        },
    },
    plugins: [],
}
