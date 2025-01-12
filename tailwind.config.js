/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pry: '#0A3B77'
      },
      backgroundImage: {
        'lecturer-lib':
          "linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)), url('/lecturer-library.png')",
        'student-smile':
          "linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)), url('/student-smiling.png')"
      }
    }
  },
  plugins: []
};
