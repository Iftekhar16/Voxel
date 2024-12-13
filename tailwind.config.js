/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'light1': '#FFFFFF',
        'light2': '#EDF4F8',
        'light3': '#E3ECF0',
        'light4': '#C6DEEB',
        'dark1': '#6E95AA',
        'dark2': '#454A58',
        'accent1': '#FEEEE9',
        'accent2': '#FD824B',
      } // https://coolors.co/feeee9-fd824b-454a58-6e95aa-c6deeb-e3ecf0-edf4f8-ffffff
    },
  },
  plugins: [],
}