import 'styled-components/native';

declare module 'styled-components/native' {
  export interface ThemeColors {
    white: string;
    black: string;
    primary: string;
    secondary: string;
    background: string;
    content: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    gray8: string;
    gray9: string;
    gray10: string;
    gray11: string;
    gray12: string;
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
