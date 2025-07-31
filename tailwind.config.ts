// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // مسیر اپ رو تعریف کن
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // اگر صفحات صفحه ای هم داری
  ],
  theme: {
    extend: {
      fontFamily: {
        peydaReg: ['var(--font-peydaReg)'],
        peydaMed: ['var(--font-peydaMed)'],
        peydaSemi: ['var(--font-peydaSemi)'],
        peydaBold: ['var(--font-peydaBold)'],
      },
    },
  },
  plugins: [],
};
