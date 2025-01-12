export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(180deg, rgba(249, 242, 223, 0.8) 0%, rgba(249, 242, 223, 0) 86.84%)',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [require('daisyui')],
};
