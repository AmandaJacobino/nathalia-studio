/** @type {import('tailwindcss').Config} */
export default {
  
  content: ['./index.html', './src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      colors: {
        card: '#EAEAEA',
        linearTiffany: '#00E0E4',
        tiffany: '#00C2CB',
        white: '#FFFFFF',
        textColor: '#444444',
      },
      fontFamily: {
        title: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
