module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#141b4b ',
        secondary: '#ff7f32 ',
        'white': '#ffffff',
        'silver': '#ecebff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
