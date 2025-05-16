import { Animated, Platform } from 'react-native';
import styled from 'styled-components/native';

export const Track = styled.View`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: ${() => (true ? '#4CD964' : '#ccc')};
  justify-content: center;
`;

export const Thumb = styled(Animated.View)`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 10px;
  background-color: white;

  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.2;
      shadow-radius: 2px;
    `,
    android: `
      elevation: 3;
    `,
  })}
`;
