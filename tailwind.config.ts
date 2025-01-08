import type { Config } from 'tailwindcss';

console.log('TAILWINDING');
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
