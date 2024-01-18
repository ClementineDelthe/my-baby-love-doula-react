/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light-blue-bg': '#D3F0F3',
      'light-purple-bg': '#DFD3F9',
      'light-pink-bg': '#FFE4E1',
      'light-yellow-bg': '#FDEBC7',
      'pink-bg': '#F8D0DB',
      'pink-p': '#FFBBB0',
      'coral-icon': '#F8BB9E',
      'light-green-bg': '#D1EBDD',
      'beige-bg': '#F9F1E7',
      'red-p': '#D52D5C',
      'dark-green-p': '#629277',
      'yellow-icon': '#FADF5B',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
