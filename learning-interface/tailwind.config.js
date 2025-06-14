/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': 'rgba(228,228,228,1)',
        'pale-gray': 'rgba(241,240,240,1)',
        'light-blue': 'rgba(223,244,255,1)',
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
