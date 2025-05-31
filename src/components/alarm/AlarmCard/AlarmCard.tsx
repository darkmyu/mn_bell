import Toggle from '@/components/common/Toggle';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from 'react';
import { useTheme } from 'styled-components/native';
import * as S from './AlarmCard.styles';

function AlarmCard() {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Container>
      <S.Inner>
        <S.Content>
          <S.Topic>
            <FontAwesome6 name="bowl-food" size={14} color={theme.colors.primary} />
            <S.Subject>식사</S.Subject>
          </S.Topic>
          <S.Time>08:00</S.Time>
        </S.Content>
        <Toggle value={isActive} onValueChange={(value) => setIsActive(value)} />
      </S.Inner>
      <S.Descriptions>
        <S.Description>
          <Feather name="calendar" size={14} color={theme.colors.content} />
          <S.DescriptionText>매일</S.DescriptionText>
        </S.Description>
        <S.Description>
          <Feather name="calendar" size={14} color={theme.colors.content} />
          <S.DescriptionText>아카나</S.DescriptionText>
        </S.Description>
        <S.Description>
          <Feather name="calendar" size={14} color={theme.colors.content} />
          <S.DescriptionText>20g</S.DescriptionText>
        </S.Description>
      </S.Descriptions>
    </S.Container>
  );
}

export default AlarmCard;
