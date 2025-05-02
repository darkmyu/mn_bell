import { Slot } from 'expo-router';
import styled from 'styled-components/native';

export default function HomeLayout() {
  return (
    <Container>
      <Slot />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.surface};
`;
