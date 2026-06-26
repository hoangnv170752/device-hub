import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Primary accent
                accent: '#06b6d4',
                'accent-secondary': '#8b5cf6',

                // Status colors
                success: '#22c55e',
                warning: '#eab308',
                error: '#ef4444',

                // Surface colors - updated to support light/dark modes
                surface: {
                    bg: 'rgb(var(--color-surface-bg) / <alpha-value>)',
                    card: 'rgb(var(--color-surface-card) / <alpha-value>)',
                    elevated: 'rgb(var(--color-surface-elevated) / <alpha-value>)',
                    hover: 'rgb(var(--color-surface-hover) / <alpha-value>)',
                },

                // Border
                border: 'rgb(var(--color-border) / <alpha-value>)',

                // Text
                text: {
                    primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
                    muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Consolas', 'monospace'],
            },
            backgroundImage: {
                'accent-gradient': 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
            },
        },
    },
    plugins: [],
}