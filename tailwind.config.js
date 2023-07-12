/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      height: {
        110: "450px",
        105: "410px",
        120: "550px",
        device: "90vh",
        85: "345px",
      },
      width: {
        140: "650px",
        "45/100": "45%",
        "4/10": "40%",
      },
      maxWidth: {
        "1/2": "50%",
      },
      backgroundImage: {
        bgDesktop: `url('/images/image-hero-desktop.jpg')`,
        bgMobile: `url('/images/image-hero-mobile.jpg')`,
      },
    },
  },
  plugins: [],
};
