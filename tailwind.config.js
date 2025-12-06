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
        primary: '#FAF3E1',
        secondary: '#F5F5F5',
        therd: '#FF6D1F',
        fourth: '#222222',
      },
    },
  },
  plugins: [],
};
