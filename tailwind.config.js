/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            space: {
                594: '594px',
                65: '65px',
                295: '295px',
                511: '511px',
                70: '70px',
                431: '431px',
                760: '760px',
                5.5: '5.5rem',
                50: '50px',
            },
            colors: {
                'global-search-bg': '#F8F7FE',
                'global-search-discription-bg': ' #5F6981',
                'calculator-discription-color': '#5F6981',
            },
        },
    },
    plugins: [],
};
