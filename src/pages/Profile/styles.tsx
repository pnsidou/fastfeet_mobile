import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 50px 40px;
  justify-content: center;
  align-items: stretch;
`;

export const AvatarContainer = styled.View`
  align-items: center;
  padding: 0;
`;

export const Subtitle = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: #999;
`;

export const StyledText = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: white;
  text-align-vertical: center;
`;

export const StyledButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 50px;
  border-radius: 5px;
  width: 100%;
  background: red;
`;
