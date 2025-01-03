
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
 
//   ],
 
// }
import plugin from 'daisyui';

export default {
   content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   ],
    theme: {
        extend: {},
    },
    plugins: [plugin],
};
