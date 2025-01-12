const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

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
        aurora: 'aurora 60s linear infinite',
      },

      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
    },
  },
  plugins: [require('daisyui'), addVariablesForColors],
};
