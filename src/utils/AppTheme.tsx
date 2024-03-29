"use client";
import { createTheme } from "@mui/material/styles";
import { Almarai } from "next/font/google";

const almarai = Almarai({
  weight: ["400", "700"], // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["arabic"], // if single subset, otherwise you use array like ['arabic', 'latin']
});

const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#7C2C69",
    },
    secondary: {
      main: "#2194BC",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: almarai.style.fontFamily,
        },
      },
    },
  },
  spacing: 2,
  typography: {
    fontFamily: almarai.style.fontFamily,
    h1: {
      margin: "0",
    },
    h2: {
      margin: "0",
    },
    h3: {
      margin: "0",
    },
    h4: {
      margin: "0",
    },
    body1: {
      fontSize: "1.2rem",
      lineHeight: 2,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
});

export default AppTheme;
