import { createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const customTheme = () => {
  const getTheme = createTheme({
    palette: {
      primary: { main: "#F4F7FA", light: "#fff" },
      info: {
        main: "#396aff",
        light: "#e7edff",
        dark: "#343c6a",
      },
      success: {
        main: "#65dcbb",
        light: "#dcfaf8",
      },
      error: {
        main: "#ff4b4a",
        contrastText: "#fc7900",
      },
      warning: {
        light: "#fff5d9",
        main: "#ffbb38",
      },
      background: {
        default: "#F4F7FA",
      },
    },
    typography: getTypographyStyles() as TypographyOptions,
    components: {
      MuiButton: {
        styleOverrides: {
          text: {
            color: "#343c6a",
            fontSize: "18px",
            textTransform: "none",
          },
        },
      },
      MuiCircularProgress: {
        styleOverrides: {
          root: {
            color: "#396aff",
            alignSelf: "center",
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: "4px",
            backgroundColor: "#396aff",
          },
          bar: {
            borderRadius: "2px",
          },
        },
      },
    },
  });
  return { getTheme };
};

const getTypographyStyles = () => ({
  fontFamily: "'Open Sans', sans-serif",
  h1: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    "@media (max-width:600px)": {
      fontSize: "2rem",
    },
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.3,
    "@media (max-width:600px)": {
      fontSize: "1.75rem",
    },
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.4,
    "@media (max-width:600px)": {
      fontSize: "1.5rem",
    },
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 500,
    lineHeight: 1.5,
    "@media (max-width:600px)": {
      fontSize: "1.25rem",
    },
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: 1.6,
    "@media (max-width:600px)": {
      fontSize: "1rem",
    },
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.7,
    "@media (max-width:600px)": {
      fontSize: "0.875rem",
    },
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.75,
    "@media (max-width:600px)": {
      fontSize: "0.875rem",
    },
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.6,
    "@media (max-width:600px)": {
      fontSize: "0.75rem",
    },
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    "@media (max-width:600px)": {
      fontSize: "0.875rem",
    },
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
    "@media (max-width:600px)": {
      fontSize: "0.75rem",
    },
  },
  caption: {
    fontSize: "0.85rem",
    fontWeight: 400,
    lineHeight: 1.66,
    color: "#718ebf",
    "@media (max-width:600px)": {
      fontSize: "0.625rem",
    },
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.083em",
    lineHeight: 2.66,
    textTransform: "uppercase",
    "@media (max-width:600px)": {
      fontSize: "0.625rem",
    },
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "uppercase",
    "@media (max-width:600px)": {
      fontSize: "0.75rem",
    },
  },
});
