module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ["Inter", "Arial", "sans-serif"]
        }
      },
    },
    plugins: [require('tailwindcss-motion')],
};
  