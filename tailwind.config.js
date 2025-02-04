/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
    colors: {
      white: "#ffffff",
      blue: {
        900: "#2C74F7",
        600: "#2670FB",
        200: "#EAECF6",
        100: "#D6E6FF",
      },
      yellow: {
        900: "#FDD53E",
        100: "#F7FAB7",
      },
      black: {
        900: "#000000",
        33: "#33323C",
      },
      gray: {
        400: "#EAEAEA",
        100: "#F9FAFD",
      },
    },
  },
  plugins: [],
};
