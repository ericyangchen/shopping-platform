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
      screens: {
        // customized media breakpoint for max-width: 1023px ( Used in Checkout.jsx for Order Summary ItemList)
        'max-lg': {'max': '1023px'},
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}