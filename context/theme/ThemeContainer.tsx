import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import {
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core";

import theme from "../../styles/theme";

export const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <EmotionThemeProvider theme={theme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};
