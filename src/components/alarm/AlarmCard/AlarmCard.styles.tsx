import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.gray1};
`;

export const Inner = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Topic = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const Subject = styled.Text`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.primary};
`;

export const Time = styled.Text`
  font-size: 32px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.content};
`;

export const Descriptions = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Description = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const DescriptionText = styled.Text`
  color: ${(props) => props.theme.colors.content};
  font-family: ${(props) => props.theme.fonts.semiBold};
`;
