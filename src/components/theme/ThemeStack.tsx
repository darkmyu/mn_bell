import { Stack } from 'expo-router';
import styled from 'styled-components/native';

const ThemeStack = styled(Stack).attrs((props) => ({
  screenOptions: {
    headerShown: false,
    contentStyle: {
      backgroundColor: props.theme.colors.surface,
    },
  },
}))``;

export default ThemeStack;
