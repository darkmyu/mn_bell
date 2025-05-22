import 'styled-components/native';

declare module 'styled-components/native' {
  export interface ThemeColors {
    white: string;
    black: string;
    primary: string;
    secondary: string;
    surface: string;
    onSurfaceLow: string;
    onSurface: string;
    container: string;
    containerHigh: string;
  }

  export interface ThemeFonts {
    thin: string;
    extraLight: string;
    light: string;
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
    extraBold: string;
    black: string;
  }

  export interface DefaultTheme {
    colors: ThemeColors;
    fonts: ThemeFonts;
  }
}
