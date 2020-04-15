import styled from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin: 10px 25px;
  align-items: stretch;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  height: 60px
  justify-content: center;
`;

export const AvatarView = styled.View``;

export const Greetings = styled.View`
  flex: 3;
  margin-left: 20px;
  align-items: flex-start;
  justify-content: center;
`;

export const Message = styled.Text`
  flex: 1;
  height: 30px;
  color: #999;
`;

export const Name = styled.Text`
  flex: 1;
  height: 25px;
  color: #555;
  font-size: 20px;
  font-weight: bold;
`;

export const Logout = styled(BorderlessButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Deliveries = styled.View`
  flex: 1;
  margin-top: 20px;
  align-items: stretch;
`;

export const SubHeader = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #555;
`;

export const Options = styled.View`
  flex-direction: row;
`;

export const OptionsButton = styled(BorderlessButton)``;

export const OptionsText = styled.Text`
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  margin: 0 5px;
  color: ${(props) => (props.selected ? '#7159c1' : '#555')};
  border-color: ${(props) => (props.selected ? '#7159c1' : 'transparent')};
  border-bottom-width: 2px;
`;
