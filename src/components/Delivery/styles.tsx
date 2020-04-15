import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  align-items: stretch;
  background-color: #e2e9ff;
  border: 4px solid #e2e9ff;
  border-radius: 4px;
`;

export const StatusContainer = styled.View`
  background-color: #eee;
  padding: 10px;
`;

export const StatusHeader = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const StatusHeaderText = styled.Text`
  color: #7159c1;
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
`;

export const Status = styled.View``;

export const InfoContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
`;

export const Date = styled.View`
  flex: 1.5;
`;

export const StyledTitle = styled.Text``;

export const StyledText = styled.Text`
  font-weight: bold;
`;

export const City = styled.View`
  flex: 1.5;
`;

export const Details = styled.Text`
  flex: 1;
  color: #7159c1;
  justify-content: flex-end;
  text-align-vertical: center;
`;
