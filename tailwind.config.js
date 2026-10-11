/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'turquoise': '#5DCCCC',
        'turquoise-hover': '#4DBABA',
        'turquoise-light': '#E8F4F4',
        'navy': '#2D3E50',
        'navy-hover': '#3A4F63',
        'yellow': '#F5D576',
        'yellow-hover': '#F0CA5E',
        'warning-bg': '#FFF9E6',
        'warning-border': '#F5D576',
        'error-bg': '#FFEEF2',
        'error-border': '#E85D75',
        'text-primary': '#2D3E50',
        'text-secondary': '#5A6C7D',
        'border-light': '#E1E8ED',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
