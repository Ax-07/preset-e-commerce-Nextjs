/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      screen: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translate(-50%, 0%)",
            opacity: 0,
            filter: "blur(0px)",
            background: "rgba(255, 255, 255, 0)",
          },
          "75%": {
            filter: "blur(20px)",
            background: "rgba(255, 255, 255, 1.0)",
          },
          "100%": {
            position: "relative",
            transform: "translate(0, 0)",
            opacity: 1,
            filter: "blur(0px)",
            background: "rgba(255, 255, 255, 0)",
          },
        },
      },
    },
  },
};
