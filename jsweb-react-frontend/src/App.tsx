import "./style.css";
import { PageLayout } from "./ui-components/PageLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

/** ------------------------------------
 *  App
 *  ------------------------------------
 *  Second-most Root level of application. Start of actual rendering behaviour.
 *
 *  <div className="app"> - Highest level div. Renders background colour.
 *  <ThemeProvider> - Material UI Wrapper that lets me overwrite the theming in all contained material UI components.
 * ------------------------------------ */
declare module "@mui/material/styles" {
  interface Theme {
    colours: {
      orange: string;
      steel: string;
      red: string;
      green: string;
      blue: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colours?: {
      orange?: string;
      steel?: string;
      red?: string;
      green?: string;
      blue?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Lexend",
    h2: {
      fontWeight: "bold",
      letterSpacing: "-2%",
    },
    subtitle1: {
      fontsize: 28,
      lineHeight: "150%",
      fontWeight: "normal",
    },
  },
  colours: {
    orange: "#FF9456",
    steel: "#323F49",
    red: "#D85A62",
    green: "#6AB97B",
    blue: "#2D8CC5",
  },
  palette: {
    primary: {
      main: "#FF9456",
      dark: orange[500],
    },
    secondary: {
      main: "#323F49",
    },
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <PageLayout />
      </ThemeProvider>
    </div>
  );
}

export default App;
