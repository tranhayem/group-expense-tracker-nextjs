"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const HEADER_HEIGHT = "60px";

const GETCustom = {
  headerHeight: HEADER_HEIGHT,
};

declare module "@mui/material/styles" {
  interface Theme {
    GETCustom: typeof GETCustom;
  }
  interface ThemeOptions {
    GETCustom?: typeof GETCustom;
  }

  interface Palette {
    appbar: {
      main: string;
      contrastText: string;
      border?: string;
    };
  }
  interface PaletteOptions {
    appbar?: Partial<Palette["appbar"]>;
  }
}

const theme = createTheme({
  GETCustom,

  cssVariables: { colorSchemeSelector: "class" },

  typography: { fontFamily: roboto.style.fontFamily },

  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#a4a7f6" },
        text: { primary: "#1a1a1a", secondary: "#555555" },
        appbar: { main: "#dfe3ee", contrastText: "#1a1a1a" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#6b5aca" },
        text: { primary: "#e6edf3", secondary: "#8b949e" },
        appbar: { main: "#2d2d53", contrastText: "#e6edf3" },
      },
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: theme.GETCustom.headerHeight,
          lineHeight: theme.GETCustom.headerHeight,
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",

          "--Paper-shadow": "unset !important",
          "--Paper-overlay": "unset !important",

          // Light mode
          backgroundColor: theme.colorSchemes?.light?.palette?.appbar?.main,
          color: theme.colorSchemes?.light?.palette?.appbar?.contrastText,

          // Dark mode
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: theme.colorSchemes?.dark?.palette?.appbar?.main,
            color: theme.colorSchemes?.dark?.palette?.appbar?.contrastText,
          },
        }),
      },
    },
  },
});

export default theme;
