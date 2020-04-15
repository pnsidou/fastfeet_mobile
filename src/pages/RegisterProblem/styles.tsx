import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const StyledInput = styled.TextInput`
  background: white;
  border-radius: 4px;
  justify-content: flex-start;
  border: 1px solid #ccc;
  text-align-vertical: top;
  height: 300px;
  font-size: 18px;
`;

export const StyledButton = styled(RectButton)`
  background: #7159c1;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 30px;
  height: 50px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 18px;
`;
