/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  variants: {
    extend: {
      backgroundColor: ['active', 'hover', 'focus', 'active']
    }
  },
  plugins: []
};
