import { type Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light': {
          'primary': {
            DEFAULT: '#4E6D47',
            'dark': '#354A30',
            'light': '#6A9461',
          },
          'secondary': {
            DEFAULT: '#CF4E1A',
            'dark': '#A33D14',
            'light': '#E97749',
          },
          'tertiary': {
            DEFAULT: '#17758C',
            'dark': '#0E4958',
            'light': '#1FA1C1',
          },
          'background': '#EAECE1',
        },
        'dark': {
          'primary': {
            DEFAULT: '#C3FFE9',
            'dark': '#85FFD2',
            'light': '#EBFFF8',
          },
          'secondary': {
            DEFAULT: '#FFD000',
            'dark': '#CCA700',
            'light': '#FFDD47',
          },
          'tertiary': {
            DEFAULT: '#C94B60',
            'dark': '#AD3448',
            'light': '#D98190',
          },
          'background': '#232B36',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
