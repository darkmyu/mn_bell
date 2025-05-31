import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
`;

export const Backdrop = styled.View`
  width: 100%;
  padding: 32px 16px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Pressable = styled.Pressable`
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
`;
