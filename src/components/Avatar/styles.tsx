import styled from 'styled-components/native';
import { darken } from 'polished';

export const StyledAvatar = styled.Image.attrs({
  className: 'avatar',
})`
  display: flex;
  justify-content: center;
  padding: 7px;
  align-items: center;
  border-radius: 50px;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  font-weight: bold;
  background: ${(props) => props.color};
  color: ${(props) => darken(0.3, props.color)};
  border: 1px solid ${(props) => darken(0.3, props.color)};
`;

export const StyledText = styled.Text`
  font-size: ${(props) => props.size * 0.4}px;
  font-weight: bold;
  background: ${(props) => props.color};
  color: ${(props) => darken(0.15, props.color)};
  border-radius: ${(props) => props.size * 0.5}px;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  text-align: center;
  text-align-vertical: center;
`;
