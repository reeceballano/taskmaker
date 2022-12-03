/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }
      
            'md': '960px',
            // => @media (min-width: 960px) { ... }
      
            'lg': '1440px',
            // => @media (min-width: 1440px) { ... }
        },
        extend: {
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
    // ...(process.env.NODE_ENV == 'development') && {
    //     safelist: [
    //         { pattern: /.*/ },
    //     ],
    // },
}