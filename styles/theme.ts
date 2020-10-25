import { theme, DefaultTheme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    heading: `DM Serif Text, sans-serif`,
    body: `Open Sans, sans-serif`,
    mono: "Roboto Mono, sans-serif",
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      "300": "#e8e3e3",
      "900": "#303030",
    },
    green: {
      ...theme.colors.green,
      "600": "#00BF9D",
    },
    blue: {
      ...theme.colors.blue,
      "600": "#2D9CDB",
    },
    cyan: {
      ...theme.colors.cyan,
      "400": "#48F4FF",
    },
    teal: {
      ...theme.colors.teal,
      "300": "#48FFDE",
    },
  },
};

export default customTheme;
