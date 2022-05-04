import { createTheme } from "@mui/material/styles";
import { primaryColor, secondaryColor } from "./color-palette";


const theme = createTheme({
  palette: {
    primary: primaryColor,
    secondary: {
      main: secondaryColor[500],
      light: secondaryColor[100],
      dark: secondaryColor[700],
    },
  },
});

export default theme;
