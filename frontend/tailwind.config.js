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
      },
      width: {
        '22/25': '88%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}