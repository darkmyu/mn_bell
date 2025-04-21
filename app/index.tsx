import { useThemeContext } from '@/themes/ThemeContextProvider';
import { Button } from 'react-native';
import styled from 'styled-components/native';

export default function Index() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <StyledView>
      <StyledText>{`isDark: ${isDark}`}</StyledText>
      <Button title="Toggle Theme" onPress={() => toggleTheme()} />
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.surface};
`;

const StyledText = styled.Text`
  font-weight: 700;
  color: ${(props) => props.theme.colors.onSurface};
`;
