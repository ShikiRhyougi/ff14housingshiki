module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Tahoma',
      secondary: 'Tahoma',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#b10000',
        accent: '#b10000',
      },
      backgroundImage: {
        site: "url('./assets/bg16.png')",
        banner: "url('./assets/headerbild2.png')",
        about: "url('./assets/about me5.PNG')",
        contact: "url('./assets/services9.5.jpg)",
      },
    },
  },
  plugins: [],
};
