import styled from 'styled-components/native';

interface Props {
  vertical?: number;
  horizontal?: number;
}

function Spacer({ vertical = 0, horizontal = 0 }: Props) {
  return <Container vertical={vertical} horizontal={horizontal} />;
}

const Container = styled.View<Props>`
  width: ${(props) => `${props.horizontal}px`};
  height: ${(props) => `${props.vertical}px`};
`;

export default Spacer;
