import * as S from './Spacer.styles';

export interface SpacerProps {
  vertical?: number;
  horizontal?: number;
}

function Spacer({ vertical = 0, horizontal = 0 }: SpacerProps) {
  return <S.Spacer vertical={vertical} horizontal={horizontal} />;
}

export default Spacer;
