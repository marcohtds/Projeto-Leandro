/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                techBlue: '#2A3A50',
                techCyan: '#00FFFF',
                techGreen: '#4ADE80',
                techDark: '#1a2433',
            },
            animation: {
                'bounce-slow': 'bounce 3s infinite',
                'fade-in': 'fadeIn 2s ease-in forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
}
