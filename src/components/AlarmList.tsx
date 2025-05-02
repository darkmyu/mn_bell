import { useThemeContext } from '@/themes/ThemeContextProvider';
import styled from 'styled-components/native';

function AlarmList() {
  const { isDark } = useThemeContext();

  return <StyledText>{`isDark: ${isDark}`}</StyledText>;
}

const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.onSurface};
`;

export default AlarmList;
