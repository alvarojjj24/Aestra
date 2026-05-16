/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        obsidian: '#050507',
        charcoal: '#0f1115',
        silver: '#b7bac1',
        ash: '#6d7380',
        ion: '#7f8aa3',
        ember: '#d2b58f',
      },
    },
  },
  plugins: [],
};
