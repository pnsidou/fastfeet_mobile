import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Subtitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
`;

export const StyledList = styled(FlatList)`
  margin-top: 15px;
`;

export const ProblemBox = styled.View`
  flex-direction: row;
  background: white;
  border: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
`;

export const StyledDescription = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const StyledDate = styled.Text`
  color: #999;
`;
