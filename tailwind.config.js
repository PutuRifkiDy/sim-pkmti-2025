
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
    important: true,
    darkMode: ['class', '[data-mode="dark"]'],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/primereact/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Product Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': "#0D79B9",
                'secondary': "#1D4489",
                "linear-blue": "#121B75",
                "blue-lagoon": "#1E96C8",
                "cloud-blue": "#96D8E8",
                "white-blue": "#D6F0F6",
            },
            fontSize: {
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
                '6xl': '3.441rem',
                '7xl': '4.052rem',
                '8xl': '4.441rem',
            },
            lineHeight: {
                '11': '2.6rem',
                '12': '2.8rem',
                '13': '3rem',
                '14': '3.2rem',
                '15': '3.4rem',
                '16': '3.6rem',
                '17': '3.8rem',
                '18': '4rem',
                '19': '4.2rem',
            },
            backgroundImage: {
                "gradient-blue": "linear-gradient(to right, rgba(40, 91, 112, 1) 0%, rgba(40, 91, 112, 0.82) 41%, rgba(40, 91, 112, 0.82) 41%, rgba(40, 91, 112, 0.71) 65%, rgba(40, 91, 112, 0.66) 75%, rgba(40, 91, 112, 0.55) 100%)"
            },
            animation: {
                "bounce-custom": 'bounce-custom 4s ease-in-out infinite',
                "bounce-merch": 'bounce-custom 2s ease-in-out infinite',
            },
            keyframes: {
                "bounce-custom": {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(15px)' },
                },
                "bounce-merch": {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(40px)' },
                },
            },
        },
    },
    plugins: [require("daisyui"), require("@tailwindcss/typography")],
    daisyui: {
        themes: false,
        // [
        //     {
        //         dark: {
        //             ...require("daisyui/src/theming/themes")["dark"],
        //             primary: "#0079B9",
        //             secondary: "#94D8E9",
        //         },
        //         light: {
        //             ...require("daisyui/src/theming/themes")["light"],
        //             primary: "#0079B9",
        //             secondary: "#94D8E9",
        //         },
        //     },
        // ],
    },
};
