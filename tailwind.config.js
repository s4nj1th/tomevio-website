/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-sans)', 'sans-serif'],
        'serif': ['var(--font-serif)', 'serif'],
      },
      colors: {
        'primary': 'var(--color-primary)',
        'primary-bright': 'var(--color-primary-bright)',
        'primary-dim': 'var(--color-primary-dim)',

        'rose': 'var(--color-rose)',
        'rose-bright': 'var(--color-rose-bright)',
        'rose-dim': 'var(--color-rose-dim)',

        'yellow': 'var(--color-yellow)',
        'yellow-bright': 'var(--color-yellow-bright)',
        'yellow-dim': 'var(--color-yellow-dim)',

        'salmon': 'var(--color-salmon)',
        'salmon-bright': 'var(--color-salmon-bright)',
        'salmon-dim': 'var(--color-salmon-dim)',

        'blue': 'var(--color-blue)',
        'blue-bright': 'var(--color-blue-bright)',
        'blue-dim': 'var(--color-blue-dim)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'hard': 'var(--shadow-hard)',
      },
    },
  },
  plugins: [],
};
