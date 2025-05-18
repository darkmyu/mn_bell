import Toggle from '@/components/common/Toggle';
import Typography from '@/components/common/Typography';
import { Text } from 'react-native';
import * as S from './AlarmCard.styles';

function AlarmCard() {
  return (
    <S.Container>
      <S.Inner>
        <S.Content>
          <S.Subject>
            <S.Icon name="walking" size={14} />
            <Typography size={12} color="primary" weight="bold">
              산책
            </Typography>
          </S.Subject>
          <Typography size={32} weight="bold">
            08:00
          </Typography>
        </S.Content>
        <Toggle />
      </S.Inner>

      <Text>Description</Text>
    </S.Container>
  );
}

export default AlarmCard;
