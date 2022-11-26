/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  variants: {
    extend: {
      backgroundColor: ['active', 'hover', 'focus', 'active', 'invalid']
    }
  },
  plugins: [require('tailwindcss-invalid-variant-plugin')]
};
