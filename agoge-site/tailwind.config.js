/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#967a26', // Din primära färg (din guldbruna)
          secondary: '#264296', // Din sekundära färg (din mörkblå)
          // Du kan lägga till fler färger här om du behöver
          // accent: '#...',
          // neutral: '#...',
        },
      },
    },
    plugins: [],
  }