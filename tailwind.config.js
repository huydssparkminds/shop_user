// eslint-disable-next-line @typescript-eslint/no-var-requires
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [  flowbite.content(),"./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js'],
  

  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
};
