type Colors = {
  colors: {
    black: string;
    white: string;

    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;

    purple300: string;
    purple500: string;

    blue300: string;
    blue500: string;

    red500: string;
  };
  textSizes: {
    titleXl: string;
    titleL: string;
    titleM: string;
    titleS: string;
    titleXs: string;
    textXl: string;
    textL: string;
    textM: string;
    textS: string;
    textXs: string;
  };
  fonts: {
    primaryFont: string;
    secondaryFont: string;
  };
  transitions: string;
  borderRadios: string;
};

export default <Colors>{
  colors: {
    black: "#000",
    white: "#fff",

    gray100: "#F2F2F2",
    gray200: "#D9D9D9",
    gray300: "#808080",
    gray400: "#333333",
    gray500: "#262626",
    gray600: "#1A1A1A",
    gray700: "#0D0D0D",

    purple300: "#8284FA",
    purple500: "#5E60CE",

    blue300: "#4EA8DE",
    blue500: "#1E6F9F",

    red500: "#E25858",
  },
  textSizes: {
    titleXl: "3rem",
    titleL: "2rem",
    titleM: "1.5rem",
    titleS: "1.2rem",
    titleXs: "1.125rem",
    textXl: "3rem",
    textL: "2rem",
    textM: "1.5rem",
    textS: "1.2rem",
    textXs: "1.125rem",
  },

  fonts: {
    primaryFont: "'Inter', sans-serif",
    secondaryFont: "'Inter', sans-serif",
  },

  transitions: ".1s",
  borderRadios: "8px",
};
