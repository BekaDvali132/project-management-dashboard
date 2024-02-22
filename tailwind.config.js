/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hoverNavLink: 'rgba(80, 48, 229, 0.08)',
      },
    },
  },
  plugins: [],
};
