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
  typography: {
    fontFamily: almarai.style.fontFamily,
    h4: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "20.09px",
    },
    h5: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "17.86px",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    body1: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
    },
  },
});

export default AppTheme;
