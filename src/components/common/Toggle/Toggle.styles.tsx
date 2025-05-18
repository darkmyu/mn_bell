import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

export const Pressable = styled.Pressable<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const Track = styled(Animated.View)<Props>`
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.height / 2}px;
`;

export const Thumb = styled(Animated.View)<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.height / 2}px;
`;
