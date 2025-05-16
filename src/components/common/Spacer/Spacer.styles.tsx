import styled from 'styled-components/native';
import { SpacerProps } from './Spacer';

export const Spacer = styled.View<SpacerProps>`
  width: ${(props) => `${props.horizontal}px`};
  height: ${(props) => `${props.vertical}px`};
`;
