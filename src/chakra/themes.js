import { background, extendBaseTheme, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import "@fontsource/open-sans";
import chakraTheme from "@chakra-ui/theme";

const { Button } = chakraTheme.components;

export const theme = extendBaseTheme({
  body: {
    bg: 'steelblue'
  },
  component: {
    Button
  }
});