import { ThemeColors, ThemeFonts } from 'styled-components/native';
import * as S from './Typography.styles';

export interface TypographyProps {
  size?: number;
  color?: keyof ThemeColors;
  weight?: keyof ThemeFonts;
  children: React.ReactNode;
}

function Typography({ size = 14, color = 'onSurface', weight = 'regular', children }: TypographyProps) {
  return (
    <S.Text size={size} color={color} weight={weight}>
      {children}
    </S.Text>
  );
}

export default Typography;
