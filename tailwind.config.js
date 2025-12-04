/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx,js,jsx,mdx}',
    './src/components/**/*.{ts,tsx,js,jsx,mdx}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#93DA97',
        secondary: '#E8FFD7',
        therd: '#3E5F44',
      },
    },
  },
  plugins: [],
};
