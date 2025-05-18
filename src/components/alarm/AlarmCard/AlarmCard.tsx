import Toggle from '@/components/common/Toggle';
import { Text } from 'react-native';
import * as S from './AlarmCard.styles';

function AlarmCard() {
  return (
    <S.Container>
      <S.Inner>
        <S.Content>
          <S.Subject>
            <S.Icon name="walking" size={14} />
            <S.Title>산책</S.Title>
          </S.Subject>
          <S.Time>123456789</S.Time>
        </S.Content>
        <Toggle />
      </S.Inner>

      <Text>Description</Text>
    </S.Container>
  );
}

export default AlarmCard;
