import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface Props {
  children: React.ReactNode;
}

function ThemeSafeAreaView({ children }: Props) {
  return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
}

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export default ThemeSafeAreaView;
