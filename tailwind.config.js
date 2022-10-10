/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  variants: {
    extends: {
      backgroundColor: ['active']
    }
  },
  theme: {
    expand: {
      colors: {
        amber: 'rgb(var(--color-amber) / <alpha-value>)',
        lazur: 'rgb(var(--color-lazur) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)',
        grey: 'rgb(var(--color-grey) / <alpha-value>)'
      }
    }
  },
  plugins: []
};
