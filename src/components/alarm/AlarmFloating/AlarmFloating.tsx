import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useTheme } from 'styled-components/native';
import * as S from './AlarmFloating.styles';
import { Pressable } from 'react-native';

function AlarmFloating() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Backdrop
        style={{
          boxShadow: `0 -10px 10px ${theme.colors.background}`,
        }}
      >
        <Pressable>
          {({ pressed }) => (
            <S.Floating pressed={pressed}>
              <FontAwesome5 name="plus" size={16} color={theme.colors.white} />
              <S.Text>빵이 일정 생성</S.Text>
            </S.Floating>
          )}
        </Pressable>
      </S.Backdrop>
    </S.Container>
  );
}

export default AlarmFloating;
