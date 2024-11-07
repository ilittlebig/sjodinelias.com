import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        "black": "#121212",
        "grayish": "#FBEAEB",
        "subtext": "#C8B2B3",
        "blue": "#3E41FF",
        "dark-border": "#1E1E1E",
      }
    }
  },

  plugins: []
} satisfies Config;
