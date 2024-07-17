import useThemeMode from "@/hooks/useThemeMode";
import {
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
  createTheme,
} from "@mui/material/styles";
import { useMemo } from "react";
import palette from "./palette";
import typography from "./typography";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { themeMode } = useThemeMode();
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      typography,
    }),
    [themeMode]
  );

  const theme = createTheme(themeOptions);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
