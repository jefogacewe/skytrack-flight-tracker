import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#eefbff',
          100: '#d8f5ff',
          200: '#baf0ff',
          300: '#7fe5ff',
          400: '#4fd7ff',
          500: '#21c4ff',
          600: '#0ca5df',
          700: '#0e82b5',
          800: '#116b92',
          900: '#145a7a',
        },
        night: {
          950: '#040b16',
          900: '#071425',
          800: '#0a1d34',
          700: '#112847',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(33, 196, 255, 0.25)',
        panel: '0 20px 45px rgba(2, 6, 23, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(33,196,255,0.18), transparent 30%), radial-gradient(circle at 80% 0%, rgba(15,118,110,0.12), transparent 30%), linear-gradient(135deg, rgba(2,6,23,1), rgba(8,15,33,1))',
      },
    },
  },
  plugins: [],
};

export default config;
