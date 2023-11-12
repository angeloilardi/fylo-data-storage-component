import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'periwinkle': { DEFAULT: '#dddbff', 100: '#05005f', 200: '#0900be', 300: '#291eff', 400: '#837cff', 500: '#dddbff', 600: '#e4e2ff', 700: '#ebeaff', 800: '#f1f1ff', 900: '#f8f8ff' },
        'delft_blue': { DEFAULT: '#1d2c67', 100: '#060915', 200: '#0c1229', 300: '#121a3e', 400: '#172353', 500: '#1d2c67', 600: '#2e45a2', 700: '#4e68cd', 800: '#899ade', 900: '#c4cdee' },
        'oxford_blue': { DEFAULT: '#0c122c', 100: '#020409', 200: '#050712', 300: '#070b1a', 400: '#0a0e23', 500: '#0c122c', 600: '#202f73', 700: '#334cbb', 800: '#7083d8', 900: '#b8c1eb' },
        'taupe_gray': { DEFAULT: '#848794', 100: '#1a1b1e', 200: '#34363c', 300: '#4e505a', 400: '#686b78', 500: '#848794', 600: '#9d9faa', 700: '#b5b7bf', 800: '#cecfd4', 900: '#e6e7ea' }
      }

    },
  },
  plugins: [],
}
export default config
