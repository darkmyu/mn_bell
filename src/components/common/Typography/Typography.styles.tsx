import styled from 'styled-components/native';
import { TypographyProps } from './Typography';

export const Text = styled.Text<TypographyProps>`
  color: ${(props) => props.theme.colors.onSurface};
  font-size: ${(props) => props.size};
  font-family: ${({ weight, theme }) => theme.fonts[weight ?? 'regular']};
`;
