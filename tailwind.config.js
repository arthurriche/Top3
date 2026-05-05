/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        navy: "#0b1730",
        gold: "#c9a45c",
        electric: "#2563eb",
        cloud: "#f5f7fb"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(7, 17, 31, 0.12)",
        soft: "0 16px 40px rgba(7, 17, 31, 0.08)"
      }
    }
  },
  plugins: []
};
