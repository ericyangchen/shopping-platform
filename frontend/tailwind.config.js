module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
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