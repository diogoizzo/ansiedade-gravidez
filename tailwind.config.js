// const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "index.html",
        "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    ],
    theme: {
        extend: {
            colors: {
                azulescuro: {
                    200: "#131D7C",
                    500: "#11196A",
                    900: "#0E1458",
                },
                azulclaro: {
                    100: "#EEF0FB",
                    200: "#CDD3F3",
                    300: "#9CA8E7",
                    500: "#3A53CF",
                    700: "#2C43B5",
                    900: "#1D267D",
                },
                violeta: {
                    50: "#F5EBFE",
                    100: "#ECD8FD",
                    200: "#E2C5FC",
                    300: "#E2C5FC",
                    400: "#D9B1FB",
                    500: "#CF9EFA",
                    600: "#CF9EFA",
                    700: "#B264F7",
                    800: "#A951F6",
                    900: "#9F3DF5",
                },
                roxo: {
                    100: "#6D56B3",
                    300: "#634CA9",
                    500: "#5B469B",
                    700: "#533F8D",
                    900: "#4A397F",
                },
                amaPink: {
                    50: "#FAEFF5",
                    100: "#F5E0EC",
                    200: "#F0D0E2",
                    300: "#EBC1D9",
                    400: "#E7B1CF",
                    700: "#D883B2",
                    900: "#CE64A0",
                },
                palatinate: {
                    800: "#7A006E",
                    900: "#5B0052",
                },
                darkPurple: {
                    400: "#C378D3",
                    700: "#6D225C",
                    900: "#37143E",
                },
                purpu: {
                    50: "#EF91F2",
                    100: "#EC7FF0",
                    200: "#EA6DEE",
                    600: "#DF24E5",
                    400: "#E448EA",
                    800: "#C318C9",
                    900: "#AF15B5",
                },
            },
            plugins: [],
        },
    },
};
