/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode by adding class="dark" to html
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#09090b', // zinc-950
          800: '#18181b', // zinc-900
          700: '#27272a', // zinc-800
        },
        accent: {
          primary: '#06b6d4', // cyan-500
          secondary: '#8b5cf6', // violet-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
