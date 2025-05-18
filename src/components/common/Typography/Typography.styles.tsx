import styled from 'styled-components/native';
import { TypographyProps } from './Typography';

export const Text = styled.Text<TypographyProps>`
  font-size: ${(props) => props.size}px;
  font-family: ${({ weight, theme }) => theme.fonts[weight ?? 'regular']};
  color: ${({ theme, color }) => theme.colors[color ?? 'onSurface']};
`;
