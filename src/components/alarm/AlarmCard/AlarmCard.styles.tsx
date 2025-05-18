import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 4px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.container};
`;

export const Inner = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Subject = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const Icon = styled(FontAwesome5)`
  color: ${(props) => props.theme.colors.primary};
`;
