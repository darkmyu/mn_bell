import { ThemeFonts } from 'styled-components/native';
import * as S from './Typography.styles';

export interface TypographyProps {
  size?: number;
  weight?: keyof ThemeFonts;
  children: React.ReactNode;
}

function Typography({ size = 14, weight = 'regular', children }: TypographyProps) {
  return (
    <S.Text size={size} weight={weight}>
      {children}
    </S.Text>
  );
}

export default Typography;
