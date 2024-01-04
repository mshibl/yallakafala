import { ThemeProvider, Typography } from "@mui/material";
import AppTheme from "../utils/AppTheme";

export default function Home() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Typography variant="body1">Hello World</Typography>
    </ThemeProvider>
  );
}
