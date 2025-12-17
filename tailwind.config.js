/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",          // everything inside app/
    "./app/components/**/*.{js,jsx,ts,tsx}", // components + elements + subComponents
    "./app/screens/**/*.{js,jsx,ts,tsx}",    // screens folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        blue_whitish: '#E3F5FF',
        blue_darkish: '#0C2246',
      }
    }
    ,
  },
  plugins: [],
}