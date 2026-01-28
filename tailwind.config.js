/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3498db",
          dark: "#2980b9",
        },
        success: {
          DEFAULT: "#2ecc71",
          dark: "#27ae60",
        },
        danger: {
          DEFAULT: "#e74c3c",
          dark: "#c0392b",
        },
        warning: {
          DEFAULT: "#f39c12",
          dark: "#e67e22",
        },
        info: {
          DEFAULT: "#34495e",
          dark: "#2c3e50",
        },
      },
    },
  },
  plugins: [],
};
