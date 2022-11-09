module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        primary: '#f4fbfb',
        royalBlue: '#0066ff',
      },
    },
  },
  plugins: [],
};
