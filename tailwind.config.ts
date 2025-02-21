import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // For your UI components
    "./src/**/*.{js,ts,jsx,tsx}", // If you are using `src/`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
