/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'auto',
    theme: {
        extend: {
            fontFamily: {
                'inter-tight': ['Inter Tight', 'sans-serif'],
            },
            fontWeight: {
                thin: '100',
                extraLight: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semiBold: '600',
                bold: '700',
                extraBold: '800',
                black: '900',
            },
            fontSize: {
                h1: '3rem',
                h2: '2.5rem',
                h3: '2rem',
                h4: '1.5rem',
                h5: '1.25rem',
                h6: '1.125rem',
                xl: '1.125rem',
                lg: '1rem',
                md: '0.875rem',
                sm: '0.75rem',
                xs: '0.625rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            backgroundImage: {
                'gradient-green': 'linear-gradient(to right, #1BAC4B, #46D375)',
                'gradient-green-to-left': 'linear-gradient(to left, #1BAC4B, #46D375)',
                'gradient-black-to-top': 'linear-gradient(to top, #181A20, rgba(24, 26, 32, 0 ))',
            },
            colors: {
                primary: {
                    100: '#E8F7ED',
                    200: '#49BD6F',
                    300: '#76CD93',
                    400: '#76CD93',
                    500: '#1BAC4B',
                },
                secondary: {
                    100: '#FFFBE6',
                    200: '#FFED99',
                    300: '#FFE566',
                    400: '#FFDC33',
                    500: '#FFD300',
                },
                greyScale: {
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#EEEEEE',
                    300: '#E0E0E0',
                    400: '#BDBDBD',
                    500: '#9E9E9E',
                    600: '#757575',
                    700: '#616161',
                    800: '#424242',
                    900: '#212121',
                },
                dark: {
                    dark1: '#181A20',
                    dark2: '#1F222A',
                    dark3: '#35383F',
                },
                success: {
                    500: '#1BAC4B',
                },
                warning: {
                    500: '#FACC15',
                },
                error: {
                    500: '#F75555',
                },
                info: {
                    500: '#246BFD',
                },
                disabled: {
                    500: '#D8D8D8',
                },
                button_disabled: {
                    500: '#29974D',
                },
                background: {
                    green: '#F1FEF5',
                    blue: '#EEF4FF',
                    orange: '#FFF8ED',
                    pink: '#FFF5F5',
                    yellow: '#FFFEE0',
                    purple: '#FCF4FF',
                },
            },
        },
    },
    plugins: [
        function ({addUtilities, theme}) {
            addUtilities({
                '.text_h1': {
                    fontSize: theme('fontSize.h1'),
                    fontWeight: theme('fontWeight.semiBold'),
                },
                '.text_h2': {
                    fontSize: theme('fontSize.h2'),
                    fontWeight: theme('fontWeight.semiBold'),
                },
                '.text_h3': {
                    fontSize: theme('fontSize.h3'),
                    fontWeight: theme('fontWeight.semiBold'),
                },
                '.text_h4': {
                    fontSize: theme('fontSize.h4'),
                    fontWeight: theme('fontWeight.semiBold'),
                },
                '.text_h5': {
                    fontSize: theme('fontSize.h5'),
                    fontWeight: theme('fontWeight.semiBold'),
                },
                '.text_h6': {
                    fontSize: theme('fontSize.h6'),
                    fontWeight: theme('fontWeight.semiBold'),
                },
            });
        },
    ],
};
