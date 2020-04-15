import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const DrawContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background: transparent;
  align-items: center;
  padding: 5px 25px 5px 15px;
`;

export const TextContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledText = styled.Text`
  color: #aaa;
  width: 60px;
`;

const pointSize = 12;

export const Point = styled.View`
  background: ${(props) => (props.active ? '#7159c1' : '#eee')};
  height: ${pointSize}px;
  width: ${pointSize}px;
  border-radius: ${pointSize / 2}px;
  border-color: #7159c1;
  border-width: 1.5px;
`;

export const Line = styled.View`
  flex: 1;
  height: 0;
  background: ${(props) => (props.active ? '#7159c1' : '#999')};
  border-color: #7159c1;
  border-width: 2px;
`;
