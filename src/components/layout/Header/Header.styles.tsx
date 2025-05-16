import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const Circle = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: gray;
`;

export const DateTime = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
