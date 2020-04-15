import styled from 'styled-components/native';
import { darken } from 'polished';

import { RectButton } from 'react-native-gesture-handler';

export const InfoBox = styled.View`
  align-items: flex-start;
  padding: 10px 10px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const InfoBoxHeader = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #7159c1;
  margin-left: 10px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledText = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const VSpace = styled.View`
  height: 7px;
`;

export const DateRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const DateColumn = styled.View`
  align-items: center;
  padding: 0 5px;
`;

const buttonColor = '#f7fcff';

export const ButtonBox = styled.View`
  flex-direction: row;
  background: ${buttonColor};
  border-radius: 10px;
  border: 1px solid ${darken(0.05, buttonColor)};
  align-items: center;
`;

export const ButtonBorderFrame = styled.View`
  height: 100%;
  width: 100%;
  border: 1px solid ${darken(0.05, buttonColor)};
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(RectButton)`
  background: transparent;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 0;
`;

export const ButtonText = styled.Text`
  color: #aaa;
  font-size: 12px;
`;
