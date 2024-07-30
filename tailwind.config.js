/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
     theme: {
          extend: {
               backgroundImage: {
                    'custom-gradient':
                         'linear-gradient(180deg, rgb(0 0 0 / 8%) 0%, rgba(0, 0, 0, 0) 5%)',
                    'custom-gradient-2':
                         'linear-gradient(0deg, rgb(0 0 0 / 8%) 0%, rgba(0, 0, 0, 0) 5%)',
               },
          },
     },
     plugins: [],
};
