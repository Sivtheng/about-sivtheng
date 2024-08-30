/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#31363F', // background color
        secondary: '#EEEEEE', // text color
        highlight: '#222831', // nav color
        accent: '#76ABAE', // accent color
      },
      fontFamily: {
        vscode: ['"Fira Code"', 'monospace'], // vscode font
      },
    },
  },
  plugins: [],
}