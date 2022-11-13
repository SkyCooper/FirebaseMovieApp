/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};


//! https://tailwind-elements.com/quick-start/ buradan ilgili bölümü alıp dosya içini güncelliyoruz.   {html,js} bu bölüm içine hangi dosyalar ile çalışacak isek onları ekliyoruz. Mesela jsx ilave ettik yukarıda veya typscript için ts/tsx eklenebilir. 
// module.exports = {
//   content: [
//     "./src/**/*.{html,js}",
//     "./node_modules/tw-elements/dist/js/**/*.js",
//   ],
//   plugins: [require("tw-elements/dist/plugin")],
// };