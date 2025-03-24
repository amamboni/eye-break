/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6E11B0',
          light: '#f3e8ff',
          dark: '#3c0366',
        },
        zinc: '#F6F7F9',
        slate: '#E6EAF1',
        stone: '#A8A29E',
        gray: '#6A7187',
        dark: '#080133',
        green: {
          DEFAULT: '#27CD6A',
          light: '#D3FFE5',
          dark: '#19A050',
        },
        red: {
          DEFAULT: '#E8307D',
          light: '#FFE9F3',
          dark: '#8E0D4B',
        },
        orange: {
          DEFAULT: '#FF9900',
          light: '#FFF3E1',
          dark: '#E27200',
        },
        blue: {
          DEFAULT: '#1780E1',
          light: '#D7ECFF',
          dark: '#1965B4',
        },
      },
      borderColor: {
        DEFAULT: '#E6EAF1',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
