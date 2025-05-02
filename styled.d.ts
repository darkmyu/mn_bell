import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      surface: string;
      onSurface: string;
    };
  }
}
