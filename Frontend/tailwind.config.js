import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {

      mainclr: '#d5294d',

    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
});
