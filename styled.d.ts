import 'styled-components/native';

declare module 'styled-components/native' {
  export interface ThemeColors {
    primary: string;
    surface: string;
    onSurface: string;
    container: string;
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
