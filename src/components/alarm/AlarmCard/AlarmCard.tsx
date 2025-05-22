import Toggle from '@/components/common/Toggle';
import Typography from '@/components/common/Typography';
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
          <S.Subject>
            <FontAwesome6 name="bowl-food" size={14} color={theme.colors.primary} />
            <Typography size={12} color="primary" weight="bold">
              식사
            </Typography>
          </S.Subject>
          <Typography size={32} weight="bold">
            08:00
          </Typography>
        </S.Content>
        <Toggle value={isActive} onValueChange={(value) => setIsActive(value)} />
      </S.Inner>
      <S.Descriptions>
        <S.Description>
          <Feather name="calendar" size={14} color={theme.colors.onSurfaceLow} />
          <Typography color="onSurfaceLow" weight="semiBold">
            매일
          </Typography>
        </S.Description>
        <S.Description>
          <Feather name="calendar" size={14} color={theme.colors.onSurfaceLow} />
          <Typography color="onSurfaceLow" weight="semiBold">
            아카나
          </Typography>
        </S.Description>
        <S.Description>
          <Feather name="calendar" size={14} color={theme.colors.onSurfaceLow} />
          <Typography color="onSurfaceLow" weight="semiBold">
            20g
          </Typography>
        </S.Description>
      </S.Descriptions>
    </S.Container>
  );
}

export default AlarmCard;
