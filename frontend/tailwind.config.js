module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}